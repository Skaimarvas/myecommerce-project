import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
//Icons
import { MdNavigateNext } from "react-icons/md";
//Assets
import model1 from "../assets/model1.jpeg";
import model2 from "../assets/model2.jpeg";
import model3 from "../assets/model3.jpeg";
import model4 from "../assets/model4.jpeg";
import model5 from "../assets/model5.jpeg";
//Components
import TeamCard from "../components/TeamCard";

export default function Team() {
  return (
    <div className="flex flex-col items-center tracking-wider">
      <div className="flex flex-col justify-center items-center py-[50px]">
        <h5 className="text-base font-bold text-center text-[#737373]">
          WHAT WE DO
        </h5>
        <h3 className="text-[#252B42] text-[58px] leading-[80px] font-bold text-center">
          Innovation tailored for you
        </h3>
        <div className="flex flex-row gap-[15px] items-center py-[15px] ">
          <Link to="/">
            {" "}
            <span className="text-[#252B42] text-base font-bold">
              Home
            </span>{" "}
          </Link>
          <MdNavigateNext className="text-[25px] text-[#BDBDBD]" />
          <span className="text-[#BDBDBD] text-base font-bold text-center">
            Team
          </span>
        </div>
      </div>
      <div className="flex flex-wrap   justify-center gap-[20px] w-full ">
        <div>
          <img
            className="h-[530px] w-[700px] object-cover"
            src={model1}
            alt="model 1"
          />
        </div>
        <div className="flex flex-col justify-between sm:flex-row sm:gap-1">
          <img
            className="h-[260px] w-[361px] sm:w-1/2 object-cover"
            src={model2}
            alt="model 1"
          />
          <img
            className="h-[260px] w-[361px] sm:w-1/2 object-cover"
            src={model3}
            alt="model 1"
          />
        </div>
        <div className="flex flex-col justify-between sm:flex-row sm:gap-1">
          <img
            className="h-[260px] w-[361px] sm:w-1/2  object-cover"
            src={model4}
            alt="model 1"
          />
          <img
            className="h-[260px] w-[361px] sm:w-1/2  object-cover"
            src={model5}
            alt="model 1"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-[112px] py-[112px] ">
        <h2 className="text-[#252B42] text-center text-[40px] font-bold leading-[50px]">
          Meet Our Team
        </h2>
        <div className="flex flex-wrap justify-center gap-[30px] w-4/5">
          <div className="py-[56px]">
            {" "}
            <TeamCard />{" "}
          </div>
          <div className="py-[56px]">
            {" "}
            <TeamCard />{" "}
          </div>
          <div className="py-[56px]">
            {" "}
            <TeamCard />{" "}
          </div>
          <div className="py-[56px]">
            {" "}
            <TeamCard />{" "}
          </div>
          <div className="py-[56px]">
            {" "}
            <TeamCard />{" "}
          </div>
          <div className="py-[56px]">
            {" "}
            <TeamCard />{" "}
          </div>
          <div className="py-[56px]">
            {" "}
            <TeamCard />{" "}
          </div>
          <div className="py-[56px]">
            {" "}
            <TeamCard />{" "}
          </div>
          <div className="py-[56px]">
            {" "}
            <TeamCard />{" "}
          </div>
        </div>
        <div className="flex flex-col items-center gap-[30px] py-[80px] max-w-[547px]">
          <h2 className="text-[#252B42] text-center text-[40px] font-bold leading-[50px]">
            Start your 14 days free trial
          </h2>
          <p className="text-[#737373] text-center text-[14px] leading-5">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent.
          </p>
          <button className="bg-[#23A6F0] hover:bg-[#1c96dd] shadow-lg rounded-md py-[15px] px-[40px] max-w-[221px]">
            <span className="text-[14px] leading-[22px] text-white font-bold ">
              Try it free now
            </span>
          </button>
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
      </div>
    </div>
  );
}
