import { ReactNode } from 'react';
import { PageHeader } from '@/widgets/page-header';
import { PageFooter } from '@/widgets/page-footer';
import { Post } from '@/entities/post';
import { cn } from '@/shared/lib/utils';

interface LayoutProps {
  children: ReactNode;
  siteTitle: string;
  author: string;
  githubUrl?: string;
  posts?: Post[];
  className?: string;
  showHeader?: boolean;
  showFooter?: boolean;
}

export function Layout({
  children,
  siteTitle,
  author,
  githubUrl,
  posts = [],
  className,
  showHeader = true,
  showFooter = true
}: LayoutProps) {
  return (
    <div className={cn("min-h-screen flex flex-col", className)}>
      {/* Header */}
      {showHeader && (
        <PageHeader 
          siteTitle={siteTitle} 
          posts={posts}
        />
      )}

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      {showFooter && (
        <PageFooter 
          author={author}
          githubUrl={githubUrl}
        />
      )}
    </div>
  );
}
