'use client';

import { Post } from '@/entities/post';
import { Layout } from '@/widgets/layout';
import { PostList } from '@/widgets/post-list';
import { Badge } from '@/shared/ui/badge';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

interface PostsPageProps {
  posts: Post[];
  categories: string[];
  className?: string;
}

function PostsContent({
  posts,
  categories,
  className
}: PostsPageProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // URL에서 category 파라미터 읽기
  useEffect(() => {
    const categoryFromUrl = searchParams?.get('category');
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams, categories]);

  // 카테고리 선택 시 URL 업데이트
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    if (category) {
      router.push(`/posts?category=${category}`);
    } else {
      router.push('/posts');
    }
  };

  // 선택된 카테고리에 따라 포스트 필터링
  const filteredPosts = selectedCategory 
    ? posts.filter(post => post.frontmatter.categories.includes(selectedCategory))
    : posts;

  return (
    <Layout
      posts={posts}
      className={className}
    >
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">All Posts</h1>
          <p className="text-muted-foreground text-lg">
            총 {posts.length}개의 포스트가 있습니다.
          </p>
        </section>

        {categories.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">카테고리별 필터</h2>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedCategory === null ? "default" : "secondary"}
                className="cursor-pointer"
                onClick={() => handleCategoryChange(null)}
              >
                전체 ({posts.length})
              </Badge>
              {categories.map((category) => {
                const count = posts.filter(post =>
                  post.frontmatter.categories.includes(category)
                ).length;

                return (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "secondary"}
                    className="cursor-pointer"
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category} ({count})
                  </Badge>
                );
              })}
            </div>
          </section>
        )}

        <section>
          {selectedCategory && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                {selectedCategory} 카테고리
              </h2>
              <p className="text-muted-foreground">
                {filteredPosts.length}개의 포스트
              </p>
            </div>
          )}
          
          <PostList 
            posts={filteredPosts}
            variant="grid"
            emptyMessage={
              selectedCategory 
                ? `"${selectedCategory}" 카테고리에 포스트가 없습니다.`
                : "아직 작성된 포스트가 없습니다."
            }
          />
        </section>
      </div>
    </Layout>
  );
}

export function PostsPage(props: PostsPageProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PostsContent {...props} />
    </Suspense>
  );
}
