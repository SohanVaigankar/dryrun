"use client";

import { useSandBoxContext } from "@/contexts";
import React from "react";
// icons
import { GoDotFill } from "react-icons/go";
import { MdOutlineDescription } from "react-icons/md";

const ProblemStatement = () => {
  const { problem } = useSandBoxContext();
  return (
    <section className="flex h-full flex-1 flex-col rounded-md bg-secondary p-2 shadow-md ">
      <div className="flex justify-between p-2">
        <div className="flex items-center gap-2 font-bold">
          <MdOutlineDescription />
          <span>Problem Description</span>
        </div>
      </div>
      <div className="h-full w-full flex-wrap rounded-md bg-neutral-50 p-4 text-primary shadow-sm dark:bg-primary-foreground/40 dark:text-primary">
        <div className="my-3 flex flex-col items-center justify-start gap-5 sm:flex-row">
          <h3 className="max-w-fit text-xl font-semibold sm:text-2xl lg:text-3xl">
            {problem.title}
          </h3>
          <span className="flex items-center justify-center gap-1 rounded-3xl  bg-green-700 px-3 py-1  text-sm  text-white">
            <GoDotFill />
            {problem.difficulty.charAt(0).toUpperCase() +
              problem.difficulty.slice(1)}
          </span>
        </div>
        <p className="text-sm">{problem.description}</p>
      </div>
    </section>
  );
};

export default ProblemStatement;
