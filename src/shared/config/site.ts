// 블로그 설정 상수

export const SITE_CONFIG = {
  name: "Unidealog",
  description: "Modern blog with Next.js and shadcn/ui",
  url: "https://unidealog.vercel.app",
  author: {
    name: "Your Name",
    email: "your.email@example.com",
    bio: "Full-stack developer passionate about web technologies",
    avatar: "/images/avatar.jpg",
    socialLinks: {
      github: "https://github.com/yourusername",
      twitter: "https://twitter.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
    },
  },
  navigation: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Posts", href: "/posts" },
  ],
} as const;

export const PAGINATION_CONFIG = {
  postsPerPage: 10,
  searchResultsPerPage: 20,
} as const;

export const THEME_CONFIG = {
  defaultTheme: "system" as const,
  storageKey: "unidealog-theme",
} as const;

export const READING_TIME_CONFIG = {
  wordsPerMinute: 200,
} as const;
