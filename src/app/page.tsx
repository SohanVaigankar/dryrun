// components
import { CodeEditor, ProblemStatement, Result } from "./components/molecules";

export default function HomePage() {
  return (
    <div
      className="w-100% flex h-screen gap-2 p-2"
      style={{ maxHeight: "calc(100vh - 10vh)" }}
    >
      <ProblemStatement />
      <div className="flex flex-1 flex-col gap-2">
        <CodeEditor />
        <Result />
      </div>
    </div>
  );
}
