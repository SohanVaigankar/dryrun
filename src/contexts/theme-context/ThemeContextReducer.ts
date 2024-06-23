"use client";

import { THEME_CONTEXT_ACTIONS } from "./action.types";
// types
import { ThemeContextType, ThemeContextActionType } from "./theme.types";

const ThemeContextReducer = (
  state: ThemeContextType,
  action: ThemeContextActionType,
) => {
  switch (action.type) {
    case THEME_CONTEXT_ACTIONS.TOGGLE_THEME:
      return {
        ...state,
        currentTheme: action.payload,
      };
    case THEME_CONTEXT_ACTIONS.THEME_PREFERENCE:
      return {
        ...state,
        themePreference: action.payload,
      };

    default:
      return state;
  }
};

export default ThemeContextReducer;
