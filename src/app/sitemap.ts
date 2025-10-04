import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/shared/config/site';
import { getAllPosts, getAllCategories } from '@/entities/post';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.url;

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

  const posts = await getAllPosts();
  const postPages = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const categories = await getAllCategories();
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/posts/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...postPages,
    ...categoryPages,
  ];
}
