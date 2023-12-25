import React from "react";
//Hooks
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function NavbarMenu(props) {
  return (
    <nav>
      <ul className="flex flex-wrap sm:flex-col text-[18px] sm:text-[30px] font-bold sm:font-normal text-[#737373] leading-6 sm:leading-[45px] justify-center items-center gap-[15px] py-3 sm:py-[98px]">
        {" "}
        {props.children}{" "}
      </ul>
    </nav>
  );
}
