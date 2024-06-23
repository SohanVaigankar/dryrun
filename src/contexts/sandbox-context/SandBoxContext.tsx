"use client";
import { createContext, useContext, useEffect, useReducer } from "react";
// actions
import { SANDBOX_CONTEXT_ACTIONS } from "./action.types";
// reducer
import SandBoxContextReducer from "./SandBoxContextReducer.ts";
// utils, constants & helper functions

// types & props
import { SandBoxContextType } from "./sandbox.types";
import { PROBLEM_STATEMENTS } from "@/lib/constants";

const initialState = {
  problem: PROBLEM_STATEMENTS[0],
  language:'javascript',
  solutionDetails: null,
  isRunning: false,
  isSubmitting: false,
  isSubmitted: false,
  result: null,
  dispatch: () => null,
};

// creating theme context
const SandBoxContext = createContext<SandBoxContextType>(initialState);

// context provider
export const SandBoxContextProvider = (props: {
  children: React.ReactNode;
}) => {
  const { children } = props;

  const [state, dispatch] = useReducer(SandBoxContextReducer, initialState);

  const values = {
    problem: state.problem,
    language: state.language,
    solutionDetails: state.solutionDetails,
    isRunning: state.isRunning,
    isSubmitting: state.isSubmitting,
    isSubmitted: state.isSubmitted,
    result: state.result,
    dispatch,
  };

  return (
    <SandBoxContext.Provider value={values}>{children}</SandBoxContext.Provider>
  );
};

// consuming sandbox context
export const useSandBoxContext = () => useContext(SandBoxContext);
