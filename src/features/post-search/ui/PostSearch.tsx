"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Search, X, Clock, Trash2 } from "lucide-react";
import { Post } from "@/entities/post";
import { useSearchStore } from "../model/search-store";
import { formatDate } from "@/shared/lib/utils";

export interface PostSearchProps {
  posts: Post[];
  placeholder?: string;
  className?: string;
  onResultClick?: (post: Post) => void;
  showResults?: boolean;
  maxResults?: number;
}

export function PostSearch({
  posts,
  placeholder = "포스트 검색...",
  className = "",
  onResultClick,
  showResults = true,
  maxResults = 10
}: PostSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  
  const {
    query,
    results,
    isSearching,
    error,
    history,
    setQuery,
    search,
    clearSearch,
    loadHistory,
    addToHistory,
    removeFromHistory,
    clearHistory
  } = useSearchStore();

  // 검색 실행 (디바운스)
  const handleSearch = useCallback((searchQuery: string) => {
    if (searchQuery.trim().length >= 2) {
      search(posts, searchQuery);
      setShowHistory(false);
    } else if (searchQuery.trim().length === 0) {
      clearSearch();
      setShowHistory(true);
    }
  }, [posts, search, clearSearch]);

  // 입력 핸들러
  const handleInputChange = (value: string) => {
    setQuery(value);
    handleSearch(value);
  };

  // 포커스 핸들러
  const handleFocus = () => {
    setIsOpen(true);
    if (query.trim().length === 0) {
      setShowHistory(true);
      loadHistory();
    }
  };

  // 검색 결과 클릭 핸들러
  const handleResultClick = (post: Post) => {
    addToHistory(query);
    setIsOpen(false);
    onResultClick?.(post);
  };

  // 히스토리 클릭 핸들러
  const handleHistoryClick = (historyQuery: string) => {
    setQuery(historyQuery);
    handleSearch(historyQuery);
  };

  // 히스토리 삭제 핸들러
  const handleRemoveHistory = (historyQuery: string, e: React.MouseEvent) => {
    e.stopPropagation();
    removeFromHistory(historyQuery);
  };

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setShowHistory(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const displayResults = results?.posts.slice(0, maxResults) || [];

  return (
    <div ref={searchRef} className={`relative w-full max-w-2xl ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={handleFocus}
          className="pl-10 pr-10"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setQuery('');
              clearSearch();
              setShowHistory(true);
            }}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>

      {isOpen && showResults && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 max-h-96 overflow-y-auto">
          <CardContent className="p-0">
            {isSearching && (
              <div className="p-4 text-center text-muted-foreground">
                검색 중...
              </div>
            )}

            {error && (
              <div className="p-4 text-center text-destructive">
                {error}
              </div>
            )}

            {showHistory && history.length > 0 && (
              <div className="border-b">
                <div className="flex items-center justify-between p-3 border-b bg-muted/50">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Clock className="h-4 w-4" />
                    최근 검색
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearHistory}
                    className="h-6 text-xs"
                  >
                    전체 삭제
                  </Button>
                </div>
                {history.map((historyQuery, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 hover:bg-muted/50 cursor-pointer"
                    onClick={() => handleHistoryClick(historyQuery)}
                  >
                    <span className="text-sm">{historyQuery}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => handleRemoveHistory(historyQuery, e)}
                      className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {results && !showHistory && (
              <>
                <div className="p-3 border-b bg-muted/50 text-sm text-muted-foreground">
                  {results.totalResults}개 결과 ({results.searchTime.toFixed(2)}ms)
                </div>

                {displayResults.length > 0 ? (
                  <div className="divide-y">
                    {displayResults.map((post) => (
                      <div
                        key={post.slug}
                        className="p-4 hover:bg-muted/50 cursor-pointer"
                        onClick={() => handleResultClick(post)}
                      >
                        <h3 className="font-medium mb-1">{post.frontmatter.title}</h3>
                        {post.frontmatter.description && (
                          <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                            {post.frontmatter.description}
                          </p>
                        )}
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs text-muted-foreground">
                            {formatDate(post.frontmatter.date)}
                          </span>
                          {post.frontmatter.categories.map((category) => (
                            <Badge key={category} variant="outline" className="text-xs">
                              {category}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-muted-foreground">
                    &quot;{query}&quot;에 대한 검색 결과가 없습니다.
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
