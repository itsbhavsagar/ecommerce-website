import React from "react";

const ShimmerUI = () => {
  const ShimmerItems = new Array(30).fill(null);
  return (
    <div className="flex justify-around flex-wrap bg-white">
      {ShimmerItems.map((_, index) => (
        <div
          key={index}
          className="artboard h-[40vh] w-1/6 m-4 bg-gray-200 rounded"
        ></div>
      ))}
    </div>
  );
};

export default ShimmerUI;
