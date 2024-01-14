import React from "react";
//Icons
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";

export default function RatingStar(props) {
  const { rating } = props;
  const fullStar = Math.floor(rating);
  const halfStar = rating % 1 !== 0 ? <FaRegStarHalfStroke /> : "";
  const fullStarArray = Array.from({ length: fullStar }, (_, index) => (
    <FaStar key={index} />
  ));
  const emptyStarArray = Array.from(
    { length: 5 - fullStar - (halfStar ? 1 : 0) },
    (_, index) => <FaRegStar key={index} />
  );
  return (
    <div className="flex flex-row text-[#ffd700] gap-[5px] ">
      {fullStarArray}
      {halfStar}
      {emptyStarArray}
    </div>
  );
}
