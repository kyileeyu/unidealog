import { AboutPage } from "@/page-components/about";
import { SITE_CONFIG } from "@/shared/config/site";

export default function About() {
  // Create user object for AboutPage
  const user = {
    id: "1",
    name: SITE_CONFIG.author.name,
    email: SITE_CONFIG.author.email,
    bio: {
      role: 'Creator',
      description: [SITE_CONFIG.author.bio],
      location: "Seoul, Korea",
    },
    social: SITE_CONFIG.author.socialLinks,
  };

  const projects: Array<{
    title: string;
    description: string;
    techStack: string[];
    links: {
      github?: string;
      demo?: string;
    };
  }> = [
    // {
    //   title: "Unidealog",
    //   description: "Next.js와 shadcn/ui로 구축한 현대적인 블로그 플랫폼",
    //   techStack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    //   links: {
    //     github: "https://github.com/yourusername/unidealog",
    //     demo: "https://unidealog.vercel.app",
    //   },
    // },
    // {
    //   title: "Feature-Sliced Design Template",
    //   description: "FSD 아키텍처를 적용한 React 프로젝트 템플릿",
    //   techStack: ["React", "TypeScript", "Vite", "FSD"],
    //   links: {
    //     github: "https://github.com/yourusername/fsd-template",
    //   },
    // },
  ];

  const skills = [
    "People Insight",
    "Books",
    "Meditation",
    "Philosophy",
    "Law of Attraction",
    "Writing",
    "Baking",
    "MBTI",
    "Running",
    "Freediving",
    "Mindfulness",
    "Digital Nomad",
    "Prompting",
  ];

  const timeline = [
    {
      date: "2022",
      title: "이마고웍스 입사",
      description: "내 첫 회사가 된걸 환영해!",
      type: "work" as const,
    },
    {
      date: "2018",
      title: "우쿨렐레 연주 시작",
      description: "베짱이 들어감",
      type: "hobby" as const,
    },
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
