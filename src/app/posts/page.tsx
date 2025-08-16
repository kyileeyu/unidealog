import { getAllPosts, getAllCategories } from '@/shared/lib/mdx';
import { SITE_CONFIG } from '@/shared/config/site';
import { Metadata } from 'next';

// 전체 포스트 목록 페이지 컴포넌트를 만들어야 합니다
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

export default function PostsListPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <PostsPage 
      posts={posts}
      categories={categories}
      siteTitle={SITE_CONFIG.name}
      author={SITE_CONFIG.author.name}
    />
  );
}
