import { getThreads } from "@/entities/thread";

describe("threads", () => {
  describe("getThreads", () => {
    it("should return array of threads", async () => {
      const threads = await getThreads();

      expect(Array.isArray(threads)).toBe(true);
      expect(threads.length).toBeGreaterThan(0);
    });

    it("should return threads with correct structure", async () => {
      const threads = await getThreads();
      const thread = threads[0];

      expect(thread).toHaveProperty("id");
      expect(thread).toHaveProperty("title");
      expect(thread).toHaveProperty("content");
      expect(thread).toHaveProperty("timestamp");

      expect(typeof thread.id).toBe("string");
      expect(typeof thread.title).toBe("string");
      expect(typeof thread.content).toBe("string");
      expect(typeof thread.timestamp).toBe("string");
    });

    it("should return threads sorted by timestamp (newest first)", async () => {
      const threads = await getThreads();

      for (let i = 0; i < threads.length - 1; i++) {
        const current = new Date(threads[i].timestamp).getTime();
        const next = new Date(threads[i + 1].timestamp).getTime();
        expect(current).toBeGreaterThanOrEqual(next);
      }
    });

    it("should not include frontmatter in content", async () => {
      const threads = await getThreads();
      const thread = threads[0];

      expect(thread.content).not.toContain("---");
      expect(thread.content).not.toContain("id:");
      expect(thread.content).not.toContain("title:");
      expect(thread.content).not.toContain("timestamp:");
    });
  });
});
