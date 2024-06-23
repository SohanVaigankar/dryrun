import "./ShimmerLoader.css";

type ShimmerLoaderProps = {
  extraClassName?: string;
  height: string;
  width: string;
};

const ShimmerLoader = (props: ShimmerLoaderProps) => {
  const { extraClassName, height, width } = props;

  return (
    <div
      className={`shimmer-animate  rounded-sm bg-[#777] ${extraClassName ? extraClassName : ""}`}
      style={{
        height: height ? height : "10px",
        width: width ? width : "100%",
      }}
    ></div>
  );
};

export default ShimmerLoader;
