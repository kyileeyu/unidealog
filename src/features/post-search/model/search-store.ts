import { create } from 'zustand';
import { Post } from '@/entities/post';
import { SearchResult, SearchOptions, searchPosts, SearchHistory } from '../lib/search';

export interface SearchState {
  // 상태
  query: string;
  results: SearchResult | null;
  isSearching: boolean;
  error: string | null;
  history: string[];
  
  // 검색 옵션
  options: SearchOptions;
  
  // 액션
  setQuery: (query: string) => void;
  search: (posts: Post[], query?: string) => void;
  clearSearch: () => void;
  setOptions: (options: Partial<SearchOptions>) => void;
  loadHistory: () => void;
  addToHistory: (query: string) => void;
  removeFromHistory: (query: string) => void;
  clearHistory: () => void;
}

export const useSearchStore = create<SearchState>((set, get) => ({
  // 초기 상태
  query: '',
  results: null,
  isSearching: false,
  error: null,
  history: [],
  
  options: {
    searchFields: ['title', 'description', 'tags'],
    caseSensitive: false,
    minLength: 2
  },

  // 검색어 설정
  setQuery: (query: string) => {
    set({ query, error: null });
  },

  // 검색 실행
  search: (posts: Post[], searchQuery?: string) => {
    const { query, options } = get();
    const finalQuery = searchQuery ?? query;
    
    set({ isSearching: true, error: null });
    
    try {
      const results = searchPosts(posts, finalQuery, options);
      
      // 검색어가 유효하면 히스토리에 추가
      if (finalQuery.trim().length >= (options.minLength || 2)) {
        SearchHistory.addToHistory(finalQuery);
        get().loadHistory();
      }
      
      set({ 
        results, 
        isSearching: false,
        query: finalQuery
      });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Search failed',
        isSearching: false 
      });
    }
  },

  // 검색 결과 초기화
  clearSearch: () => {
    set({ 
      query: '', 
      results: null, 
      error: null 
    });
  },

  // 검색 옵션 설정
  setOptions: (newOptions: Partial<SearchOptions>) => {
    set(state => ({ 
      options: { ...state.options, ...newOptions }
    }));
  },

  // 히스토리 로드
  loadHistory: () => {
    const history = SearchHistory.getHistory();
    set({ history });
  },

  // 히스토리에 추가
  addToHistory: (query: string) => {
    SearchHistory.addToHistory(query);
    get().loadHistory();
  },

  // 히스토리에서 제거
  removeFromHistory: (query: string) => {
    SearchHistory.removeFromHistory(query);
    get().loadHistory();
  },

  // 히스토리 전체 삭제
  clearHistory: () => {
    SearchHistory.clearHistory();
    set({ history: [] });
  }
}));
