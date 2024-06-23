"use client";
import { useState } from "react";
// components
import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from "../../atoms";
// contexts
import { useSandBoxContext } from "@/contexts";
// icons
import { GoCommandPalette } from "react-icons/go";
import { PiFlaskFill } from "react-icons/pi";

const TABS = [
  { label: "Testcase", value: "testcase", icon: PiFlaskFill },
  { label: "Result", value: "result", icon: GoCommandPalette },
];

const Result = () => {
  const { isRunning, result } = useSandBoxContext();

  const [activeTab, setActiveTab] = useState<string>("result");

  // fn to handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const renderTab = (tab: string) => {
    switch (tab) {
      case "testcase":
        return (
          <div className="flex flex-col items-center justify-center">
            <p className="mt-4 text-center">Create your testcases here.</p>
            <Button className="mt-6">Create</Button>
          </div>
        );
      case "result":
        return (
          <>
            {!result && !isRunning && (
              <p className="mt-4 text-center">
                Run the program to see the results
              </p>
            )}
            {isRunning && <code>$ generating result...</code>}

            {result?.status === "success" && (
              <>
                <code>Result:</code>
                <br />
                <code className="text-green-700">
                  $ {result.executionResult}
                </code>
                <br />
                <code className="text-green-700">
                  {`$ ${result.testCases.passed}/${result.testCases.total} test cases passed`}
                </code>
              </>
            )}
          </>
        );
    }
  };

  return (
    <Tabs
      defaultValue="result"
      className="flex h-[30%] flex-col rounded-md bg-secondary p-2 shadow-md"
      onValueChange={handleTabChange}
    >
      <TabsList className="flex justify-start gap-1 p-2">
        {TABS.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={`flex items-center gap-2 font-bold  ${activeTab === tab.value ? "bg-neutral-400/30" : "bg-secondary"}`}
          >
            <tab.icon />
            <span>{tab.label}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent
        value={activeTab}
        className="h-full w-full flex-wrap rounded-md bg-neutral-50 p-4 text-primary shadow-sm dark:bg-primary-foreground dark:text-primary"
      >
        {renderTab(activeTab)}
      </TabsContent>
    </Tabs>
  );
};

export default Result;
