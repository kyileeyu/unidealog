// 공통 타입 정의

export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Post extends BaseEntity {
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  published: boolean;
  publishedAt?: Date;
  category: Category;
  tags: string[];
  author: Author;
  readingTime: number;
  thumbnail?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
  count: number;
}

export interface Author {
  id: string;
  name: string;
  email: string;
  bio?: string;
  avatar?: string;
  socialLinks?: SocialLinks;
}

export interface SocialLinks {
  github?: string;
  twitter?: string;
  linkedin?: string;
  website?: string;
}

export interface SearchResult {
  posts: Post[];
  total: number;
  hasMore: boolean;
}

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PostSearchParams extends PaginationParams {
  query?: string;
  category?: string;
  tags?: string[];
}

// UI 관련 타입
export type Theme = "light" | "dark" | "system";

export interface NavigationItem {
  title: string;
  href: string;
  external?: boolean;
}

// 유틸리티 타입
export type WithOptional<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;
export type WithRequired<T, K extends keyof T> = T & Required<Pick<T, K>>;
