import React from "react";
// icons
import { MdOutlineDescription } from "react-icons/md";

const ProblemStatement = () => {
  return (
    <section className="flex h-full flex-1 flex-col rounded-md bg-secondary p-2 shadow-md ">
      <div className="flex justify-between p-2">
        <div className="flex items-center gap-2 font-bold">
          <MdOutlineDescription />
          <span>Problem Description</span>
        </div>
      </div>
      <div className="h-full w-full flex-wrap rounded-md bg-neutral-50 p-4 text-primary shadow-sm dark:bg-primary-foreground/40 dark:text-primary">
        <p className="text-sm">The problem statement goes here</p>
      </div>
    </section>
  );
};

export default ProblemStatement;
