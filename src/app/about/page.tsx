import { AboutPage } from "@/page-components/about";
import { SITE_CONFIG } from "@/shared/config/site";

export default function About() {
  // Create user object for AboutPage
  const user = {
    id: '1',
    name: SITE_CONFIG.author.name,
    email: SITE_CONFIG.author.email,
    bio: {
      role: 'Full-stack Developer',
      description: [
        SITE_CONFIG.author.bio,
        '웹 기술과 사용자 경험에 관심이 많습니다.',
        '새로운 기술을 배우고 공유하는 것을 좋아합니다.'
      ],
      location: 'Seoul, Korea'
    },
    social: SITE_CONFIG.author.socialLinks
  };

  const projects = [
    {
      title: 'Unidealog',
      description: 'Next.js와 shadcn/ui로 구축한 현대적인 블로그 플랫폼',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
      links: {
        github: 'https://github.com/yourusername/unidealog',
        demo: 'https://unidealog.vercel.app'
      }
    },
    {
      title: 'Feature-Sliced Design Template',
      description: 'FSD 아키텍처를 적용한 React 프로젝트 템플릿',
      techStack: ['React', 'TypeScript', 'Vite', 'FSD'],
      links: {
        github: 'https://github.com/yourusername/fsd-template'
      }
    }
  ];

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
    'Python', 'Tailwind CSS', 'shadcn/ui', 'Git', 'Docker',
    'AWS', 'Vercel', 'PostgreSQL', 'MongoDB'
  ];

  const timeline = [
    {
      date: '2024',
      title: 'Unidealog 프로젝트 시작',
      description: 'FSD 아키텍처와 TDD를 적용한 블로그 플랫폼 개발',
      type: 'project' as const
    },
    {
      date: '2023',
      title: 'Full-stack Developer',
      description: '웹 애플리케이션 개발 및 아키텍처 설계',
      type: 'work' as const
    },
    {
      date: '2022',
      title: 'React & TypeScript 전문화',
      description: '모던 프론트엔드 기술 스택 깊이있는 학습',
      type: 'education' as const
    }
  ];

  return (
    <AboutPage
      siteTitle={SITE_CONFIG.name}
      author={SITE_CONFIG.author.name}
      githubUrl={SITE_CONFIG.author.socialLinks.github}
      user={user}
      projects={projects}
      skills={skills}
      timeline={timeline}
    />
  );
}
