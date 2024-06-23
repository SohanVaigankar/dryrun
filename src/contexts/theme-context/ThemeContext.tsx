"use client";
import { createContext, useContext, useEffect, useReducer } from "react";
// actions
import { THEME_CONTEXT_ACTIONS } from "./action.types";
// reducer
import ThemeContextReducer from "./ThemeContextReducer";
// utils, constants & helper functions
import { THEMES, THEME_PREFERENCES } from "@/lib/constants";
// types & props
import { ThemeContextType } from "./theme.types";

const initialState = {
  currentTheme: "",
  themePreference: "",
  dispatch: (arg: any) => arg,
};

// creating theme context
const ThemeContext = createContext<ThemeContextType>(initialState);

// context provider
export const ThemeContextProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;

  const [state, dispatch] = useReducer(ThemeContextReducer, initialState);

  // moduler dispatch fn for theme toggle
  const dispatchThemeToggle = (theme: THEMES) => {
    dispatch({
      type: THEME_CONTEXT_ACTIONS.TOGGLE_THEME,
      payload: theme,
    });
  };

  //   function to get and apply the system theme
  const getSystemTheme = (isDarkTheme: boolean) => {
    if (isDarkTheme) {
      dispatchThemeToggle(THEMES.DARK);
    } else {
      dispatchThemeToggle(THEMES.LIGHT);
    }
  };

  // fn to monitor changes in system theme preference
  const monitorSystemPreference = () => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

    systemTheme.addEventListener("change", (e) => getSystemTheme(e?.matches));

    systemTheme.removeEventListener("change", () => {
      console.log("system theme changed");
    });
  };

  // fn to get theme based on data theme-preferance in localstorage
  const getTheme = () => {
    const savedPreference = localStorage.getItem("theme-preference");
    switch (savedPreference) {
      case THEME_PREFERENCES.DARK:
        dispatchThemeToggle(THEMES.DARK);
        break;
      case THEME_PREFERENCES.LIGHT:
        dispatchThemeToggle(THEMES.LIGHT);
        break;
      case THEME_PREFERENCES.SYSTEM:
        const systemTheme = window.matchMedia(
          "(prefers-color-scheme: dark)",
        )?.matches;
        getSystemTheme(systemTheme);
        break;

      default:
        localStorage.setItem("theme-preference", THEME_PREFERENCES.LIGHT);
        dispatchThemeToggle(THEMES.LIGHT);
        break;
    }
  };

  useEffect(() => {
    // add dark class to DOM if theme is dark otherwise remove
    if (state.currentTheme) {
      const root = document.documentElement;
      if (state.currentTheme === THEMES.DARK) {
        root.classList.add(THEMES.DARK);
      } else {
        root.classList.remove(THEMES.DARK);
      }
    }
  }, [state.currentTheme]);

  useEffect(() => {
    getTheme();
    monitorSystemPreference();

    // cleanup
    return () => monitorSystemPreference();
  }, [state.themePreference]);

  const values = {
    currentTheme: state.currentTheme,
    themePreference: state.themePreference,
    dispatch,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

// consuming theme context
export const useThemeContext = () => useContext(ThemeContext);
