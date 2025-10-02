import { AboutPage } from "@/page-components/about";
import { getThreads } from "@/entities/thread/lib/threads";

export default async function About() {
  const threads = await getThreads();

  return <AboutPage threads={threads} />;
}
