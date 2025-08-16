import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { Post } from '@/entities/post';

const postsDirectory = path.join(process.cwd(), 'content/posts');

/**
 * 모든 포스트의 슬러그를 가져옵니다
 */
export function getAllPostSlugs(): string[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }
    
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter(name => name.endsWith('.md') || name.endsWith('.mdx'))
      .map(name => name.replace(/\.(md|mdx)$/, ''));
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

/**
 * 슬러그로 포스트를 가져옵니다
 */
export function getPostBySlug(slug: string): Post | null {
  try {
    const realSlug = slug.replace(/\.mdx?$/, '');
    
    // .mdx 파일을 먼저 찾고, 없으면 .md 파일을 찾습니다
    let fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(postsDirectory, `${realSlug}.md`);
    }
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    // 포스트 excerpt 생성 (첫 번째 문단 또는 description 사용)
    const excerpt = data.description || 
                   content.split('\n\n')[0].replace(/[#*`]/g, '').trim().substring(0, 150) + '...';

    return {
      id: realSlug,
      slug: realSlug,
      frontmatter: {
        emoji: data.emoji || '📝',
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString().split('T')[0],
        author: data.author || 'Anonymous',
        tags: Array.isArray(data.tags) ? data.tags : [],
        categories: Array.isArray(data.categories) ? data.categories : [],
        description: data.description || excerpt
      },
      content,
      excerpt,
      readingTime: Math.max(1, Math.ceil(stats.minutes)),
      wordCount: stats.words
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

/**
 * 모든 포스트를 가져옵니다 (정렬됨)
 */
export function getAllPosts(): Post[] {
  try {
    const slugs = getAllPostSlugs();
    const posts = slugs
      .map(slug => getPostBySlug(slug))
      .filter((post): post is Post => post !== null)
      .sort((a, b) => {
        // 날짜순으로 정렬 (최신순)
        return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
      });

    return posts;
  } catch (error) {
    console.error('Error getting all posts:', error);
    return [];
  }
}

/**
 * 카테고리별 포스트를 가져옵니다
 */
export function getPostsByCategory(category: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => 
    post.frontmatter.categories.includes(category)
  );
}

/**
 * 태그별 포스트를 가져옵니다
 */
export function getPostsByTag(tag: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => 
    post.frontmatter.tags.includes(tag)
  );
}

/**
 * 모든 카테고리를 가져옵니다
 */
export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set<string>();
  
  posts.forEach(post => {
    post.frontmatter.categories.forEach(category => {
      categories.add(category);
    });
  });
  
  return Array.from(categories).sort();
}

/**
 * 모든 태그를 가져옵니다
 */
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();
  
  posts.forEach(post => {
    post.frontmatter.tags.forEach(tag => {
      tags.add(tag);
    });
  });
  
  return Array.from(tags).sort();
}

/**
 * 관련 포스트를 가져옵니다 (같은 태그 또는 카테고리)
 */
export function getRelatedPosts(currentPost: Post, limit: number = 3): Post[] {
  const allPosts = getAllPosts().filter(post => post.slug !== currentPost.slug);
  
  // 같은 태그나 카테고리를 가진 포스트들에 점수를 매깁니다
  const postsWithScore = allPosts.map(post => {
    let score = 0;
    
    // 같은 카테고리 +2점
    const sharedCategories = post.frontmatter.categories.filter(cat =>
      currentPost.frontmatter.categories.includes(cat)
    );
    score += sharedCategories.length * 2;
    
    // 같은 태그 +1점
    const sharedTags = post.frontmatter.tags.filter(tag =>
      currentPost.frontmatter.tags.includes(tag)
    );
    score += sharedTags.length;
    
    return { post, score };
  });
  
  // 점수순으로 정렬하고 제한된 수만큼 반환
  return postsWithScore
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
}

/**
 * 포스트 검색
 */
export function searchPosts(query: string): Post[] {
  if (!query.trim()) {
    return [];
  }
  
  const allPosts = getAllPosts();
  const searchTerm = query.toLowerCase();
  
  return allPosts.filter(post => {
    const searchableContent = [
      post.frontmatter.title,
      post.frontmatter.description,
      post.content,
      ...post.frontmatter.tags,
      ...post.frontmatter.categories
    ].join(' ').toLowerCase();
    
    return searchableContent.includes(searchTerm);
  });
}
