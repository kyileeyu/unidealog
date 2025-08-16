import Link from 'next/link';
import { cn } from '@/shared/lib/utils';

interface PageFooterProps {
  author: string;
  githubUrl?: string;
  className?: string;
}

export function PageFooter({ author, githubUrl, className }: PageFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn("page-footer-wrapper border-t", className)}>
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {currentYear}
          {githubUrl ? (
            <Link 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 hover:text-foreground transition-colors"
            >
              {author}
            </Link>
          ) : (
            <span className="ml-1">{author}</span>
          )}
          <span className="mx-1">powered by</span>
          <Link 
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Next.js
          </Link>
          <span className="mx-1">&</span>
          <Link 
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            shadcn/ui
          </Link>
        </p>
      </div>
    </footer>
  );
}
