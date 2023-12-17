import React from "react";
//assets
import brand1 from "../assets/logos/fa-brands-1.png";
import brand2 from "../assets/logos/fa-brands-2.png";
import brand3 from "../assets/logos/fa-brands-3.png";
import brand4 from "../assets/logos/fa-brands-4.png";
import brand5 from "../assets/logos/fa-brands-5.png";
import brand6 from "../assets/logos/fa-brands-6.png";

export default function Brands() {
  return (
    <div className="flex justify-center w-full bg-[#FAFAFA] ">
      <div className="flex flex-wrap justify-around items-center py-[50px] w-4/5 sm:flex-col sm:gap-[60px] ">
        <img src={brand1} alt="" />
        <img src={brand2} alt="" />
        <img src={brand3} alt="" />
        <img src={brand4} alt="" />
        <img src={brand5} alt="" />
        <img src={brand6} alt="" />
      </div>
    </div>
  );
}
