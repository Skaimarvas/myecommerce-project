import React from "react";
//Assets
import teamuser from "../assets/teamuser.jpeg";
//Icons
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function TeamCard() {
  return (
    <div className="flex flex-col items-center w-[316px] shadow-md">
      <img
        className="w-[316px] h-[231px] object-cover"
        src={teamuser}
        alt="team user"
      />
      <div className="flex flex-col items-center gap-[10px] p-[30px]">
        <h5 className="text-[#252B42] text-[16px] leading-6 font-bold">
          Username
        </h5>
        <span className="text-[#737373] text-[14px] leading-6 font-bold">
          Profession
        </span>
        <div className="flex flex-row gap-[20px] text-[#23A6F0] text-[24px]">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
}
