import { Post } from '@/entities/post';
import { Layout } from '@/widgets/layout';
import { PostList } from '@/widgets/post-list';
import { PostSearch } from '@/features/post-search';
import { Badge } from '@/shared/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import { FileText, Calendar } from 'lucide-react';

interface CategoryPageProps {
  category: string;
  posts: Post[];
  allPosts?: Post[];
  className?: string;
}

export function CategoryPage({
  category,
  posts,
  allPosts = [],
  className
}: CategoryPageProps) {
  // 카테고리 통계
  const postCount = posts.length;
  const latestPost = posts.length > 0 ? posts[0] : null;
  
  // 최신 포스트 날짜 (posts는 날짜순으로 정렬되어 있다고 가정)
  const latestDate = latestPost?.frontmatter.date 
    ? new Date(latestPost.frontmatter.date).toLocaleDateString('ko-KR')
    : null;

  return (
    <Layout
      posts={allPosts}
      className={className}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="default" className="text-lg px-4 py-2 capitalize">
              {category}
            </Badge>
            <span className="text-muted-foreground">카테고리</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">
            {category.charAt(0).toUpperCase() + category.slice(1)} 포스트
          </h1>
          
          <p className="text-xl text-muted-foreground">
            {category} 카테고리의 모든 포스트를 확인할 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                총 포스트
              </CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{postCount}</div>
              <p className="text-xs text-muted-foreground">
                개의 포스트
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                최신 포스트
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {latestDate || '-'}
              </div>
              <p className="text-xs text-muted-foreground">
                마지막 업데이트
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                관련 태그
              </CardTitle>
              <Badge className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {getUniqueTagsCount(posts)}
              </div>
              <p className="text-xs text-muted-foreground">
                개의 태그
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <PostSearch 
            posts={posts}
            placeholder={`${category} 카테고리에서 검색...`}
          />
        </div>

        <div className="mb-8">
          {posts.length > 0 ? (
            <PostList 
              posts={posts}
              variant="list"
            />
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-16">
                <FileText className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  포스트가 없습니다
                </h3>
                <p className="text-muted-foreground text-center max-w-md">
                  {category} 카테고리에 아직 작성된 포스트가 없습니다.
                  다른 카테고리를 확인해보세요.
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        {posts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">관련 태그</h2>
            <div className="flex flex-wrap gap-2">
              {getUniqueTags(posts).map((tag, index) => (
                <Badge 
                  key={index} 
                  variant="outline"
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

// Helper functions
function getUniqueTags(posts: Post[]): string[] {
  const allTags = posts.flatMap(post => post.frontmatter.tags || []);
  return Array.from(new Set(allTags)).sort();
}

function getUniqueTagsCount(posts: Post[]): number {
  return getUniqueTags(posts).length;
}
