import React from "react";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function NavbarDark() {
  return (
    <div className="xl:hidden  flex flex-wrap justify-between items-center bg-[#252B42]  px-[24px] text-white tracking-wider">
      <div className="flex flex-wrap gap-[10px] py-2">
        <div className="flex flex-wrap items-center p-[10px] gap-[5px]">
          <BsTelephone className="text-[22px]" />
          <span className="ont-bold leading-6 "> (225) 555-0118 </span>
        </div>
        <div className="flex items-center p-[10px] gap-[5px]">
          <TfiEmail className=" font-bold" />
          <span className="text-[16px] font-bold leading-6 ">
            {" "}
            michelle.rivera@example.com{" "}
          </span>
        </div>
      </div>
      <div className="py-2">
        <span className="text-[16px] text-center font-bold leading-6 ">
          Follow Us and get a chance to win 80% off
        </span>
      </div>
      <div className="flex items-center p-[10px] gap-[10px]">
        <div>
          <span className="text-[16px] font-bold leading-6 ">Follow Us: </span>
        </div>
        <div className="flex gap-[5.5px] p-[5px]">
          <div className="p-[5px]">
            <IoLogoInstagram className="w-[18px] h-[18px] " />
          </div>
          <div className="p-[5px]">
            <FaYoutube className="w-[18px] h-[18px] " />
          </div>
          <div className="p-[5px]">
            <FaFacebook className="w-[18px] h-[18px] " />
          </div>
          <div className="p-[5px]">
            <FaTwitter className="w-[18px] h-[18px] " />
          </div>
        </div>
      </div>
    </div>
  );
}
