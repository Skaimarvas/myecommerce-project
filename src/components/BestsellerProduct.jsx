import React from "react";
import ProductCard from "./productcard";

export default function BestsellerProduct() {
  return (
    <div className="flex flex-col items-center justify-center gap-[80px] py-[80px] tracking-wider ">
      <div className="flex flex-col items-center gap-[10px]">
        <h4 className="text-[20px] text-[#737373] leading-[30px] ">
          Featured Products
        </h4>
        <h3 className="text-2xl text-[#252B42] font-bold ">
          BESTSELLER PRODUCTS
        </h3>
        <p className="text-sm text-[#737373] ">
          Problems trying to resolve the conflict between
        </p>
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
      </div>
    </div>
  );
}
