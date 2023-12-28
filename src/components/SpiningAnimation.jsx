import React from "react";

export default function SpiningAnimation(props) {
  const { wh } = props;
  const size = wh ? wh : "8";
  return (
    <div className="animate-spin flex justify-center items-center rounded-full">
      <div
        className={`w-${size} h-${size} rounded-full bg-black  shadow-sm`}
      ></div>
      <div>
        <div
          className={`w-${size} h-${size} rounded-full bg-black  shadow-sm`}
        ></div>
        <div
          className={`w-${size} h-${size} rounded-full bg-transparent`}
        ></div>
        <div
          className={`w-${size} h-${size} rounded-full bg-black  shadow-sm`}
        ></div>
      </div>

      <div
        className={`w-${size} h-${size} rounded-full bg-black  shadow-sm`}
      ></div>
    </div>
  );
}
