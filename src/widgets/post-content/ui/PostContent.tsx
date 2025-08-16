import { Suspense } from 'react';
import { cn } from '@/shared/lib/utils';
import { processMDX, mdxComponents } from '@/shared/lib/mdx-processor';

interface PostContentProps {
  content: string;
  className?: string;
}

function PostContentLoader({ content }: { content: string }) {
  return <PostContentInner content={content} />;
}

async function PostContentInner({ content }: { content: string }) {
  const { content: mdxContent } = await processMDX({
    source: content,
    components: mdxComponents,
  });

  return (
    <div className="prose prose-lg max-w-none dark:prose-invert prose-slate">
      {mdxContent}
    </div>
  );
}

export function PostContent({ content, className }: PostContentProps) {
  return (
    <div className={cn("post-content", className)}>
      <Suspense fallback={<div className="animate-pulse">콘텐츠를 불러오는 중...</div>}>
        <PostContentLoader content={content} />
      </Suspense>
    </div>
  );
}
