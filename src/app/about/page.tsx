import { AboutPage } from "@/page-components/about";
import { SITE_CONFIG } from "@/shared/config/site";
import { getThreads } from "@/entities/thread/lib/threads";
import { User } from "@/entities/user/model/types";

export default async function About() {
  const threads = await getThreads();

  const user: User = {
    id: SITE_CONFIG.author.id,
    name: SITE_CONFIG.author.name,
    email: SITE_CONFIG.author.email,
    avatar: SITE_CONFIG.author.avatar,
    bio: {
      role: SITE_CONFIG.author.bio.role,
      description: [...SITE_CONFIG.author.bio.description],
      location: SITE_CONFIG.author.bio.location,
    },
    social: {
      github: SITE_CONFIG.author.socialLinks.github,
      linkedin: SITE_CONFIG.author.socialLinks.linkedin,
    },
  };

  return (
    <AboutPage
      siteTitle={SITE_CONFIG.name}
      author={SITE_CONFIG.author.name}
      githubUrl={SITE_CONFIG.author.socialLinks.github}
      user={user}
      threads={threads}
      skills={[...SITE_CONFIG.author.skills]}
    />
  );
}
