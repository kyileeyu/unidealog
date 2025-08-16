export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  postCount: number;
  color?: string;
  icon?: string;
}

export interface CategoryWithPosts extends Category {
  posts: import('../../post/model/types').PostSummary[];
}
