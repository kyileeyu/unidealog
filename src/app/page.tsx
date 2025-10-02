import { HomePage } from "@/page-components/home";
import { getAllPosts } from "@/entities/post";

export default async function Home() {
  const posts = await getAllPosts();

  return <HomePage posts={posts} />;
}
