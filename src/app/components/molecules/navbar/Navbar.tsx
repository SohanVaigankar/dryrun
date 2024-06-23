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

const Navbar = () => {
  const { currentTheme, dispatch } = useThemeContext();

  const handleThemeToggle = (preference: THEME_PREFERENCES) => {
    dispatch({
      type: THEME_CONTEXT_ACTIONS.TOGGLE_THEME,
      payload: preference,
    });
  };

  return (
    <nav className="sticky top-0 flex items-center justify-between  bg-secondary px-10 py-3 shadow-sm z-0">
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
            <DropdownMenuItem
              onClick={() => handleThemeToggle(THEME_PREFERENCES.LIGHT)}
            >
              Light
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleThemeToggle(THEME_PREFERENCES.DARK)}
            >
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleThemeToggle(THEME_PREFERENCES.SYSTEM)}
            >
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
