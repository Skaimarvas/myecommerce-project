import React from "react";
import { Icon } from "@iconify/react";
//Assets
import contact from "../assets/contactfamily.png";

export default function Contact() {
  return (
    <div className="flex flex-col items-center  tracking-wider">
      <div className="flex flex-wrap justify-center items-center gap-[30px] sm:w-4/5">
        <div className="flex flex-col items-start  text-left gap-[24px] py-[40px] sm:text-center sm:items-center ">
          <h5 className="text-[#252B42] text-base font-bold">ABOUT COMPANY</h5>

          <h2 className="text-[58px] font-bold leading-[80px]  ">
            {" "}
            Get in touch today!{" "}
          </h2>

          <h5 className="text-[20px] leading-[30px] text-[#737373]">
            We know how large objects will act, but things on a small scale
          </h5>

          <h5 className="text-[#252B42] text-2xl font-bold">
            Phone ; +451 215 215{" "}
          </h5>
          <h5 className="text-[#252B42] text-2xl font-bold">
            Fax : +451 215 215
          </h5>
          <div className="flex flex-row gap-[34px] p-[10px]">
            <Icon className="text-[30px] shadow-sm" icon="logos:twitter" />
            <Icon className="text-[30px] shadow-sm " icon="devicon:facebook" />
            <Icon
              className="text-[30px] shadow-sm"
              icon="logos:instagram-icon"
            />
            <Icon className="text-[30px] shadow-sm" icon="devicon:linkedin" />
          </div>
        </div>
        <div className="relative h-[672px] w-[593px] sm:w-[350px] sm:h-[420px] ">
          <div className="absolute bg-[#FFE9EA] h-[77px] w-[77px] sm:h-[38px] sm:w-[38px] rounded-full inset-y-[20px]  "></div>
          <div className="absolute bg-[#FFE9EA] h-[484px] w-[484px] sm:h-[210px] sm:w-[210px] rounded-full inset-x-[40px] "></div>
          <div className="absolute bg-[#FFE9EA] h-[30px] w-[30px] sm:h-[15px] sm:w-[15px] rounded-full inset-x-[540px] sm:inset-x-[250px] sm:inset-y-[125px] inset-y-[250px]"></div>
          <div className="absolute bg-[#977DF4] h-[15px] w-[15px] sm:h-[7px] sm:w-[7px] rounded-full inset-x-[550px] inset-y-[100px] sm:inset-x-[270px] sm:inset-y-[50px] "></div>
          <div className="absolute bg-[#977DF4] h-[15px] w-[15px] sm:h-[7px] sm:w-[7px] rounded-full inset-x-[20px] inset-y-[400px] sm:inset-x-[10px] sm:inset-y-[100px] "></div>
          <img
            className="absolute h-[668px] w-[571px] object-cover  sm:h-[410px] sm:w-[340px]"
            src={contact}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-[80px] py-[112px]">
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[#252B42] text-[14px] leading-6 font-bold text-center ">
            VISIT OUR OFFICE
          </h3>
          <p className="text-[#252B42] text-[40px] text-center font-bold leading-[50px]">
            We help small businesses with big ideas
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center ">
          <div className="flex flex-col items-center gap-[15px]  px-[40px] py-[50px] transition-transform hover:scale-[1.05] ">
            <Icon className="text-[72px] text-[#23A6F0]" icon="bx:phone" />
            <span className="text-[14px] text-[#252B42] leading-6 font-bold text-center ">
              georgia.young@example.com
            </span>
            <span className="text-[14px] text-[#252B42] leading-6 font-bold text-center ">
              georgia.young@example.com
            </span>
            <span className="text-[16px] text-[#252B42] leading-6 font-bold text-center ">
              Get Support
            </span>
            <button className="flex justify-center items-center border border-[#23A6F0] w-[189px] h-[54px] rounded-full">
              <span className="text-[#23A6F0] text-[14px] leading-6 font-bold text-center ">
                Submit Request
              </span>
            </button>
          </div>
          <div className="flex flex-col items-center gap-[15px]  px-[40px] py-[80px] bg-[#252B42] text-white transition-transform hover:scale-[1.05]">
            <Icon
              className="text-[72px] text-[#23A6F0]"
              icon="carbon:location-filled"
            />
            <span className="text-[14px] leading-6 font-bold text-center ">
              georgia.young@example.com
            </span>
            <span className="text-[14px] leading-6 font-bold text-center ">
              georgia.young@example.com
            </span>
            <span className="text-[16px]  leading-6 font-bold text-center ">
              Get Support
            </span>
            <button className="flex justify-center items-center border border-[#23A6F0] w-[189px] h-[54px] rounded-full">
              <span className="text-[#23A6F0] text-[14px] leading-6 font-bold text-center ">
                Submit Request
              </span>
            </button>
          </div>
          <div className="flex flex-col items-center gap-[15px]  px-[40px] py-[50px] transition-transform hover:scale-[1.05]">
            <Icon
              className="text-[72px] text-[#23A6F0]"
              icon="clarity:email-solid"
            />
            <span className="text-[14px] text-[#252B42] leading-6 font-bold text-center ">
              georgia.young@example.com
            </span>
            <span className="text-[14px] text-[#252B42] leading-6 font-bold text-center ">
              georgia.young@example.com
            </span>
            <span className="text-[16px] text-[#252B42] leading-6 font-bold text-center ">
              Get Support
            </span>
            <button className="flex justify-center items-center border border-[#23A6F0] w-[189px] h-[54px] rounded-full">
              <span className="text-[#23A6F0] text-[14px] leading-6 font-bold text-center ">
                Submit Request
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[16px]">
          <Icon
            className="text-[90px] text-[#23A6F0]"
            icon="akar-icons:arrow-back"
            rotate={1}
            hFlip={true}
          />
          <span className="text-[#252B42] text-base text-center font-bold">
            WE Can't WAIT TO MEET YOU
          </span>
          <span className="text-[58px] leading-[80px] font-bold">
            Let’s Talk
          </span>
          <button className="bg-[#23A6F0] hover:bg-light-blue-800 shadow-md rounded-sm text-white w-[186px] h-[52px] flex justify-center items-center">
            <span>Try it free now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
