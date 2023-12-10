import React from "react";
import vector from "../assets/Vector.png";
import { FaRegUser } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

export default function NavbarLight() {
  return (
    <div className="flex justify-between pl-[38px] pr-[17px] gap-[40px]">
      <div className="flex items-center py-[13px] pr-[42px]">
        <span className="text-2xl text-[#252B42] font-bold tracking-[0.1px]">
          BrandName
        </span>
      </div>
      <div className="flex justify-center items-center gap-[471px]  ">
        <div className="flex">
          <ul className="flex  text-[16px] font-bold text-[#737373] leading-6 justify-center items-center gap-[15px]">
            <li>Home</li>
            <li className="flex  items-center gap-[9px] pl-[6px]  font-medium text-[#252B42] leading-7 tracking-[0.2px]">
              Shop
              <button>
                {" "}
                <img src={vector} alt="" />{" "}
              </button>
            </li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Pages</li>
          </ul>
        </div>
        <div className="flex items-center text-[#23A6F0]">
          <div className="flex text-base p-[15px] items-center gap-[5px] font-bold tracking-[0.2px] ">
            <FaRegUser />
            <span>Login / Register</span>
          </div>
          <div className="p-[15px]">
            <BsSearch className="w-[20px] h-[20px]" />
          </div>
          <div className="p-[15px]">
            {" "}
            <div className="flex items-center gap-[5px]">
              <BsCart className="w-[20px] h-[20px]" /> <span>1</span>{" "}
            </div>
          </div>
          <div className="p-[15px]">
            <div className="flex items-center gap-[5px]">
              <FaRegHeart className="w-[20px] h-[20px]" />
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
