"use client";
// contexts
import { useSandBoxContext } from "@/contexts";
// icons
import { GoCommandPalette } from "react-icons/go";

const Result = () => {
  const { isRunning, result } = useSandBoxContext();

  return (
    <section className="flex h-[30%] flex-col rounded-md bg-secondary p-2 shadow-md">
      <div className="flex justify-between p-2">
        <div className="flex items-center gap-2 font-bold">
          <GoCommandPalette />
          <span>Result</span>
        </div>
      </div>
      <div className="h-full w-full flex-wrap rounded-md bg-neutral-50 p-4 text-primary shadow-sm dark:bg-primary-foreground dark:text-primary">
        {!result && !isRunning && (
          <p className="text-sm">Run the program to see the results</p>
        )}
        {isRunning && <code>$ generating result...</code>}

        {result?.status === "success" && (
          <>
            <code>Result:</code>
            <br />
            <code className="text-green-700">$ {result.executionResult}</code>
            <br />
            <code className="text-green-700">
              {`$ ${result.testCases.passed}/${result.testCases.total} test cases passed`}
            </code>
          </>
        )}
      </div>
    </section>
  );
};

export default Result;
