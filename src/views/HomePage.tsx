"use client";

import { Post } from "@/entities/post";
import { Layout } from "@/widgets/layout";
import { List } from "@/widgets/post";

interface HomePageProps {
  posts: Post[];
  className?: string;
}

export function HomePage({
  posts,
  className,
}: HomePageProps) {
  return (
    <Layout
      posts={posts}
      className={className}
    >
      <div className="container mx-auto px-4 py-8">
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Recent Posts</h2>
            <p className="text-muted-foreground">최신 포스트를 확인해보세요</p>
          </div>

          <List
            posts={posts}
            variant="grid"
            emptyMessage="아직 작성된 포스트가 없습니다."
          />
        </section>
      </div>
    </Layout>
  );
}
