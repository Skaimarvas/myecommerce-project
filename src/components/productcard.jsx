//Hooks
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//Actions
import { addProductToCart } from "../store/actions/shoppingCartActions";
//
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
export default function ProductCard(props) {
  const { description, name, price, images, product } = props;
  const dispatch = useDispatch();

  const addCart = (e) => {
    e.preventDefault();
    const cartProduct = {
      count: 1,
      checked: false,
      product,
    };
    dispatch(addProductToCart(cartProduct));
    toast.success("Ürün Sepete Eklendi");
  };

  return (
    <div className="flex flex-col sm:w-full w-[239px] shadow-lg transition-transform hover:scale-[1.05]">
      <img
        src={images[0].url}
        alt="bs image 1"
        className="h-[427px] w-full object-cover"
      />
      <div className="flex flex-col items-center gap-[10px] p-[25px]">
        <h5 className="text-center text-[#252B42] text-base font-bold ">
          {name}
        </h5>
        <h4 className="text-center text-[#737373] text-[14px] leading-6  font-bold ">
          {description}
        </h4>
        <div className="flex flex-row gap-[5px] px-[3px] py-[5px]">
          <span className="text-[#BDBDBD] text-center text-base font-bold ">
            ${price}
          </span>
          <span className="text-[#23856D] text-center text-base font-bold ">
            ${price}
          </span>
        </div>
        <div className="flex flex-row gap-[6.077px]">
          <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
          <div className="w-[16px] h-[16px] bg-[#23856D] rounded-full"></div>
          <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-full"></div>
          <div className="w-[16px] h-[16px] bg-[#252B42] rounded-full"></div>
        </div>
        <div className="flex flex-row gap-1">
          <button
            onClick={(e) => addCart(e)}
            className="py-2 px-2 bg-blue-400 hover:bg-blue-700 rounded-md shadow-lg"
          >
            <span className="text-white">Sepete Ekle</span>
          </button>
          <Link
            to={`/shopping/${product?.category_id}/${
              product?.id
            }/${product?.name.toLowerCase()}`}
          >
            <button
              onClick={(e) => preventDefault()}
              className="py-2 px-2 bg-blue-400 hover:bg-blue-700 rounded-md shadow-lg"
            >
              <span className="text-white">Ürünü İncele</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
