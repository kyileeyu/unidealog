import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post, PostFrontmatter, PostSummary, PostsFilter, PostsSort, PostNavigation } from './types';
import { calculateReadingTime, generateSlugFromPath, extractTableOfContents } from './utils';

const POSTS_PATH = path.join(process.cwd(), 'content/posts');

/**
 * Get all posts from the content directory
 */
export async function getAllPosts(): Promise<Post[]> {
  const postFiles = getPostFiles(POSTS_PATH);
  const posts = await Promise.all(
    postFiles.map(async (filePath) => {
      const post = await getPostByPath(filePath);
      return post;
    })
  );

  return posts
    .filter((post): post is Post => post !== null)
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

/**
 * Get post summaries for listing pages
 */
export async function getPostSummaries(filter?: PostsFilter, sort?: PostsSort): Promise<PostSummary[]> {
  const posts = await getAllPosts();
  let filteredPosts = posts;

  // Apply filters
  if (filter) {
    filteredPosts = posts.filter((post) => {
      if (filter.category && !post.frontmatter.categories.includes(filter.category)) {
        return false;
      }
      if (filter.tag && !post.frontmatter.tags.includes(filter.tag)) {
        return false;
      }
      if (filter.author && post.frontmatter.author !== filter.author) {
        return false;
      }
      if (filter.published !== undefined && (post.frontmatter.published ?? true) !== filter.published) {
        return false;
      }
      if (filter.query) {
        const query = filter.query.toLowerCase();
        const searchFields = [
          post.frontmatter.title,
          post.frontmatter.description || post.excerpt || '',
          post.frontmatter.tags.join(' '),
          post.frontmatter.categories.join(' ')
        ].join(' ').toLowerCase();

        if (!searchFields.includes(query)) {
          return false;
        }
      }
      return true;
    });
  }

  // Apply sorting
  if (sort) {
    filteredPosts.sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (sort.field) {
        case 'date':
          aValue = new Date(a.frontmatter.date).getTime();
          bValue = new Date(b.frontmatter.date).getTime();
          break;
        case 'title':
          aValue = a.frontmatter.title;
          bValue = b.frontmatter.title;
          break;
        case 'readingTime':
          aValue = a.readingTime || 0;
          bValue = b.readingTime || 0;
          break;
        default:
          return 0;
      }

      if (sort.order === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });
  }

  // Convert to summaries
  return filteredPosts.map(postToSummary);
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}

/**
 * Get post navigation (previous/next posts)
 */
export async function getPostNavigation(currentSlug: string): Promise<PostNavigation> {
  const posts = await getAllPosts();
  const currentIndex = posts.findIndex((post) => post.slug === currentSlug);

  if (currentIndex === -1) {
    return {};
  }

  const navigation: PostNavigation = {};

  if (currentIndex > 0) {
    navigation.previous = postToSummary(posts[currentIndex - 1]);
  }

  if (currentIndex < posts.length - 1) {
    navigation.next = postToSummary(posts[currentIndex + 1]);
  }

  return navigation;
}

/**
 * Get all unique categories from posts
 */
export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  const categories = new Set<string>();

  posts.forEach((post) => {
    post.frontmatter.categories.forEach((category) => {
      categories.add(category);
    });
  });

  return Array.from(categories).sort();
}

/**
 * Get all unique tags from posts
 */
export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = new Set<string>();

  posts.forEach((post) => {
    post.frontmatter.tags.forEach((tag) => {
      tags.add(tag);
    });
  });

  return Array.from(tags).sort();
}

/**
 * Get posts by category
 */
export async function getPostsByCategory(category: string): Promise<PostSummary[]> {
  return getPostSummaries({ category });
}

/**
 * Get posts by tag
 */
export async function getPostsByTag(tag: string): Promise<PostSummary[]> {
  return getPostSummaries({ tag });
}

// Helper functions

function getPostFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files: string[] = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const itemPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      // Check for index.md or index.mdx in subdirectory
      const indexMd = path.join(itemPath, 'index.md');
      const indexMdx = path.join(itemPath, 'index.mdx');

      if (fs.existsSync(indexMd)) {
        files.push(indexMd);
      } else if (fs.existsSync(indexMdx)) {
        files.push(indexMdx);
      }
    } else if (item.name.endsWith('.md') || item.name.endsWith('.mdx')) {
      files.push(itemPath);
    }
  }

  return files;
}

async function getPostByPath(filePath: string): Promise<Post | null> {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    // Parse frontmatter
    const frontmatter: PostFrontmatter = {
      title: data.title || '',
      date: data.date || '',
      author: data.author || '',
      tags: typeof data.tags === 'string' ? data.tags.split(' ').filter(Boolean) : (data.tags || []),
      categories: typeof data.categories === 'string' ? data.categories.split(' ').filter(Boolean) : (data.categories || []),
      emoji: data.emoji,
      description: data.description,
      thumbnail: data.thumbnail,
      published: data.published !== false, // Default to true
      language: data.language || 'ko'
    };

    // Generate slug from file path
    const slug = generateSlugFromPath(filePath);

    // Calculate reading time and word count
    const readingTime = calculateReadingTime(content);
    const wordCount = content.split(/\s+/).length;

    // Extract table of contents
    const toc = extractTableOfContents(content);

    // Generate excerpt if not provided
    const excerpt = frontmatter.description || content.slice(0, 200).replace(/[#*`]/g, '').trim() + '...';

    const post: Post = {
      id: slug,
      slug,
      frontmatter,
      content,
      excerpt,
      readingTime,
      wordCount,
      toc
    };

    return post;
  } catch (error) {
    console.error(`Error reading post at ${filePath}:`, error);
    return null;
  }
}

function postToSummary(post: Post): PostSummary {
  return {
    id: post.id,
    slug: post.slug,
    title: post.frontmatter.title,
    description: post.frontmatter.description || post.excerpt,
    emoji: post.frontmatter.emoji,
    date: post.frontmatter.date,
    author: post.frontmatter.author,
    categories: post.frontmatter.categories,
    tags: post.frontmatter.tags,
    readingTime: post.readingTime,
    thumbnail: post.frontmatter.thumbnail
  };
}
