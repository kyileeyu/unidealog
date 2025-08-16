import { Post } from '@/entities/post';
import { Layout } from '@/widgets/layout';
import { PostList } from '@/widgets/post-list';
import { Bio } from '@/entities/user';
import { cn } from '@/shared/lib/utils';

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
  className
}: HomePageProps) {
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
        {bio && (
          <section className="mb-12">
            <Bio 
              name={author}
              bio={bio}
              githubUrl={githubUrl}
            />
          </section>
        )}

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
