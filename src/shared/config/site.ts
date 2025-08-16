// 블로그 설정 상수

export const SITE_CONFIG = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Unidealog",
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "nana",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://unidealog.vercel.app",
  author: {
    name: "Seunghyun Yu",
    email: "kyileeeyu@gmail.com",
    bio: "Full-stack developer passionate about web technologies",
    avatar: "/images/avatar.jpg",
    socialLinks: {
      github: `https://github.com/${
        process.env.NEXT_PUBLIC_GITHUB_USERNAME || "kyileeyu"
      }`,
      linkedin: "https://linkedin.com/in/seunghyun-yu",
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
