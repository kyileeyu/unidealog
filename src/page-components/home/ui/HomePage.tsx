"use client";

import { Post } from "@/entities/post";
import { Layout } from "@/widgets/layout";
import { PostList } from "@/widgets/post-list";

interface HomePageProps {
  posts: Post[];
  siteTitle: string;
  author: string;
  githubUrl?: string;
  bio?: string;
  className?: string;
}

export function HomePage({
  posts,
  siteTitle,
  author,
  githubUrl,
  bio,
  className,
}: HomePageProps) {
  // Create user object for Bio component
  const user = {
    id: "1",
    name: author,
    bio: {
      description: bio ? [bio] : [],
      role: "Developer",
    },
    social: {
      github: githubUrl,
    },
  };

  return (
    <Layout
      siteTitle={siteTitle}
      author={author}
      githubUrl={githubUrl}
      posts={posts}
      className={className}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Bio Section */}
        {/* {bio && (
          <section className="mb-12">
            <Bio 
              user={user}
              size="lg"
            />
          </section>
        )} */}

        {/* Posts Section */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Recent Posts</h2>
            <p className="text-muted-foreground">최신 포스트를 확인해보세요</p>
          </div>

          <PostList
            posts={posts}
            variant="grid"
            emptyMessage="아직 작성된 포스트가 없습니다."
          />
        </section>
      </div>
    </Layout>
  );
}
