import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/shared/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  
  // 정적 페이지들
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // TODO: 블로그 포스트들 추가
  // const posts = await getAllPosts();
  // const postPages = posts.map((post) => ({
  //   url: `${baseUrl}/posts/${post.slug}`,
  //   lastModified: new Date(post.updatedAt || post.createdAt),
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.7,
  // }));

  // TODO: 카테고리 페이지들 추가
  // const categories = await getAllCategories();
  // const categoryPages = categories.map((category) => ({
  //   url: `${baseUrl}/posts/${category.slug}`,
  //   lastModified: new Date(),
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.6,
  // }));

  return [
    ...staticPages,
    // ...postPages,
    // ...categoryPages,
  ];
}
