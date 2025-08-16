"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { Post } from "@/entities/post";
import { NavigationResult } from "../lib/navigation";

interface PostNavigationProps {
  navigation: NavigationResult;
  className?: string;
}

export function PostNavigation({ navigation, className }: PostNavigationProps) {
  const { prev, next } = navigation;

  if (!prev && !next) {
    return null;
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
      {/* 이전 포스트 */}
      <div className="flex justify-start">
        {prev ? (
          <PostNavigationCard
            post={prev}
            direction="prev"
            label="이전 포스트"
          />
        ) : (
          <div /> // 빈 공간 유지
        )}
      </div>

      {/* 다음 포스트 */}
      <div className="flex justify-end">
        {next ? (
          <PostNavigationCard
            post={next}
            direction="next"
            label="다음 포스트"
          />
        ) : (
          <div /> // 빈 공간 유지
        )}
      </div>
    </div>
  );
}

interface PostNavigationCardProps {
  post: Post;
  direction: "prev" | "next";
  label: string;
}

function PostNavigationCard({ post, direction, label }: PostNavigationCardProps) {
  const isPrev = direction === "prev";

  return (
    <Card className="max-w-sm transition-colors hover:bg-muted/50">
      <Link href={`/posts/${post.slug}`}>
        <CardContent className="p-4">
          <div className={`flex items-center gap-2 mb-2 ${isPrev ? "flex-row" : "flex-row-reverse"}`}>
            {isPrev ? (
              <ChevronLeft className="h-4 w-4 text-muted-foreground" />
            ) : (
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            )}
            <span className="text-sm text-muted-foreground">{label}</span>
          </div>
          
          <h3 className={`font-semibold text-sm line-clamp-2 mb-2 ${isPrev ? "text-left" : "text-right"}`}>
            {post.frontmatter.title}
          </h3>
          
          {post.frontmatter.description && (
            <p className={`text-xs text-muted-foreground line-clamp-2 mb-2 ${isPrev ? "text-left" : "text-right"}`}>
              {post.frontmatter.description}
            </p>
          )}
          
          <div className={`flex items-center gap-1 ${isPrev ? "justify-start" : "justify-end"}`}>
            <time className="text-xs text-muted-foreground">
              {new Date(post.frontmatter.date).toLocaleDateString('ko-KR')}
            </time>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

// 간단한 네비게이션 버튼 (미니멀한 버전)
interface SimplePostNavigationProps {
  navigation: NavigationResult;
  className?: string;
}

export function SimplePostNavigation({ navigation, className }: SimplePostNavigationProps) {
  const { prev, next } = navigation;

  if (!prev && !next) {
    return null;
  }

  return (
    <div className={`flex items-center justify-between ${className}`}>
      {prev ? (
        <Button variant="outline" size="sm" asChild>
          <Link href={`/posts/${prev.slug}`} className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">이전</span>
          </Link>
        </Button>
      ) : (
        <div />
      )}

      {next ? (
        <Button variant="outline" size="sm" asChild>
          <Link href={`/posts/${next.slug}`} className="flex items-center gap-2">
            <span className="hidden sm:inline">다음</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      ) : (
        <div />
      )}
    </div>
  );
}
