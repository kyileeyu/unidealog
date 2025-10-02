import { formatDate, formatTimeAgo } from "@/shared/lib/utils";

describe("utils", () => {
  describe("formatDate", () => {
    it("should format Date object correctly", () => {
      const date = new Date("2024-01-15");
      const formatted = formatDate(date);
      expect(formatted).toMatch(/2024년.*1월.*15일/);
    });

    it("should format date string correctly", () => {
      const formatted = formatDate("2024-01-15");
      expect(formatted).toMatch(/2024년.*1월.*15일/);
    });
  });

  describe("formatTimeAgo", () => {
    const now = new Date("2025-10-02T12:00:00Z");

    it("should return '방금 전' for less than 1 minute", () => {
      const timestamp = new Date("2025-10-02T11:59:30Z").toISOString();
      expect(formatTimeAgo(timestamp, now)).toBe("방금 전");
    });

    it("should return 'N분' for minutes", () => {
      const timestamp = new Date("2025-10-02T11:44:00Z").toISOString();
      expect(formatTimeAgo(timestamp, now)).toBe("16분");
    });

    it("should return 'N시간' for hours", () => {
      const timestamp = new Date("2025-10-02T09:00:00Z").toISOString();
      expect(formatTimeAgo(timestamp, now)).toBe("3시간");
    });

    it("should return 'N일' for days", () => {
      const timestamp = new Date("2025-09-30T12:00:00Z").toISOString();
      expect(formatTimeAgo(timestamp, now)).toBe("2일");
    });

    it("should return 'N주' for weeks", () => {
      const timestamp = new Date("2025-09-18T12:00:00Z").toISOString();
      expect(formatTimeAgo(timestamp, now)).toBe("2주");
    });

    it("should return 'N개월' for months", () => {
      const timestamp = new Date("2025-08-02T12:00:00Z").toISOString();
      expect(formatTimeAgo(timestamp, now)).toBe("2개월");
    });

    it("should return 'N년' for years", () => {
      const timestamp = new Date("2023-10-02T12:00:00Z").toISOString();
      expect(formatTimeAgo(timestamp, now)).toBe("2년");
    });

    it("should use current date if now is not provided", () => {
      const oneMinuteAgo = new Date(Date.now() - 60 * 1000).toISOString();
      const result = formatTimeAgo(oneMinuteAgo);
      expect(result).toMatch(/1분|방금 전/);
    });
  });
});
