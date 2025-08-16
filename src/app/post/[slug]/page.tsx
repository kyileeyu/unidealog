import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPostBySlug } from '@/shared/lib/mdx';
import { PostDetailPage } from '@/page-components/post-detail';
import { SITE_CONFIG } from '@/shared/config/site';

interface PostPageProps {
  params: {
    slug: string;
  };
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
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.frontmatter.title} | Unidealog`,
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

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <PostDetailPage 
      post={post} 
      siteTitle={SITE_CONFIG.name}
      author={SITE_CONFIG.author.name}
    />
  );
}
