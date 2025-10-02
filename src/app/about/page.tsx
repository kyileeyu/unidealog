import { AboutPage } from "@/page-components/about";
import { SITE_CONFIG } from "@/shared/config/site";
import { getThreads } from "@/entities/thread/lib/threads";

export default async function About() {
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

  const threads = await getThreads();

  return (
    <AboutPage
      siteTitle={SITE_CONFIG.name}
      author={SITE_CONFIG.author.name}
      githubUrl={SITE_CONFIG.author.socialLinks.github}
      user={user}
      threads={threads}
      skills={skills}
    />
  );
}
