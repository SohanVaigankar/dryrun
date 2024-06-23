"use client";

import React from "react";
// contexts
import { useThemeContext } from "@/contexts";
// components
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../atoms";
// icons
import { RxSun, RxMoon } from "react-icons/rx";
// constants & utils
import { THEMES, THEME_PREFERENCES } from "@/lib/constants";
// actions
import { THEME_CONTEXT_ACTIONS } from "@/contexts/theme-context/action.types";

const AVAILABLE_THEME_PREFERENCES = [
  { label: "Light", value: THEME_PREFERENCES.LIGHT },
  { label: "Dark", value: THEME_PREFERENCES.DARK },
  { label: "System", value: THEME_PREFERENCES.SYSTEM },
];

const Navbar = () => {
  const { currentTheme, dispatch } = useThemeContext();

  // fn to handle theme selector
  const handleThemeToggle = (preference: THEME_PREFERENCES) => {
    localStorage.setItem("theme-preference", preference);
    dispatch({
      type: THEME_CONTEXT_ACTIONS.THEME_PREFERENCE,
      payload: preference,
    });
  };

  return (
    <nav className="sticky top-0 z-0 flex items-center  justify-between bg-secondary px-10 py-3 shadow-sm">
      <div className="font-bold">{`DRY⚡RUN`}</div>
      <div className="flex">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="focus-visible:ring-0 focus-visible:ring-offset-0"
              size="icon"
            >
              {currentTheme === THEMES.DARK ? (
                <RxSun className="absolute h-[1.2rem] w-[1.2rem] rotate-180 scale-0 transition-all ease-in-out dark:rotate-0 dark:scale-100" />
              ) : (
                <RxMoon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ease-in-out dark:-rotate-180 dark:scale-0" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {AVAILABLE_THEME_PREFERENCES.map((preference, index) => (
              <DropdownMenuItem
                key={index}
                onClick={() => handleThemeToggle(preference.value)}
              >
                {preference.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
