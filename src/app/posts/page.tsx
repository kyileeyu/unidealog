import { getAllPosts, getAllCategories } from '@/entities/post';
import { SITE_CONFIG } from '@/shared/config/site';
import { Metadata } from 'next';
import { PostsPage } from '@/page-components/posts';

export const metadata: Metadata = {
  title: `All Posts | ${SITE_CONFIG.name}`,
  description: '모든 블로그 포스트를 확인해보세요.',
  openGraph: {
    title: `All Posts | ${SITE_CONFIG.name}`,
    description: '모든 블로그 포스트를 확인해보세요.',
    type: 'website',
  },
};

export default async function PostsListPage() {
  const posts = await getAllPosts();
  const categories = await getAllCategories();

  return (
    <PostsPage
      posts={posts}
      categories={categories}
    />
  );
}
