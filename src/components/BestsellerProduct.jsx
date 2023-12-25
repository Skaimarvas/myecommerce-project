import React from "react";
import ProductCard from "./productcard";
import { useSelector } from "react-redux";

export default function BestsellerProduct() {
  const { productlist } = useSelector((store) => store.product);

  const descendingProduct = [...productlist].sort(
    (a, b) => b.rating - a.rating
  );
  const firstFiveProduct = descendingProduct.slice(0, 8);
  return (
    <div className="flex flex-col items-center justify-center gap-[80px] py-[80px] tracking-wider ">
      <div className="flex flex-col items-center gap-[10px] sm:px-[40px]">
        <h4 className="text-[20px] text-[#737373] leading-[30px] ">
          Featured Products
        </h4>
        <h3 className="text-2xl text-[#252B42] font-bold text-center ">
          BESTSELLER PRODUCTS
        </h3>
        <p className="text-sm text-[#737373] text-center ">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex flex-wrap  justify-center gap-[30px] w-4/5 sm:w-full sm:px-[10px]">
        {firstFiveProduct?.map((pro, index) => (
          <ProductCard
            key={index}
            name={pro.name}
            description={pro.description}
            images={pro.images}
            price={pro.price}
          />
        ))}
      </div>
    </div>
  );
}
