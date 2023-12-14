import React from "react";
//Assets
import shopping from "../assets/shopping.png";
import video from "../assets/videocard.jpeg";
//Icons
import { FaPlay } from "react-icons/fa";

export default function About() {
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
            src={shopping}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-[30px] w-4/5 py-[25px]">
        <div className="flex flex-col gap-[24px] w-[394px]">
          <span className="text-[#E74040] text-[14px] leading-5 ">
            Problems trying
          </span>
          <p className="text-[#252B42] text-2xl font-bold">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </p>
        </div>
        <div className="w-1/2">
          <p className="text-[#737373] text-[14px] leading-5">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-around items-center w-4/5 py-[80px]">
        <div className="flex flex-col items-center font-bold">
          <h3 className="text-[#252B42] text-[58px] leading-[80px] text-center">
            15K
          </h3>
          <span className="text-[#737373] text-base ">Happy Customers</span>
        </div>
        <div className="flex flex-col items-center font-bold">
          <h3 className="text-[#252B42] text-[58px] leading-[80px] text-center">
            150K
          </h3>
          <span className="text-[#737373] text-base ">Monthly Visitors</span>
        </div>
        <div className="flex flex-col items-center font-bold">
          <h3 className="text-[#252B42] text-[58px] leading-[80px] text-center">
            15
          </h3>
          <span className="text-[#737373] text-base ">Countries Worldwide</span>
        </div>
        <div className="flex flex-col items-center font-bold">
          <h3 className="text-[#252B42] text-[58px] leading-[80px] text-center">
            100+
          </h3>
          <span className="text-[#737373] text-base ">Top Partners</span>
        </div>
      </div>

      <div className="flex justify-center items-center relative w-[989px] h-[540px] my-[112px]">
        <img
          className="absolute h-[540px] w-[989px]  rounded-md object-cover"
          src={video}
          alt="videocard"
        />
        <button className="flex justify-center items-center absolute bg-[#23A6F0] h-[93px] w-[93px] rounded-full">
          <FaPlay className="text-white text-[23px]" />
        </button>
      </div>
      <div className="flex flex-col items-center  gap-[112px]">
        <div className="flex flex-col items-center gap-[10px] max-w-[607px] px-10">
          <h2 className="text-[#252B42] text-center text-[40px] font-bold leading-[50px]">
            Meet Our Team
          </h2>
          <p className="text-center text-[#737373] text-[14px] leading-5">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
