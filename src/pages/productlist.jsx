import React from "react";
import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import ShopCard from "../components/ShopCard";

export default function ProductList() {
  return (
    <div className="tracking-wider">
      <div className="flex justify-center py-[24px]">
        <div className="flex flex-wrap justify-between items-center w-4/5 bg-[#FAFAFA]">
          <div>
            <h3 className="text-[#252B42] text-2xl font-bold">Shop</h3>
          </div>
          <div className="flex flex-row gap-[15px] items-center py-[15px] ">
            <Link to="/">
              {" "}
              <span className="text-[#252B42] text-base font-bold">
                Home
              </span>{" "}
            </Link>
            <MdNavigateNext className="text-[25px] text-[#BDBDBD]" />
            <span className="text-[#BDBDBD] text-base font-bold text-center">
              Shop
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-[15px] w-4/5">
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </div>
    </div>
  );
}
