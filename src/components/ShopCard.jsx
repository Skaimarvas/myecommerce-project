import React from "react";
import shopcard1 from "../assets/shopcard1.jpeg";

export default function ShopCard(props) {
  const { img, title, gender } = props;
  return (
    <div className="relative shadow-lg transition-transform hover:scale-[1.05]">
      <img
        src={img}
        alt="image 1"
        className=" w-[206px] h-[223px] sm:w-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center  text-white gap-[9.5px]">
        <h5 className="text-center text-base font-bold uppercase"> {title} </h5>
        <span className="text-[14px] leading-5 uppercase">
          {" "}
          {gender === "k" ? "kadın" : "erkek"}{" "}
        </span>
      </div>
    </div>
  );
}
