import { THEME_CONTEXT_ACTIONS } from "./action.types";
// utils & constants
import { THEMES, THEME_PREFERENCES } from "@/lib/constants";
// types
import { ThemeContextType, ThemeContextActionType } from "./theme.types";


//   fn to get current theme based on selected theme preference
const getCurrentTheme = (themePreference: THEME_PREFERENCES) => {
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

const ThemeContextReducer = (
  state: ThemeContextType,
  action: ThemeContextActionType,
) => {
  switch (action.type) {
    case THEME_CONTEXT_ACTIONS.TOGGLE_THEME:
      return {
        ...state,
        themePreference: action.payload,
        currentTheme: getCurrentTheme(action.payload),
      };
    case THEME_CONTEXT_ACTIONS.UPDATE_SYSTEM_THEME:
      return {
        ...state,
        currentTheme: getCurrentTheme(THEME_PREFERENCES.SYSTEM),
      };

    default:
      return state;
  }
};

export default ThemeContextReducer;
