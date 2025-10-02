import { ReactNode } from 'react';
import { Header } from '@/widgets/page';
import { Footer } from '@/widgets/page';
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
        <Header posts={posts} />
      )}

      <main className="flex-1">
        {children}
      </main>

      {showFooter && (
        <Footer />
      )}
    </div>
  );
}
