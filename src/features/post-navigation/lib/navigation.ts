import { Post } from "@/entities/post";

export interface NavigationResult {
  prev: Post | null;
  next: Post | null;
}

/**
 * 현재 포스트를 기준으로 이전/다음 포스트를 찾는 함수
 */
export function getPostNavigation(
  posts: Post[],
  currentSlug: string,
  sortBy: 'date' | 'title' = 'date'
): NavigationResult {
  // 포스트를 정렬
  const sortedPosts = [...posts].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
    } else {
      return a.frontmatter.title.localeCompare(b.frontmatter.title);
    }
  });

  // 현재 포스트의 인덱스 찾기
  const currentIndex = sortedPosts.findIndex(post => post.slug === currentSlug);
  
  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  // 이전 포스트 (더 오래된 포스트)
  const prev = currentIndex < sortedPosts.length - 1 
    ? sortedPosts[currentIndex + 1] 
    : null;

  // 다음 포스트 (더 최신 포스트)
  const next = currentIndex > 0 
    ? sortedPosts[currentIndex - 1] 
    : null;

  return { prev, next };
}

/**
 * 카테고리별 포스트 네비게이션
 */
export function getCategoryPostNavigation(
  posts: Post[],
  currentSlug: string,
  category: string,
  sortBy: 'date' | 'title' = 'date'
): NavigationResult {
  // 같은 카테고리의 포스트만 필터링
  const categoryPosts = posts.filter(post => 
    post.frontmatter.categories.includes(category)
  );

  return getPostNavigation(categoryPosts, currentSlug, sortBy);
}

/**
 * 연관 포스트를 찾는 함수 (태그 기반)
 */
export function getRelatedPosts(
  posts: Post[],
  currentPost: Post,
  limit: number = 3
): Post[] {
  const currentTags = currentPost.frontmatter.tags;
  
  if (currentTags.length === 0) {
    return [];
  }

  // 태그 일치도 계산
  const postsWithScore = posts
    .filter(post => post.slug !== currentPost.slug)
    .map(post => {
      const commonTags = post.frontmatter.tags.filter(tag => 
        currentTags.includes(tag)
      );
      
      return {
        post,
        score: commonTags.length
      };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => {
      // 점수가 같으면 최신 날짜 순
      if (a.score === b.score) {
        return new Date(b.post.frontmatter.date).getTime() - 
               new Date(a.post.frontmatter.date).getTime();
      }
      return b.score - a.score;
    });

  return postsWithScore.slice(0, limit).map(item => item.post);
}
