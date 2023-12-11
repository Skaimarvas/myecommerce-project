import React from "react";
import men from "../assets/editorpickmen.png";
import women from "../assets/editorpickwomen.png";
import accessories from "../assets/editorpickaccessories.png";
import kids from "../assets/editorpickkids.png";

export default function EditorPick() {
  return (
    <div className="flex flex-col items-center py-[80px] gap-[48px]">
      <div className="flex flex-col items-center gap-[10px]">
        <h3 className="text-2xl font-bold tracking-[0.1px]">EDITOR'S PICK</h3>
        <p className="text-sm text-center text-[#737373] tracking-[0.2px]">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-[30px]">
        <div className="relative">
          <img
            src={men}
            alt="image 1"
            className="w-[509px] h-[500px] object-cover"
          />
          <div className="flex justify-start items-end absolute inset-0 py-[15px] px-[20px]">
            <button className="bg-white w-[170px] py-[12px]">
              <span className="text-[#252B42] text-base font-bold tracking-[0.1px]">
                MEN
              </span>
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src={women}
            alt="image 2"
            className="w-[239px] h-[500px] object-cover"
          />
          <div className="flex justify-start items-end absolute inset-0 py-[15px] px-[20px]">
            <button className="bg-white w-[136px] py-[12px]">
              <span className="text-[#252B42] text-base font-bold tracking-[0.1px]">
                WOMEN
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="relative">
            {" "}
            <img
              src={accessories}
              alt="image 3"
              className="w-[239px] h-[242px] object-cover"
            />
            <div className="flex justify-start items-end absolute inset-0 py-[15px] px-[20px]">
              <button className="bg-white px-[26px] py-[12px]">
                <span className="text-[#252B42] text-base font-bold tracking-[0.1px]">
                  ACCESSORIES
                </span>
              </button>
            </div>
          </div>
          <div className="relative">
            {" "}
            <img
              src={kids}
              alt="image 3"
              className="w-[239px] h-[242px] object-cover"
            />
            <div className="flex justify-start items-end absolute inset-0 py-[15px] px-[20px]">
              <button className="bg-white px-[40px] py-[12px]">
                <span className="text-[#252B42] text-base font-bold tracking-[0.1px]">
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