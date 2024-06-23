"use client";

import { SANDBOX_CONTEXT_ACTIONS } from "./action.types";

// types
import { SandBoxContextType, SandBoxContextActionType } from "./theme.types";

const SandBoxContextReducer = (
  state: SandBoxContextType,
  action: SandBoxContextActionType,
) => {
  switch (action.type) {
    case SANDBOX_CONTEXT_ACTIONS.SELECT_PROBLEM_STATEMENT:
      return {
        ...state,
        problem: action.payload,
      };
    case SANDBOX_CONTEXT_ACTIONS.IS_PROBLEM_STATEMENT_LOADING:
      return {
        ...state,
      };
    case SANDBOX_CONTEXT_ACTIONS.EXECUTE_SOLUTION:
      return {
        ...state,
        solutionDetails: action.payload,
        result: {
          status: "success",
          executionResult: "15",
          testCases: {
            passed: 2,
            total: 6,
          },
        },
      };
    case SANDBOX_CONTEXT_ACTIONS.IS_SOLUTION_EXECUTING:
      return {
        ...state,
        isRunning: action.payload,
        result: action.payload === false ? state.result : null,
      };
    case SANDBOX_CONTEXT_ACTIONS.SUBMIT_SOLUTION:
      return {
        ...state,
        solutionDetails: action.payload,
      };
    case SANDBOX_CONTEXT_ACTIONS.IS_SOLUTION_SUBMITTING:
      return {
        ...state,
        isSubmitting: action.payload,
        isSubmitted: action.payload === true,
      };
      // for demo purpose
    case SANDBOX_CONTEXT_ACTIONS.RESET_SUBMIT:
      return {
        ...state,
        isSubmitted: action.payload,
      };

    default:
      return state;
  }
};

export default SandBoxContextReducer;
