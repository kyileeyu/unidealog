import { HomePage } from "@/page-components/home";
import { SITE_CONFIG } from "@/shared/config/site";

// Mock data for development
const mockPosts = [
  {
    id: '1',
    slug: 'welcome-to-unidealog',
    frontmatter: {
      emoji: '🎉',
      title: 'Welcome to Unidealog',
      date: '2024-01-01',
      author: 'Your Name',
      tags: ['nextjs', 'shadcn-ui', 'blog'],
      categories: ['announcement', 'featured'],
      description: 'This is the first post on our new blog built with Next.js and shadcn/ui.'
    },
    content: 'Welcome to Unidealog! This is a modern blog platform...',
    excerpt: 'This is the first post on our new blog built with Next.js and shadcn/ui.',
    readingTime: 3
  },
  {
    id: '2',
    slug: 'getting-started-with-fsd',
    frontmatter: {
      emoji: '🏗️',
      title: 'Getting Started with Feature-Sliced Design',
      date: '2024-01-15',
      author: 'Your Name',
      tags: ['architecture', 'fsd', 'frontend'],
      categories: ['development'],
      description: 'Learn how to organize your code using the Feature-Sliced Design architecture.'
    },
    content: 'Feature-Sliced Design is a modern approach to frontend architecture...',
    excerpt: 'Learn how to organize your code using the Feature-Sliced Design architecture.',
    readingTime: 8
  }
];

export default function Home() {
  return (
    <HomePage
      posts={mockPosts}
      siteTitle={SITE_CONFIG.name}
      author={SITE_CONFIG.author.name}
      githubUrl={SITE_CONFIG.author.socialLinks.github}
      bio={SITE_CONFIG.author.bio}
    />
  );
}
