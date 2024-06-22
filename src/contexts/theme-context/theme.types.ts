import { THEMES, THEME_PREFERENCES } from "@/lib/constants";

export type ThemeContextType = {
  currentTheme: THEMES;
  systemTheme?: THEMES;
  themePreference: THEME_PREFERENCES | string;
};

