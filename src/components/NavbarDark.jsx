import React from "react";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function NavbarDark() {
  return (
    <div className="flex  bg-[#252B42] h-[58px] justify-between justify-center items-center pt-[9px] pb-[3px] w-full text-white ">
      <div className="flex gap-[10px]">
        <div className="flex items-center p-[10px] gap-[5px]">
          <BsTelephone className="w-[16px] h-[16px]" />
          <span className="text-[14px] font-bold leading-6 tracking-[0.2px]">
            {" "}
            (225) 555-0118{" "}
          </span>
        </div>
        <div className="flex items-center p-[10px] gap-[5px]">
          <TfiEmail className="w-[16px] h-[16px] text-[14px] font-bold" />
          <span className="text-[14px] font-bold leading-6 tracking-[0.2px]">
            {" "}
            michelle.rivera@example.com{" "}
          </span>
        </div>
      </div>
      <div>
        <span className="text-[14px] font-bold leading-6 tracking-[0.2px]">
          Follow Us and get a chance to win 80% off
        </span>
      </div>
      <div className="flex items-center p-[10px] gap-[10px]">
        <div>
          <span className="text-[14px] font-bold leading-6 tracking-[0.2px]">
            Follow Us:{" "}
          </span>
        </div>
        <div className="flex gap-[5.5px] p-[5px]">
          <IoLogoInstagram className="w-[20px] h-[20px] " />
          <FaYoutube className="w-[20px] h-[20px] " />
          <FaFacebook className="w-[20px] h-[20px] " />
          <FaTwitter className="w-[20px] h-[20px] " />
        </div>
      </div>
    </div>
  );
}
