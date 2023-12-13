import React from "react";
import { Link } from "react-router-dom";
//components
import ShopCard from "../components/ShopCard";
import ProductCard from "../components/productcard";
//Icons
import { MdNavigateNext } from "react-icons/md";
import { PiSquaresFourFill } from "react-icons/pi";
import { PiListChecksThin } from "react-icons/pi";
import Brands from "../components/Brands";

export default function ProductList() {
  return (
    <div className="flex flex-col items-center tracking-wider  ">
      <div className="flex flex-col items-center w-full bg-[#FAFAFA]">
        <div className="flex flex-wrap justify-between items-center w-4/5  py-[24px]">
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

        <div className="flex flex-wrap justify-around  w-4/5 pb-[48px]">
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center w-4/5">
        <div>
          <span className="text-[#737373] text-[14px] leading-6 font-bold">
            Showing all 12 results
          </span>
        </div>
        <div className="flex flex-row items-center gap-[15px]">
          <span className="text-[#737373] text-[14px] leading-6 font-bold">
            Views:
          </span>
          <button className="p-[15px]">
            <PiSquaresFourFill className="text-2xl text-[#252B42]" />
          </button>
          <button className="p-[15px]">
            <PiListChecksThin className="text-2xl text-[#737373]" />
          </button>
        </div>
        <div className="py-[40px]">
          <form className="flex flex-row gap-[15px]">
            <label>
              <select
                name="filter"
                id="filteroption"
                defaultValue="Popularity"
                className="flex  w-[141px] h-[50px] rounded-md bg-[#F9F9F9] px-[10px]"
              >
                <option value="Price">Price</option>
                <option value="Popularity">Popularity</option>
                <option value="Comments">Comments</option>
              </select>
            </label>
            <button
              className="w-[91px] h-[50px] bg-[#23A6F0] py-[10px] px-[20px] rounded-md"
              type="Submit"
              onClick={(e) => e.preventDefault()}
            >
              <span className="text-white text-center text-[14px] leading-6 tracking-wider">
                Filter
              </span>
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-[30px] w-4/5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="py-[40px] tracking-wider">
        <button className="border border-[#BDBDBD] bg-[#F3F3F3] p-[25px] rounded-l-sm">
          {" "}
          <span className="text-[#BDBDBD] text-[14px] text-center leading-6 ">
            First
          </span>{" "}
        </button>
        <button className="border border-[#E9E9E9] py-[25px] px-[20px]">
          <span className="text-[14px] text-[#23A6F0] text-center font-bold leading-6">
            1
          </span>
        </button>
        <button className="border border-[#E9E9E9] py-[25px] px-[20px] bg-[#23A6F0] ">
          <span className="text-[14px] text-white text-center font-bold leading-6">
            2
          </span>
        </button>
        <button className="border border-[#E9E9E9] py-[25px] px-[20px]">
          <span className="text-[14px] text-[#23A6F0] text-center font-bold leading-6">
            3
          </span>
        </button>
        <button className="border border-[#E9E9E9] p-[25px] rounded-r-sm">
          <span className="text-[14px] text-[#23A6F0] text-center font-bold leading-6">
            Next
          </span>
        </button>
      </div>
      <Brands />
    </div>
  );
}
