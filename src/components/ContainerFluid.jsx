import React from "react";
import fluid from "../assets/fluid.png";
import fluid1 from "../assets/fluid1.png";

export default function ContainerFluid() {
  return (
    <div className="flex flex-wrap gap-[30px] justify-center items-center tracking-wider">
      <div>
        <img
          src={fluid1}
          alt="image 1 "
          className="w-[600px] h-[600px] object-cover object-center "
        />
      </div>
      <div className=" flex flex-col text-left gap-[35px] max-w-[509px]">
        <h5 className="font-bold text-[#BDBDBD] text-base ">SUMMER 2020</h5>
        <h2 className="text-[40px] text-[#252B42] font-bold leading-[50px] ">
          {" "}
          Part of the Neural Universe{" "}
        </h2>
        <h5 className="text-[20px] text-[#737373] leading-[30px] ">
          We know how large objects will act, but things on a small scale.
        </h5>
        <div className="flex flex-wrap items-center gap-[10px]">
          <button className="bg-[#2DC071] hover:bg-[#25a15f] shadow-lg rounded-md py-[15px] px-[40px] max-w-[221px]">
            <span className="text-[14px] text-white text-center leading-[22px] font-bold ">
              ADD TO CART
            </span>
          </button>
          <button className="border border-[#2DC071] hover:bg-[#25a15f] text-[#2DC071] hover:text-white   shadow-lg rounded-md py-[15px] px-[40px] max-w-[221px]">
            <span className="text-[14px]  text-center leading-[22px] font-bold ">
              READ MORE
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
