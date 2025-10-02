'use client';

import Link from 'next/link';
import { Layout } from '@/widgets/layout';
import { Button } from '@/shared/ui/button';
import { Card, CardContent } from '@/shared/ui/card';
import { Home, Search, ArrowLeft } from 'lucide-react';

interface NotFoundPageProps {
  className?: string;
}

export function NotFoundPage({
  className
}: NotFoundPageProps) {
  return (
    <Layout className={className}>
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            {/* 404 Number */}
            <div className="text-9xl font-bold text-muted-foreground/20 mb-4">
              404
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold mb-4">
              페이지를 찾을 수 없습니다
            </h1>

            {/* Description */}
            <p className="text-xl text-muted-foreground mb-8 max-w-md">
              요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
              <Button asChild size="lg" className="flex-1">
                <Link href="/" className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  홈으로 가기
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="flex-1">
                <Link href="/posts" className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  포스트 보기
                </Link>
              </Button>
            </div>

            {/* Back Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="mt-6 flex items-center gap-2"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-4 w-4" />
              이전 페이지로
            </Button>

            {/* Help Text */}
            <div className="mt-8 p-4 bg-muted/50 rounded-lg max-w-md">
              <h3 className="font-semibold mb-2">도움이 필요하신가요?</h3>
              <p className="text-sm text-muted-foreground">
                찾고 계신 페이지가 있다면 홈페이지에서 검색하거나 
                카테고리별로 포스트를 둘러보세요.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
