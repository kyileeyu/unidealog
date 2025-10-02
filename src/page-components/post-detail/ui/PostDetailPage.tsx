import { Post } from "@/entities/post";
import { Comments } from "@/features/comments";
import { PostNavigation } from "@/features/post-navigation";
import { Badge } from "@/shared/ui/badge";
import { Separator } from "@/shared/ui/separator";
import { Layout } from "@/widgets/layout";
import { PostContent } from "@/widgets/post-content";
import { SITE_CONFIG } from "@/shared/config/site";
import { CalendarDays, Clock, User } from "lucide-react";

interface PostDetailPageProps {
  post: Post;
  previousPost?: Pick<Post, "id" | "slug" | "frontmatter">;
  nextPost?: Pick<Post, "id" | "slug" | "frontmatter">;
  className?: string;
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function PostDetailPage({
  post,
  previousPost,
  nextPost,
  className,
}: PostDetailPageProps) {
  const { frontmatter } = post;

  return (
    <Layout className={className}>
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Post Header */}
        <header className="mb-8">
          {/* Categories */}
          {frontmatter.categories && frontmatter.categories.length > 0 && (
            <div className="mb-4">
              {frontmatter.categories.map((category, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="mr-2 capitalize"
                >
                  {category}
                </Badge>
              ))}
            </div>
          )}

          {/* Title with Emoji */}
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            {frontmatter.emoji && (
              <span className="mr-3">{frontmatter.emoji}</span>
            )}
            {frontmatter.title}
          </h1>

          {/* Description/Excerpt */}
          {(frontmatter.description || post.excerpt) && (
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {frontmatter.description || post.excerpt}
            </p>
          )}

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{frontmatter.author || SITE_CONFIG.author.name}</span>
            </div>

            <div className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              <time dateTime={frontmatter.date}>
                {formatDate(frontmatter.date)}
              </time>
            </div>

            {post.readingTime && (
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime}분 읽기</span>
              </div>
            )}
          </div>

          {/* Tags */}
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {frontmatter.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
          )}

          <Separator className="mb-8" />
        </header>

        {/* Post Content */}
        <div className="mb-12">
          <PostContent content={post.content} />
        </div>

        <Separator className="mb-8" />

        {/* Post Navigation */}
        {(previousPost || nextPost) && (
          <div className="mb-12">
            <PostNavigation
              navigation={{
                prev: previousPost
                  ? {
                      ...previousPost,
                      content: "",
                      excerpt: "",
                      readingTime: 0,
                      wordCount: 0,
                    }
                  : null,
                next: nextPost
                  ? {
                      ...nextPost,
                      content: "",
                      excerpt: "",
                      readingTime: 0,
                      wordCount: 0,
                    }
                  : null,
              }}
            />
          </div>
        )}

        {/* Comments */}
        <div className="mb-8">
          <Comments />
        </div>
      </article>
    </Layout>
  );
}
