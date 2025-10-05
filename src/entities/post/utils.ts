import path from 'path';
import { TableOfContentsItem } from './types';

/**
 * Calculate reading time based on word count
 * Average reading speed: 200 words per minute (for Korean mixed with English)
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).filter(word => word.length > 0).length;
  const readingTime = Math.ceil(words / wordsPerMinute);
  return Math.max(1, readingTime); // Minimum 1 minute
}

/**
 * Generate slug from file path
 */
export function generateSlugFromPath(filePath: string): string {
  const relativePath = path.relative(path.join(process.cwd(), 'content/posts'), filePath);

  // If it's an index file in a directory, use the directory name
  if (path.basename(filePath, path.extname(filePath)) === 'index') {
    return path.dirname(relativePath);
  }

  // Otherwise, use the filename without extension
  return path.basename(relativePath, path.extname(relativePath));
}

/**
 * Extract table of contents from markdown content
 */
export function extractTableOfContents(content: string): TableOfContentsItem[] {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings: { level: number; title: string; id: string }[] = [];

  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const title = match[2].trim();
    const id = generateHeadingId(title);

    headings.push({ level, title, id });
  }

  return buildTocTree(headings);
}

/**
 * Generate heading ID from title (for anchor links)
 */
export function generateHeadingId(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s가-힣]/g, '') // Keep alphanumeric, spaces, and Korean characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .trim();
}

/**
 * Build hierarchical table of contents tree
 */
function buildTocTree(headings: { level: number; title: string; id: string }[]): TableOfContentsItem[] {
  const tree: TableOfContentsItem[] = [];
  const stack: TableOfContentsItem[] = [];

  for (const heading of headings) {
    const item: TableOfContentsItem = {
      text: heading.title,
      level: heading.level,
      anchor: heading.id,
      children: []
    };

    // Find the correct parent level
    while (stack.length > 0 && stack[stack.length - 1].level >= heading.level) {
      stack.pop();
    }

    if (stack.length === 0) {
      // Root level
      tree.push(item);
    } else {
      // Add as child to the last item in stack
      const parent = stack[stack.length - 1];
      if (!parent.children) {
        parent.children = [];
      }
      parent.children.push(item);
    }

    stack.push(item);
  }

  return tree;
}

/**
 * Format date string for display
 */
export function formatDate(dateString: string, locale: string = 'ko-KR'): string {
  const date = new Date(dateString);

  if (locale === 'ko-KR') {
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Format date for relative time (e.g., "2 days ago")
 */
export function formatRelativeDate(dateString: string, locale: string = 'ko-KR'): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60
  };

  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / seconds);
    if (interval >= 1) {
      if (locale === 'ko-KR') {
        const unitNames = {
          year: '년',
          month: '개월',
          week: '주',
          day: '일',
          hour: '시간',
          minute: '분'
        };
        return `${interval}${unitNames[unit as keyof typeof unitNames]} 전`;
      } else {
        return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
      }
    }
  }

  return locale === 'ko-KR' ? '방금 전' : 'just now';
}

/**
 * Truncate text to specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }

  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Get reading time display text
 */
export function getReadingTimeText(minutes: number, locale: string = 'ko-KR'): string {
  if (locale === 'ko-KR') {
    return `${minutes}분 읽기`;
  }

  return `${minutes} min read`;
}
