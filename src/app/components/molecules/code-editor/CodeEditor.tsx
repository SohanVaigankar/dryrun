"use client";

import React, { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import * as monaco from "monaco-editor";
// contexts
import { useThemeContext } from "@/contexts";
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
// utils, constants & helper functions
import { EXAMPLE_SNIPPETS, LANGUAGES, THEMES } from "@/lib/constants";
// icons
import { IoCloudUploadOutline, IoPlay, IoCodeSlash } from "react-icons/io5";

const CodeEditor = () => {
  const { currentTheme } = useThemeContext();
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [language, setLanguage] = useState("javascript");
  const [sourceCode, setSourceCode] = useState<string | undefined>("");

  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleEdit = (value: string | undefined, event: object) => {
    // console.log(event);
    console.log(JSON.stringify(value));
    setSourceCode(value ?? "");
  };

  const handleLanguageChange = (languageName: string) => {
    setLanguage(languageName);
    setSourceCode(EXAMPLE_SNIPPETS[languageName]);
  };

  const handleClick = async (type: string) => {
    switch (type) {
      case "run":
        setIsRunning(true);
        setTimeout(() => {
          setIsRunning(false);
        }, 5000);
        console.log();
        break;
      case "submit":
        setIsSubmitting(true);
        console.log();
        setIsSubmitting(false);
        break;

      default:
        break;
    }
  };

  const editorConfigs = {
    fontSize: 14,
  };

  return (
    <section className="flex h-[70%] flex-col  rounded-md bg-secondary p-2 shadow-md">
      <div className="flex justify-between p-2">
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
            disabled={isRunning || isSubmitting}
          >
            <IoPlay />
            <span>Run</span>
          </Button>
          <Button
            size="sm"
            className="flex items-center justify-center gap-1 hover:bg-orange-400 "
            onClick={() => handleClick("submit")}
            disabled={isSubmitting}
          >
            <IoCloudUploadOutline />
            <span>Submit</span>
          </Button>
        </div>
      </div>

      <div className="h-full overflow-hidden rounded-md">
        <Editor
          className="flex-grow"
          theme={currentTheme === THEMES.DARK ? "vs-dark" : "light"}
          language={language}
          defaultValue={EXAMPLE_SNIPPETS[language]}
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
    </section>
  );
};

export default CodeEditor;
