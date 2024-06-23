// icons
import { IoLogoJavascript, IoLogoPython } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { SiTypescript, SiCplusplus } from "react-icons/si";

export enum THEME_PREFERENCES {
  SYSTEM = "system",
  LIGHT = "light",
  DARK = "dark",
}
export enum THEMES {
  LIGHT = "light",
  DARK = "dark",
}
export const PROBLEM_STATEMENTS = [
  {
    id: "problem_1",
    title: "Sum of two numbers",
    description:
      "Write a function `sum(a, b)` that takes two integers `a` and `b` as input and returns their sum.\n\n ### Example 3:\n**Input:** `a = 0` & `b = -7`\n\n**Output:** -7\n### Example 2:\n**Input:** `a = -5` & `b = 7`\n\n**Output:** 2\n\n### Example 1:\n**Input:** `a = 5` & `b = 7`\n\n**Output:** 12\n\n### Constraints\n\n- => The inputs a and b are integers.\n\n- => The result will be an integer.",
    difficulty: "easy",
    testCases: [
      { case: "case1" },
      { case: "case2" },
      { case: "case3" },
      { case: "case4" },
      { case: "case5" },
      { case: "case6" },
    ],
  },
];

export const LANGUAGES = [
  {
    languageName: "JavaScript",
    languageVersion: "ES2023",
    description: "JavaScript",
    compiler: {
      name: "Node.js",
      version: "20.0.0",
    },
    icon: IoLogoJavascript,
  },
  {
    languageName: "CPP",
    languageVersion: "2019",
    description: "C++",
    compiler: {
      name: "gcc",
      version: "2.0.0",
    },
    icon: SiCplusplus,
  },
  {
    languageName: "TypeScript",
    languageVersion: "5",
    description: "TypeScript",
    compiler: {
      name: "Node.js",
      version: "20.0.0",
    },
    icon: SiTypescript,
  },
  {
    languageName: "Python",
    languageVersion: "3.10",
    description: "Python",
    compiler: {
      name: "Python",
      version: "20.0.0",
    },
    icon: IoLogoPython,
  },
  {
    languageName: "Java",
    languageVersion: "12.0.9",
    description: "Java",
    compiler: {
      name: "JRE",
      version: "8.0.0",
    },
    icon: FaJava,
  },
];

export const SOLUTIONS = [
  {
    id: "solution_1",
    problemId: "problem_1",
    solutions: {
      javascript: `\nfunction sum(a, b) {\n\treturn a + b;\n}\n\nsum(5, 10);\n`,
      typescript: `\nfunction sum(a: number, b: number) {\n\treturn a + b;\n}\n\nsum(5, 10);\n`,
      python: `\ndef sum(name):\n\treturn a + b\n\nsum(5, 10)\n`,
      java: `\npublic class Main {\n\tpublic static int sum(int a, int b) {\n\t\treturn a + b;\n\t}\n\n\tpublic static void main(String[] args) {\n\t\tint result = sum(5, 10);\n\t\tSystem.out.println(result);\n\t}\n}\n`,
      cpp: `#include <iostream>\n\nint sum(int a, int b) {\n\treturn a + b;\n}\n\nint main() {\n\tint result = sum(5, 10);\n\tstd::cout  << result << std::endl;\n\treturn 0;\n}`,
    },
  },
];
