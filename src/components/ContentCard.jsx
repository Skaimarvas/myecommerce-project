import React from "react";
import blog1 from "../assets/blog1.jpeg";
import { LuAlarmClock } from "react-icons/lu";
import { FaChartArea } from "react-icons/fa";
import { FcNext } from "react-icons/fc";

export default function ContentCard() {
  return (
    <div className="shadow-lg transition-transform hover:scale-[1.05]">
      <div className="relative">
        <img
          src={blog1}
          alt="image 1"
          className="w-[348px] h-[300px]object-cover"
        />
        <div className="absolute inset-0 p-3 ">
          <div className="flex justify-center bg-[#E74040]  w-[50px] h-[24px] shadow-md rounded-sm px-[10px]  ">
            <span className="text-white text-[14px] font-bold leading-6">
              NEW
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col  items-start gap-[10px] p-[25px] w-[348px] tracking-wider">
        <div className="flex flex-row gap-[15px] text-xs text-[#737373] ">
          <span className="text-[#8EC2F2]">Google</span>
          <span>Trending</span>
          <span>New</span>
        </div>
        <h4 className="text-[#252B42] text-[20px] leading-[30px]  text-stretch">
          Loudest à la Madison #1 (L'integral)
        </h4>
        <p className="text-[#737373] text-sm ">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row items-center gap-[5px]">
            <LuAlarmClock className="text-[16px] text-[#23A6F0]" />
            <span className="text-[#737373] text-sm ">22 April 2021</span>
          </div>
          <div className="flex flex-row items-center gap-[5px]">
            <FaChartArea className="text-[16px] text-[#23856D]" />
            <span className="text-[#737373] text-sm ">10 comments</span>
          </div>
        </div>

        <button className="flex flex-row items-center ">
          <span className="text-[#737373] text-[14px] leading-6 font-bold ">
            Learn More
          </span>
          <FcNext />
        </button>
      </div>
    </div>
  );
}
