"use client";

import { Post } from "@/entities/post";
import { PostSearch } from "@/features/post-search/ui/PostSearch";
import { cn } from "@/shared/lib/utils";
import { ThemeToggle } from "@/shared/ui/theme-toggle";
import Link from "next/link";

interface PageHeaderProps {
  siteTitle: string;
  posts?: Post[];
  className?: string;
}

export function PageHeader({
  siteTitle,
  posts = [],
  className,
}: PageHeaderProps) {
  return (
    <header className={cn("page-header-wrapper border-b", className)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Front Section - Site Title */}
          <div className="front-section">
            <Link
              href="/"
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              {siteTitle}
            </Link>
          </div>

          {/* Trailing Section - Navigation & Search */}
          <div className="trailing-section flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-4">
              <Link
                href="/about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/posts"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Posts
              </Link>
            </nav>

            {/* Post Search */}
            <PostSearch posts={posts} />

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
