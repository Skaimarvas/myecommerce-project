import React from "react";
import vector from "../assets/Vector.png";
import { Icon } from "@iconify/react";
import { FaRegUser } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavbarLight() {
  return (
    <div className="flex flex-wrap  justify-between  md:justify-center items-center sm:flex-col tracking-wider px-[10px] ">
      <div className="sm:w-full sm:flex justify-around items-center">
        <div className="flex py-[13px] pr-[79px]  ">
          <span className="text-2xl text-center text-[#252B42] font-bold ">
            Bandage
          </span>
        </div>

        <Icon
          className="sm:block hidden text-[30px]"
          icon="material-symbols:search"
        />
        <Icon className="sm:block hidden text-[30px]" icon="mdi:cart-outline" />
        <Icon className="sm:block hidden text-[30px]" icon="typcn:th-menu" />
      </div>

      <ul className="flex flex-wrap sm:flex-col text-[18px] sm:text-[30px] font-bold sm:font-normal text-[#737373] leading-6 sm:leading-[45px] justify-center items-center gap-[15px] py-3 sm:py-[98px]">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="flex  items-center gap-[9px] pl-[6px]  font-medium sm:font-normal text-[#252B42] sm:text-[#737373] leading-7 ">
          <Link to="/productlist"> Shop</Link>
          <button className="sm:hidden">
            {" "}
            <img src={vector} alt="" />{" "}
          </button>
        </li>
        <li>
          {" "}
          <Link to="/about">About</Link>
        </li>
        <li>Blog</li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="flex items-center text-[#23A6F0] sm:hidden">
        <Link to="/signup">
          <div className=" flex text-base p-[15px] items-center gap-[5px] font-bold  ">
            <FaRegUser />
            <span>Login / Register</span>
          </div>
        </Link>
        <div className="p-[15px]">
          <BsSearch className="text-[20px]" />
        </div>
        <div className="p-[15px]">
          {" "}
          <div className="flex items-center gap-[5px]">
            <BsCart className="text-[20px]" /> <span>1</span>{" "}
          </div>
        </div>
        <div className="p-[15px]">
          <div className="flex items-center gap-[5px]">
            <FaRegHeart className="text-[20px]" />
            <span>1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
