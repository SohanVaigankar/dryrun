// components
import { PageNotFound } from "./components/molecules";

const NotFound = () => {
  return (
    <div
      className="flex h-full w-full items-center justify-center"
      style={{ maxHeight: "calc(90vh)" }}
    >
      <PageNotFound />
    </div>
  );
};

export default NotFound;
