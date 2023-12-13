import React from "react";
//assets
import brand1 from "../assets/logos/fa-brands-1.png";
import brand2 from "../assets/logos/fa-brands-2.png";
import brand3 from "../assets/logos/fa-brands-3.png";
import brand4 from "../assets/logos/fa-brands-4.png";
import brand5 from "../assets/logos/fa-brands-5.png";
import brand6 from "../assets/logos/fa-brands-6.svg";

export default function Brands() {
  return (
    <div className="flex flex-col items-center w-full bg-[#FAFAFA] py-[50px]">
      <div className="flex flex-wrap justify-around items-center  w-4/5 ">
        <img src={brand1} alt="" />
        <img src={brand2} alt="" className="" />
        <img src={brand3} alt="" className="" />
        <img src={brand4} alt="" className="" />
        <img src={brand5} alt="" className="" />
        <img src={brand6} alt="" className="" />
      </div>
    </div>
  );
}
