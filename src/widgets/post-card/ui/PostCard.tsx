import Link from 'next/link';
import { Card, CardContent } from '@/shared/ui/card';
import { Badge } from '@/shared/ui/badge';
import { Post } from '@/entities/post';
import { formatDate } from '@/shared/lib/utils';
import { cn } from '@/shared/lib/cn';

interface PostCardProps {
  post: Post;
  className?: string;
  variant?: 'default' | 'compact';
}

export function PostCard({ post, className, variant = 'default' }: PostCardProps) {
  const { slug, frontmatter } = post;
  const { title, description, date, categories } = frontmatter;

  return (
    <Card className={cn(
      "post-card-wrapper hover:shadow-md transition-shadow duration-200",
      className
    )}>
      <CardContent className="p-0">
        <Link href={`/posts/${slug}`} className="block p-6">
          <div className="space-y-3">
            <h3 className={cn(
              "font-semibold leading-tight hover:text-primary transition-colors",
              variant === 'compact' ? "text-lg" : "text-xl"
            )}>
              {title}
            </h3>

            {description && (
              <p className={cn(
                "text-muted-foreground line-clamp-3",
                variant === 'compact' ? "text-sm" : "text-base"
              )}>
                {description}
              </p>
            )}

            <div className="flex items-center justify-between pt-2">
              <time className={cn(
                "text-muted-foreground",
                variant === 'compact' ? "text-xs" : "text-sm"
              )}>
                {formatDate(date)}
              </time>

              {categories.length > 0 && (
                <div className="flex gap-1 flex-wrap">
                  {categories.slice(0, 3).map((category) => (
                    <Badge 
                      key={category} 
                      variant="outline" 
                      className={cn(
                        "hover:bg-primary hover:text-primary-foreground transition-colors",
                        variant === 'compact' ? "text-xs" : "text-sm"
                      )}
                      onClick={(e) => {
                        e.preventDefault();
                        // Navigate to posts page with category filter
                        window.location.href = `/posts?category=${category}`;
                      }}
                    >
                      {category}
                    </Badge>
                  ))}
                  {categories.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{categories.length - 3}
                    </Badge>
                  )}
                </div>
              )}
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}
