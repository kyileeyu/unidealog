import { Post } from '@/entities/post';
import { PostCard } from '@/widgets/post-card';
import { cn } from '@/shared/lib/cn';

interface PostListProps {
  posts: Post[];
  className?: string;
  variant?: 'grid' | 'list';
  cardVariant?: 'default' | 'compact';
  emptyMessage?: string;
}

export function PostList({ 
  posts, 
  className, 
  variant = 'grid',
  cardVariant = 'default',
  emptyMessage = "포스트가 없습니다."
}: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={cn(
      "post-list-wrapper",
      variant === 'grid' 
        ? "grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
        : "space-y-6",
      className
    )}>
      {posts.map((post) => (
        <PostCard 
          key={post.slug} 
          post={post} 
          variant={cardVariant}
        />
      ))}
    </div>
  );
}
