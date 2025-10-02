import { HomePage } from "@/page-components/home";
import { getAllPosts } from "@/shared/lib/mdx";

export default function Home() {
  const posts = getAllPosts();

  return <HomePage posts={posts} />;
}
