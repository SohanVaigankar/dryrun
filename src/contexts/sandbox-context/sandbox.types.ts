import { SANDBOX_CONTEXT_ACTIONS } from "./action.types";

type TestCasesType = {
  cases: string;
};

type ProblemType = {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  testCases: TestCasesType[];
};

type SolutionDetailsType = {
  problemId: string;
  preferredLanguage: string;
  sourceCode: string;
};

type ResultType = {
  status: "success" | "failure";
  executionResult: string;
  testCases: {
    passed: number;
    total: number;
  };
};

export type SandBoxContextType = {
  problem: ProblemType;
  solutionDetails: SolutionDetailsType | null;
  isRunning: boolean;
  isSubmitting: boolean;
  result: ResultType | null;
  dispatch: React.Dispatch<any>;
};

// ActionMap utility type
type ActionMap<M extends Record<string, any>> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : { type: Key; payload: M[Key] };
};

// SandBox Context Action Payload type definition
type SandBoxContextActionPayloadType = {
  [SANDBOX_CONTEXT_ACTIONS.IS_PROBLEM_STATEMENT_LOADING]: {
    payload: boolean;
  };
  [SANDBOX_CONTEXT_ACTIONS.SELECT_PROBLEM_STATEMENT]: {
    payload: boolean;
  };
  [SANDBOX_CONTEXT_ACTIONS.EXECUTE_SOLUTION]: {
    payload: SolutionDetailsType;
  };
  [SANDBOX_CONTEXT_ACTIONS.IS_SOLUTION_EXECUTING]: {
    payload: boolean;
  };
  [SANDBOX_CONTEXT_ACTIONS.SUBMIT_SOLUTION]: {
    payload: SolutionDetailsType;
  };
  [SANDBOX_CONTEXT_ACTIONS.IS_SOLUTION_SUBMITTING]: {
    payload: boolean;
  };
  // for demo purpose
  [SANDBOX_CONTEXT_ACTIONS.RESET_SUBMIT]: {
    payload: boolean;
  };
};

// SandBox Context Action types
export type SandBoxContextActionType =
  ActionMap<SandBoxContextActionPayloadType>[keyof SandBoxContextActionPayloadType];
