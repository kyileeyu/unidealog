import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug, getPostNavigation } from '@/entities/post';
import { PostDetailPage } from '@/page-components/post-detail';
import { SITE_CONFIG } from '@/shared/config/site';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

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
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const navigation = await getPostNavigation(resolvedParams.slug);

  return (
    <PostDetailPage
      post={post}
      previousPost={navigation.previous}
      nextPost={navigation.next}
    />
  );
}