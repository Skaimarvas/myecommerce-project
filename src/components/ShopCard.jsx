import React from "react";
import shopcard1 from "../assets/shopcard1.jpeg";

export default function ShopCard() {
  return (
    <div className="relative shadow-md">
      <img
        src={shopcard1}
        alt="image 1"
        className=" w-[206px] h-[223px] object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center  text-white gap-[9.5px]">
        <h5 className="text-center text-base font-bold">CLOTHS</h5>
        <span className="text-[14px] leading-5">5 Items</span>
      </div>
    </div>
  );
}
