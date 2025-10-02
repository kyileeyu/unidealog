import { HomePage } from "@/page-components/home";
import { SITE_CONFIG } from "@/shared/config/site";
import { getAllPosts } from "@/shared/lib/mdx";

export default function Home() {
  const posts = getAllPosts();

  return (
    <HomePage
      posts={posts}
      siteTitle={SITE_CONFIG.name}
      author={SITE_CONFIG.author.name}
      githubUrl={SITE_CONFIG.author.socialLinks.github}
    />
  );
}
