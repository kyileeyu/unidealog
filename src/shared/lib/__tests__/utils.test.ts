import { cn, formatDate } from "../utils";

describe("utils", () => {
  describe("cn", () => {
    it("should merge class names correctly", () => {
      expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
    });

    it("should handle conditional classes", () => {
      expect(cn("base-class", true && "conditional-class")).toBe(
        "base-class conditional-class"
      );
      expect(cn("base-class", false && "conditional-class")).toBe("base-class");
    });
  });

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
});
