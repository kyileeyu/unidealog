import { Theme } from "../types";

export const THEME_STORAGE_KEY = "unidealog-theme";

export const DEFAULT_THEME: Theme = "system";

export const THEMES: { value: Theme; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
];

export const getThemeFromStorage = (): Theme => {
  if (typeof window === "undefined") return DEFAULT_THEME;

  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return (stored as Theme) || DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
};

export const setThemeToStorage = (theme: Theme): void => {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage not available
  }
};

export const getSystemTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light";

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const resolveTheme = (theme: Theme): "light" | "dark" => {
  if (theme === "system") {
    return getSystemTheme();
  }
  return theme;
};
