import { Post, PostSummary } from "@/entities/post";
import { Comments } from "@/features/comments";
import { PostNavigation } from "@/features/post-navigation";
import { Badge } from "@/shared/ui/badge";
import { Separator } from "@/shared/ui/separator";
import { Layout } from "@/widgets/layout";
import { Content } from "@/widgets/post";
import { SITE_CONFIG } from "@/shared/config/site";
import { CalendarDays, Clock, User } from "lucide-react";

interface PostDetailPageProps {
  post: Post;
  previousPost?: PostSummary;
  nextPost?: PostSummary;
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
        <header className="mb-8">
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

          <h1 className="text-4xl font-bold mb-4 leading-tight">
            {frontmatter.emoji && (
              <span className="mr-3">{frontmatter.emoji}</span>
            )}
            {frontmatter.title}
          </h1>

          {(frontmatter.description || post.excerpt) && (
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {frontmatter.description || post.excerpt}
            </p>
          )}

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

        <div className="mb-12">
          <Content content={post.content} />
        </div>

        <Separator className="mb-8" />

        {(previousPost || nextPost) && (
          <div className="mb-12">
            <PostNavigation
              navigation={{
                prev: previousPost
                  ? {
                      id: previousPost.id,
                      slug: previousPost.slug,
                      frontmatter: {
                        emoji: previousPost.emoji,
                        title: previousPost.title,
                        date: previousPost.date,
                        author: previousPost.author,
                        tags: previousPost.tags,
                        categories: previousPost.categories,
                        description: previousPost.description,
                        thumbnail: previousPost.thumbnail,
                      },
                      content: "",
                      excerpt: "",
                      readingTime: 0,
                      wordCount: 0,
                    }
                  : null,
                next: nextPost
                  ? {
                      id: nextPost.id,
                      slug: nextPost.slug,
                      frontmatter: {
                        emoji: nextPost.emoji,
                        title: nextPost.title,
                        date: nextPost.date,
                        author: nextPost.author,
                        tags: nextPost.tags,
                        categories: nextPost.categories,
                        description: nextPost.description,
                        thumbnail: nextPost.thumbnail,
                      },
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

        <div className="mb-8">
          <Comments />
        </div>
      </article>
    </Layout>
  );
}
