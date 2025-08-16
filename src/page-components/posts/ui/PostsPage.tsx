'use client';

import { Post } from '@/entities/post';
import { Layout } from '@/widgets/layout';
import { PostList } from '@/widgets/post-list';
import { Badge } from '@/shared/ui/badge';
import { useState } from 'react';

interface PostsPageProps {
  posts: Post[];
  categories: string[];
  siteTitle: string;
  author: string;
  className?: string;
}

export function PostsPage({
  posts,
  categories,
  siteTitle,
  author,
  className
}: PostsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // 선택된 카테고리에 따라 포스트 필터링
  const filteredPosts = selectedCategory 
    ? posts.filter(post => post.frontmatter.categories.includes(selectedCategory))
    : posts;

  return (
    <Layout
      siteTitle={siteTitle}
      author={author}
      posts={posts}
      className={className}
    >
      <div className="container mx-auto px-4 py-8">
        {/* 페이지 헤더 */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">All Posts</h1>
          <p className="text-muted-foreground text-lg">
            총 {posts.length}개의 포스트가 있습니다.
          </p>
        </section>

        {/* 카테고리 필터 */}
        {categories.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">카테고리별 필터</h2>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedCategory === null ? "default" : "secondary"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(null)}
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
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category} ({count})
                  </Badge>
                );
              })}
            </div>
          </section>
        )}

        {/* 포스트 목록 */}
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
