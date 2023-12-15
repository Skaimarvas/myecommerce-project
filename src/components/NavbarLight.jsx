import React from "react";
import vector from "../assets/Vector.png";
import { FaRegUser } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavbarLight() {
  return (
    <div className="flex flex-wrap justify-between items-center tracking-wider ">
      <div className="flex items-center justify-center basis-1/6 ">
        <span className="text-2xl text-center text-[#252B42] font-bold ">
          BrandName
        </span>
      </div>
      <div className="flex flex-wrap  justify-between items-center basis-5/6">
        <ul className="flex flex-wrap font-bold text-[#737373] leading-6 justify-center items-center gap-[15px] py-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="flex  items-center gap-[9px] pl-[6px]  font-medium text-[#252B42] leading-7 ">
            <Link to="/productlist">Shop</Link>
            <button>
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
          <li>Pages</li>
        </ul>

        <div className="flex items-center text-[#23A6F0]">
          <div className="flex text-base p-[15px] items-center gap-[5px] font-bold  ">
            <FaRegUser />
            <span>Login / Register</span>
          </div>
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
    </div>
  );
}
