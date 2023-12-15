import React from "react";
import contact from "../assets/contactfamily.png";

export default function Contact() {
  return (
    <div className="flex flex-col items-center  tracking-wider">
      <div className="flex flex-wrap justify-center items-center gap-[30px]">
        <div className="flex flex-col items-start  text-left gap-[24px] py-[40px] max-w-[580px]">
          <h5 className="text-[#252B42] text-base font-bold">ABOUT COMPANY</h5>
          <h2 className="text-[58px] font-bold leading-[80px]  text-center">
            {" "}
            ABOUT US{" "}
          </h2>
          <div className="w-[376px]">
            <h5 className="text-[20px] leading-[30px] text-[#737373]">
              We know how large objects will act, but things on a small scale
            </h5>
          </div>
          <button className="bg-[#23A6F0] hover:bg-[#1c96dd] shadow-lg rounded-md py-[15px] px-[40px] max-w-[221px]">
            <span className="text-[14px] leading-[22px] text-white font-bold ">
              Get Quote Now
            </span>
          </button>
        </div>
        <div className="relative h-[672px] w-[593px]">
          <div className="absolute bg-[#FFE9EA] h-[77px] w-[77px] rounded-full inset-y-[20px]  "></div>
          <div className="absolute bg-[#FFE9EA] h-[484px] w-[484px] rounded-full inset-x-[40px] "></div>
          <div className="absolute bg-[#FFE9EA] h-[30px] w-[30px] rounded-full inset-x-[540px] inset-y-[250px]"></div>
          <div className="absolute bg-[#977DF4] h-[15px] w-[15px] rounded-full inset-x-[550px] inset-y-[100px]"></div>
          <div className="absolute bg-[#977DF4] h-[15px] w-[15px] rounded-full inset-x-[20px] inset-y-[400px]"></div>
          <img
            className="absolute h-[668px] w-[571px] object-cover inset-0"
            src={contact}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
