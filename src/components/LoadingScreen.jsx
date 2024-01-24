import React from "react";
import { Spinner } from "@material-tailwind/react";

export default function LoadingScreen() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gray-800 bg-opacity-75 gap-5 z-50">
      <div className="flex flex-col justify-center items-center bg-white p-10 rounded-lg shadow-lg gap-10 ">
        <Spinner />
        <span className="text-black text-normal ">
          You will be redirected in few seconds. Please do not close this page
        </span>
      </div>
    </div>
  );
}
