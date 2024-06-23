// components
import { CodeEditor, ProblemStatement, Result } from "./components/molecules";

export default function HomePage() {
  return (
    <div
      className="w-100% z-10 flex h-full flex-col gap-2 p-2 lg:flex-row"
      style={{ maxHeight: "calc(100vh - 6.5vh)" }}
    >
      <ProblemStatement />
      <div className="flex flex-1 flex-col gap-2">
        <CodeEditor />
        <Result />
      </div>
    </div>
  );
}
