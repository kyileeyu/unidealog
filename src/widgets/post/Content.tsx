import { Suspense } from 'react';
import { cn } from '@/shared/lib/cn';
import { processMDX, mdxComponents } from '@/shared/lib/mdx-processor';

interface ContentProps {
  content: string;
  className?: string;
}

function ContentLoader({ content }: { content: string }) {
  return <ContentInner content={content} />;
}

async function ContentInner({ content }: { content: string }) {
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

export function Content({ content, className }: ContentProps) {
  return (
    <div className={cn("post-content", className)}>
      <Suspense fallback={<div className="animate-pulse">콘텐츠를 불러오는 중...</div>}>
        <ContentLoader content={content} />
      </Suspense>
    </div>
  );
}
