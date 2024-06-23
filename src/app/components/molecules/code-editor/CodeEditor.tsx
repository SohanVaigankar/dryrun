"use client";

import React, { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import * as monaco from "monaco-editor";
// contexts
import { useSandBoxContext, useThemeContext } from "@/contexts";
import { SANDBOX_CONTEXT_ACTIONS } from "@/contexts/sandbox-context/action.types";
// components
import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  ShimmerLoader,
} from "../../atoms";
import SolutionSubmittedModal from "../modals/solution-submitted-modal/SolutionSubmittedModal";
// utils, constants & helper functions
import { SOLUTIONS, LANGUAGES, THEMES } from "@/lib/constants";
// icons
import { IoCloudUploadOutline, IoPlay, IoCodeSlash } from "react-icons/io5";

const CodeEditor = () => {
  // contexts
  const { currentTheme } = useThemeContext();
  const { problem, isRunning, isSubmitting, isSubmitted, dispatch } =
    useSandBoxContext();
  // refs
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  // local states
  const [language, setLanguage] = useState("javascript");
  const [sourceCode, setSourceCode] = useState<string | undefined>(
    SOLUTIONS.find((sol) => sol.problemId === problem.id)?.solutions[
      "javascript"
    ],
  );
  const [isEditorMounted, setIsEditorMounted] = useState(false);

  // fn to focus on code editor on opening webpage
  const onMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    setIsEditorMounted(true);
    editorRef.current = editor;
    editor.focus();
  };

  // fn to update source code
  const handleEdit = (value: string | undefined, event: object) => {
    // console.log(event);
    // console.log(JSON.stringify(value));
    setSourceCode(value ?? "");
  };

  // fn to handle language change
  const handleLanguageChange = (languageName: string) => {
    setLanguage(languageName);
    setSourceCode(
      SOLUTIONS?.find((sol) => sol.problemId === problem.id)?.solutions[
        languageName
      ],
    );
  };

  const handleClick = async (type: string) => {
    switch (type) {
      case "run":
        try {
          dispatch({
            type: SANDBOX_CONTEXT_ACTIONS.IS_SOLUTION_EXECUTING,
            payload: true,
          });
          setTimeout(() => {
            dispatch({
              type: SANDBOX_CONTEXT_ACTIONS.EXECUTE_SOLUTION,
              payload: {
                problemId: problem.id,
                preferredLanguage: language,
                sourceCode: sourceCode,
              },
            });
          }, 1000);
        } catch (error) {
          console.error("Failed to run the code");
        } finally {
          setTimeout(() => {
            dispatch({
              type: SANDBOX_CONTEXT_ACTIONS.IS_SOLUTION_EXECUTING,
              payload: false,
            });
          }, 1000);
        }

        break;

      case "submit":
        try {
          dispatch({
            type: SANDBOX_CONTEXT_ACTIONS.IS_SOLUTION_SUBMITTING,
            payload: true,
          });
          dispatch({
            type: SANDBOX_CONTEXT_ACTIONS.SUBMIT_SOLUTION,
            payload: {
              problemId: problem.id,
              preferredLanguage: language,
              sourceCode,
            },
          });
        } catch (error) {
          console.error("Failed to submit the solution");
        } finally {
          setTimeout(() => {
            dispatch({
              type: SANDBOX_CONTEXT_ACTIONS.IS_SOLUTION_SUBMITTING,
              payload: false,
            });
          }, 1000);
        }
        break;

      default:
        break;
    }
  };

  const editorConfigs = {
    scrollBeyondLastLine: false,
  };

  return (
    <section className="flex h-[70%] flex-col  rounded-md bg-secondary p-2 shadow-md">
      <div className="flex flex-col justify-between gap-3 p-2 md:flex-row md:gap-0">
        <div className="flex items-center gap-2 font-bold">
          <IoCodeSlash />
          <span>Code</span>
        </div>
        <div className="flex items-center gap-2">
          <Select
            defaultValue={"javascript"}
            onValueChange={handleLanguageChange}
          >
            <SelectTrigger className="w-[180px] focus-visible:ring-0 focus-visible:ring-offset-0">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              {LANGUAGES.map((language, index) => (
                <SelectItem
                  key={index}
                  value={language.languageName.toLowerCase()}
                >
                  <div className="flex items-center justify-start  gap-2 ">
                    {<language.icon />}
                    {language.languageName}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            size="sm"
            className="flex items-center justify-center gap-1 bg-green-700 text-white hover:bg-green-900 hover:text-white/90"
            onClick={() => handleClick("run")}
            disabled={isRunning || isSubmitting || !isEditorMounted}
          >
            <IoPlay />
            <span>Run</span>
          </Button>
          <Button
            size="sm"
            className="flex items-center justify-center gap-1 hover:bg-orange-500 "
            onClick={() => handleClick("submit")}
            disabled={isSubmitting || !isEditorMounted}
          >
            <IoCloudUploadOutline />
            <span>Submit</span>
          </Button>
        </div>
      </div>

      <div className="h-full w-full overflow-hidden rounded-md">
        <Editor
          className="flex-grow"
          theme={currentTheme === THEMES.DARK ? "vs-dark" : "light"}
          language={language}
          defaultValue={
            SOLUTIONS.find((sol) => sol.problemId === problem.id)?.solutions[
              language
            ]
          }
          value={sourceCode}
          onMount={onMount}
          onChange={handleEdit}
          loading={
            <div className="flex h-full w-full flex-col gap-2">
              <ShimmerLoader height="100%" width="100%" />
            </div>
          }
          options={editorConfigs}
        />
      </div>
      {isSubmitted && (
        <SolutionSubmittedModal openModal={isSubmitted} language={language} />
      )}
    </section>
  );
};

export default CodeEditor;
