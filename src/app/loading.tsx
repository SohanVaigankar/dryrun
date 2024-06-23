import { ShimmerLoader } from "./components/atoms";

const Loading = () => {
  return (
    <div
      className=" grid h-screen w-full grid-flow-col grid-rows-3 gap-4 p-3"
      style={{ maxHeight: "calc(90vh)" }}
    >
      <ShimmerLoader extraClassName={"row-span-4"} height="100%" width="100%" />
      <ShimmerLoader extraClassName={"row-span-2"} height="100%" width="100%" />
      <ShimmerLoader extraClassName={"col-span-1"} height="100%" width="100%" />
    </div>
  );
};

export default Loading;
