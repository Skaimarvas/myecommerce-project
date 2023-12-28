import React from "react";
import SpiningAnimation from "./SpiningAnimation";

export default function LoadingScreen() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gray-800 bg-opacity-75 gap-5 z-50">
      <SpiningAnimation></SpiningAnimation>

      <span className="text-white text-2xl">
        You will be redirected in few seconds. Please do not close this page
      </span>
    </div>
  );
}
