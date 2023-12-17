import React from "react";
import men from "../assets/editorpickmen.png";
import women from "../assets/editorpickwomen.png";
import accessories from "../assets/editorpickaccessories.png";
import kids from "../assets/editorpickkids.png";

export default function EditorPick() {
  return (
    <div className="flex flex-col items-center py-[80px] gap-[48px] bg-[#FAFAFA] tracking-wider">
      <div className="flex flex-col items-center gap-[10px] sm:px-[80px]">
        <h3 className="text-2xl font-bold text-center ">EDITOR'S PICK</h3>
        <p className="text-sm text-center text-[#737373] ">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      <div className="flex flex-wrap sm:flex-col items-center justify-center  gap-[30px] sm:px-[20px]">
        <div className="relative shadow-lg">
          <img
            src={men}
            alt="image 1"
            className="w-[509px] sm:w-full  h-[500px] object-cover"
          />
          <div className="flex justify-start items-end absolute inset-0 py-[15px] px-[20px]">
            <button className="bg-white w-[170px] py-[12px] hover:underline">
              <span className="text-[#252B42] text-base font-bold ">MEN</span>
            </button>
          </div>
        </div>
        <div className="relative shadow-lg">
          <img
            src={women}
            alt="image 2"
            className="w-[239px] sm:w-full h-[500px] object-cover"
          />
          <div className="flex justify-start items-end absolute inset-0 py-[15px] px-[20px]">
            <button className="bg-white w-[136px] py-[12px] hover:underline">
              <span className="text-[#252B42] text-base font-bold ">WOMEN</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[16px] sm:w-full">
          <div className="relative shadow-lg">
            {" "}
            <img
              src={accessories}
              alt="image 3"
              className="w-[239px] sm:w-full h-[242px] object-cover"
            />
            <div className="flex justify-start items-end absolute inset-0 py-[15px] px-[20px]">
              <button className="bg-white px-[26px] py-[12px] hover:underline">
                <span className="text-[#252B42] text-base font-bold ">
                  ACCESSORIES
                </span>
              </button>
            </div>
          </div>
          <div className="relative shadow-lg">
            {" "}
            <img
              src={kids}
              alt="image 3"
              className="w-[239px] sm:w-full h-[242px] object-cover"
            />
            <div className="flex justify-start items-end absolute inset-0 py-[15px] px-[20px]">
              <button className="bg-white px-[40px] py-[12px] hover:underline">
                <span className="text-[#252B42] text-base font-bold ">
                  KIDS
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
