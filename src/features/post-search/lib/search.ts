import { Post } from "@/entities/post";

export interface SearchOptions {
  searchFields?: ('title' | 'description' | 'tags' | 'categories')[];
  caseSensitive?: boolean;
  minLength?: number;
}

export interface SearchResult {
  posts: Post[];
  query: string;
  totalResults: number;
  searchTime: number;
}

/**
 * 포스트를 검색하는 함수
 */
export function searchPosts(
  posts: Post[],
  query: string,
  options: SearchOptions = {}
): SearchResult {
  const startTime = performance.now();
  
  const {
    searchFields = ['title', 'description', 'tags'],
    caseSensitive = false,
    minLength = 2
  } = options;

  // 검색어가 최소 길이보다 짧으면 빈 결과 반환
  if (query.trim().length < minLength) {
    return {
      posts: [],
      query: query.trim(),
      totalResults: 0,
      searchTime: performance.now() - startTime
    };
  }

  const searchQuery = caseSensitive ? query.trim() : query.trim().toLowerCase();
  
  const filteredPosts = posts.filter(post => {
    return searchFields.some(field => {
      let fieldValue = '';
      
      switch (field) {
        case 'title':
          fieldValue = post.frontmatter.title;
          break;
        case 'description':
          fieldValue = post.frontmatter.description || post.excerpt || '';
          break;
        case 'tags':
          fieldValue = post.frontmatter.tags.join(' ');
          break;
        case 'categories':
          fieldValue = post.frontmatter.categories.join(' ');
          break;
        default:
          return false;
      }

      const searchableValue = caseSensitive ? fieldValue : fieldValue.toLowerCase();
      return searchableValue.includes(searchQuery);
    });
  });

  const endTime = performance.now();

  return {
    posts: filteredPosts,
    query: query.trim(),
    totalResults: filteredPosts.length,
    searchTime: endTime - startTime
  };
}

/**
 * 검색어 하이라이트를 위한 함수
 */
export function highlightSearchTerm(text: string, searchTerm: string, caseSensitive = false): string {
  if (!searchTerm.trim()) return text;
  
  const flags = caseSensitive ? 'g' : 'gi';
  const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, flags);
  
  return text.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-800">$1</mark>');
}

/**
 * 정규표현식에서 특수문자를 이스케이프하는 함수
 */
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * 검색 히스토리 관리를 위한 함수들
 */
export class SearchHistory {
  private static readonly STORAGE_KEY = 'post-search-history';
  private static readonly MAX_HISTORY = 10;

  static getHistory(): string[] {
    if (typeof window === 'undefined') return [];
    
    try {
      const history = localStorage.getItem(this.STORAGE_KEY);
      return history ? JSON.parse(history) : [];
    } catch {
      return [];
    }
  }

  static addToHistory(query: string): void {
    if (typeof window === 'undefined' || !query.trim()) return;
    
    try {
      const history = this.getHistory();
      const updatedHistory = [
        query.trim(),
        ...history.filter(item => item !== query.trim())
      ].slice(0, this.MAX_HISTORY);
      
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedHistory));
    } catch {
      // localStorage 에러 무시
    }
  }

  static removeFromHistory(query: string): void {
    if (typeof window === 'undefined') return;
    
    try {
      const history = this.getHistory();
      const updatedHistory = history.filter(item => item !== query);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedHistory));
    } catch {
      // localStorage 에러 무시
    }
  }

  static clearHistory(): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch {
      // localStorage 에러 무시
    }
  }
}
