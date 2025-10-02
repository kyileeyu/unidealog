import { ReactNode } from 'react';
import { PageHeader } from '@/widgets/page-header';
import { PageFooter } from '@/widgets/page-footer';
import { Post } from '@/entities/post';
import { cn } from '@/shared/lib/cn';

interface LayoutProps {
  children: ReactNode;
  posts?: Post[];
  className?: string;
  showHeader?: boolean;
  showFooter?: boolean;
}

export function Layout({
  children,
  posts = [],
  className,
  showHeader = true,
  showFooter = true
}: LayoutProps) {
  return (
    <div className={cn("min-h-screen flex flex-col", className)}>
      {showHeader && (
        <PageHeader posts={posts} />
      )}

      <main className="flex-1">
        {children}
      </main>

      {showFooter && (
        <PageFooter />
      )}
    </div>
  );
}
