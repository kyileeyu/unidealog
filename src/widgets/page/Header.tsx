"use client";

import { Post } from "@/entities/post";
import { PostSearch } from "@/features/post-search/ui/PostSearch";
import { cn } from "@/shared/lib/cn";
import { ThemeToggle } from "@/shared/ui/theme-toggle";
import { SITE_CONFIG } from "@/shared/config/site";
import Link from "next/link";

interface HeaderProps {
  posts?: Post[];
  className?: string;
}

export function Header({
  posts = [],
  className,
}: HeaderProps) {
  return (
    <header className={cn("page-header-wrapper border-b", className)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="front-section">
            <Link
              href="/"
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              {SITE_CONFIG.name}
            </Link>
          </div>

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

            <PostSearch posts={posts} />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
