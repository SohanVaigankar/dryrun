"use client";
import { createContext, useContext, useEffect, useReducer } from "react";
// actions
import { UPDATE_SYSTEM_THEME } from "./action.types";
// reducer
import ThemeContextReducer from "./ThemeContextReducer";
// utils, constants & helper functions
import { THEMES, THEME_PREFERENCES } from "@/lib/constants";
// types & props
import { ThemeContextType } from "./theme.types";

const getSystemTheme = matchMedia("(prefers-color-scheme: dark)").matches
  ? THEMES.DARK
  : THEMES.LIGHT;

const initialState = {
  currentTheme:
    localStorage.getItem("theme-preference") === THEME_PREFERENCES.SYSTEM
      ? getSystemTheme
      : THEMES.LIGHT,
  themePreference:
    localStorage.getItem("theme-preference") ?? THEME_PREFERENCES.LIGHT,
};

// creating theme context
const ThemeContext = createContext<ThemeContextType>(initialState);

// context provider
export const ThemeContextProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;

  const [state, dispatch] = useReducer(ThemeContextReducer, initialState);

  //   function to check the system theme
  const getSystemTheme = async () => {
    const systemTheme = matchMedia("(prefers-color-scheme: dark)");

    systemTheme.addEventListener("change", (e) =>
      e.matches
        ? dispatch({
            type: UPDATE_SYSTEM_THEME,
            payload: THEMES.DARK,
          })
        : dispatch({
            type: UPDATE_SYSTEM_THEME,
            payload: THEMES.LIGHT,
          }),
    );

    systemTheme.removeEventListener("change", () => {
      console.log("system theme changed");
    });
  };

  useEffect(() => {
    // add dark class to DOM if theme is dark otherwise remove
    const root = document.documentElement;
    if (state.currentTheme === THEMES.DARK) {
      root.classList.add(THEMES.DARK);
    } else {
      root.classList.remove(THEMES.DARK);
    }
  }, [state.currentTheme]);

  useEffect(() => {
    //   storing selected theme preference in localstorage
    localStorage.setItem("theme-preference", state.themePreference);

    if (state.themePreference === THEME_PREFERENCES.SYSTEM) {
      getSystemTheme();
    }
    // cleanup
    return () => getSystemTheme();
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
