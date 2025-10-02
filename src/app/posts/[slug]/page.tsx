import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPostBySlug, getAllPosts } from '@/shared/lib/mdx';
import { getPostNavigation } from '@/features/post-navigation/lib/navigation';
import { PostDetailPage } from '@/page-components/post-detail';
import { SITE_CONFIG } from '@/shared/config/site';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 정적 경로 생성
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  
  return slugs.map((slug) => ({
    slug,
  }));
}

// 메타데이터 생성
export async function generateMetadata({ params }: PostPageProps) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.frontmatter.title} | ${SITE_CONFIG.name}`,
    description: post.frontmatter.description,
    keywords: post.frontmatter.tags.join(', '),
    authors: [{ name: post.frontmatter.author }],
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: 'article',
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
      tags: post.frontmatter.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.frontmatter.title,
      description: post.frontmatter.description,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // 네비게이션 계산
  const allPosts = getAllPosts();
  const navigation = getPostNavigation(allPosts, resolvedParams.slug);

  return (
    <PostDetailPage 
      post={post} 
      previousPost={navigation.prev ? {
        id: navigation.prev.id,
        slug: navigation.prev.slug,
        frontmatter: navigation.prev.frontmatter
      } : undefined}
      nextPost={navigation.next ? {
        id: navigation.next.id,
        slug: navigation.next.slug,
        frontmatter: navigation.next.frontmatter
      } : undefined}
    />
  );
}