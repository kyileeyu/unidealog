import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Thread {
  id: string;
  title: string;
  content: string;
  timestamp: string;
}

const threadsDirectory = path.join(process.cwd(), "content/threads");

export async function getThreads(): Promise<Thread[]> {
  const fileNames = fs.readdirSync(threadsDirectory);

  const threads = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const filePath = path.join(threadsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");

      const { data, content } = matter(fileContents);

      return {
        id: data.id,
        title: data.title,
        content: content.trim(),
        timestamp: data.timestamp,
      };
    });

  // Sort by timestamp (newest first)
  threads.sort((a, b) => {
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });

  return threads;
}
