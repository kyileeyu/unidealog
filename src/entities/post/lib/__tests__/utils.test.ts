import { 
  calculateReadingTime, 
  generateSlugFromPath, 
  extractTableOfContents,
  formatDate,
  truncateText,
  getReadingTimeText 
} from '../utils';

describe('Post Utils', () => {
  describe('calculateReadingTime', () => {
    it('should calculate reading time correctly', () => {
      const content = 'word '.repeat(200); // 200 words
      expect(calculateReadingTime(content)).toBe(1);
      
      const longContent = 'word '.repeat(600); // 600 words = 3 minutes
      expect(calculateReadingTime(longContent)).toBe(3);
    });

    it('should return minimum 1 minute for short content', () => {
      const shortContent = 'Hello world';
      expect(calculateReadingTime(shortContent)).toBe(1);
    });
  });

  describe('generateSlugFromPath', () => {
    it('should generate slug from directory name for index files', () => {
      // Mock process.cwd() behavior
      const filePath = 'content/posts/my-first-post/index.md';
      expect(generateSlugFromPath(filePath)).toBe('my-first-post');
    });

    it('should generate slug from filename for non-index files', () => {
      const filePath = 'content/posts/my-post.md';
      expect(generateSlugFromPath(filePath)).toBe('my-post');
    });
  });

  describe('extractTableOfContents', () => {
    it('should extract headings correctly', () => {
      const content = `
# Heading 1
## Heading 2
### Heading 3
## Another Heading 2
      `;
      
      const toc = extractTableOfContents(content);
      expect(toc).toHaveLength(1); // One root level item (Heading 1)
      expect(toc[0].text).toBe('Heading 1');
      expect(toc[0].children).toHaveLength(2); // Two h2 items under h1
      expect(toc[0].children![0].text).toBe('Heading 2');
      expect(toc[0].children![0].children).toHaveLength(1); // One h3 under first h2
      expect(toc[0].children![1].text).toBe('Another Heading 2');
    });
  });

  describe('formatDate', () => {
    it('should format date in Korean', () => {
      const date = '2025-08-16';
      const formatted = formatDate(date, 'ko-KR');
      expect(formatted).toContain('2025');
      expect(formatted).toContain('8월');
      expect(formatted).toContain('16일');
    });

    it('should format date in English', () => {
      const date = '2025-08-16';
      const formatted = formatDate(date, 'en-US');
      expect(formatted).toContain('2025');
      expect(formatted).toContain('August');
      expect(formatted).toContain('16');
    });
  });

  describe('truncateText', () => {
    it('should truncate long text', () => {
      const text = 'This is a very long text that should be truncated';
      const truncated = truncateText(text, 20);
      expect(truncated).toBe('This is a very long...');
      expect(truncated.length).toBeLessThanOrEqual(23); // 20 + '...'
    });

    it('should not truncate short text', () => {
      const text = 'Short text';
      const truncated = truncateText(text, 20);
      expect(truncated).toBe('Short text');
    });
  });

  describe('getReadingTimeText', () => {
    it('should return Korean text', () => {
      expect(getReadingTimeText(5, 'ko-KR')).toBe('5분 읽기');
    });

    it('should return English text', () => {
      expect(getReadingTimeText(5, 'en-US')).toBe('5 min read');
    });
  });
});
