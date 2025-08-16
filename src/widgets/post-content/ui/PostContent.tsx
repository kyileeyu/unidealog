import { cn } from '@/shared/lib/utils';

interface PostContentProps {
  content: string;
  className?: string;
}

export function PostContent({ content, className }: PostContentProps) {
  return (
    <div className={cn("post-content", className)}>
      <div 
        className="prose prose-lg max-w-none dark:prose-invert
          prose-headings:font-semibold prose-headings:text-foreground
          prose-p:text-foreground prose-p:leading-7
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-strong:text-foreground prose-strong:font-semibold
          prose-code:text-foreground prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-muted prose-pre:border prose-pre:rounded-lg
          prose-blockquote:text-muted-foreground prose-blockquote:border-l-primary
          prose-ul:text-foreground prose-ol:text-foreground
          prose-li:text-foreground prose-li:marker:text-muted-foreground
          prose-table:text-foreground prose-th:text-foreground prose-td:text-foreground
          prose-hr:border-border"
        dangerouslySetInnerHTML={{ __html: content }} 
      />
    </div>
  );
}
