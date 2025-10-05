import { AboutPage } from "@/views";
import { getThreads } from "@/entities/thread";

export default async function About() {
  const threads = await getThreads();

  return <AboutPage threads={threads} />;
}
