import { TOGGLE_THEME, UPDATE_SYSTEM_THEME } from "./action.types";
// utils & constants
import { THEMES, THEME_PREFERENCES } from "@/lib/constants";

//   fn to get current theme based on selected theme preference
const getCurrentTheme = (themePreference, systemTheme) => {
  switch (themePreference) {
    case THEME_PREFERENCES.DARK:
      return THEMES.DARK;
    case THEME_PREFERENCES.LIGHT:
      return THEMES.LIGHT;
    case THEME_PREFERENCES.SYSTEM:
      return matchMedia("(prefers-color-scheme: dark)").matches
        ? THEMES.DARK
        : THEMES.LIGHT;
    default:
      return THEMES.LIGHT;
  }
};

const ThemeContextReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        themePreference: action.payload,
        currentTheme: getCurrentTheme(action.payload, state.currentTheme),
      };
    case UPDATE_SYSTEM_THEME:
      return {
        ...state,
        currentTheme: getCurrentTheme(THEME_PREFERENCES.SYSTEM, action.payload),
      };

    default:
      return state;
  }
};

export default ThemeContextReducer;
