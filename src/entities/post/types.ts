/**
 * Post entity types and interfaces
 * Based on existing bloggg structure with MDX support
 */

export interface PostFrontmatter {
  /** Emoji for the post (optional) */
  emoji?: string;
  /** Post title */
  title: string;
  /** Publication date */
  date: string;
  /** Post author */
  author: string;
  /** Post tags (space-separated in markdown, array in parsed) */
  tags: string[];
  /** Post categories (space-separated in markdown, array in parsed) */
  categories: string[];
  /** Post description/excerpt */
  description?: string;
  /** Featured image for the post */
  thumbnail?: string;
  /** Whether the post is published */
  published?: boolean;
  /** Post language */
  language?: string;
}

export interface Post {
  /** Unique identifier for the post */
  id: string;
  /** URL slug for the post */
  slug: string;
  /** Post frontmatter data */
  frontmatter: PostFrontmatter;
  /** Post content in MDX */
  content: string;
  /** Compiled MDX content */
  compiledContent?: string;
  /** Post excerpt */
  excerpt?: string;
  /** Reading time in minutes */
  readingTime?: number;
  /** Word count */
  wordCount?: number;
  /** Table of contents */
  toc?: TableOfContentsItem[];
}

export interface TableOfContentsItem {
  /** Heading text */
  text: string;
  /** Heading level (1-6) */
  level: number;
  /** Anchor link */
  anchor: string;
  /** Nested items */
  children?: TableOfContentsItem[];
}

export interface PostSummary {
  /** Post ID */
  id: string;
  /** Post slug */
  slug: string;
  /** Post title */
  title: string;
  /** Post description/excerpt */
  description?: string;
  /** Post emoji */
  emoji?: string;
  /** Publication date */
  date: string;
  /** Post author */
  author: string;
  /** Post categories */
  categories: string[];
  /** Post tags */
  tags: string[];
  /** Reading time */
  readingTime?: number;
  /** Featured image */
  thumbnail?: string;
}

export interface PostsFilter {
  /** Filter by category */
  category?: string;
  /** Filter by tag */
  tag?: string;
  /** Filter by author */
  author?: string;
  /** Search query */
  query?: string;
  /** Filter by published status */
  published?: boolean;
}

export interface PostsSort {
  /** Sort field */
  field: 'date' | 'title' | 'readingTime';
  /** Sort order */
  order: 'asc' | 'desc';
}

export interface PostNavigation {
  /** Previous post */
  previous?: PostSummary;
  /** Next post */
  next?: PostSummary;
}
