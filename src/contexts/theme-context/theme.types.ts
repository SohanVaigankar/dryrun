import React from "react";
// actions
import { THEME_CONTEXT_ACTIONS } from "./action.types";
// utils & constants
import { THEMES, THEME_PREFERENCES } from "@/lib/constants";

// ActionMap utility type
type ActionMap<M extends Record<string, any>> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : { type: Key; payload: M[Key] };
};

// Theme Context Action Payload type definition
type ThemeContextActionPayloadType = {
  [THEME_CONTEXT_ACTIONS.TOGGLE_THEME]: {
    payload: THEME_PREFERENCES;
  };
  [THEME_CONTEXT_ACTIONS.UPDATE_SYSTEM_THEME]: {
    payload: THEMES;
  };
};

// Theme Context Action types
export type ThemeContextActionType =
  ActionMap<ThemeContextActionPayloadType>[keyof ThemeContextActionPayloadType];

export type ThemeContextType = {
  currentTheme: THEMES;
  systemTheme?: THEMES;
  themePreference: THEME_PREFERENCES | string;
  dispatch: React.Dispatch<ThemeContextActionType>;
};
