import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function ShoppingCart({ isVisible }) {
  const { cart } = useSelector((store) => store.shopping);
  const showScroll = cart.length > 3;
  return (
    <div className="flex flex-col  gap-2 py-2  bg-white text-black shadow-lg rounded px-3 border border-gray-600">
      <div className="flex justify-center items-center">
        {cart.length > 0 ? (
          <div className="flex items-left w-full">
            <span className="text-sm font-bold"> My Cart ({cart.length}) </span>
          </div>
        ) : (
          <div className="flex justify-center w-[200px]">
            <span className="text-center">
              {" "}
              You don't have any product in your cart{" "}
            </span>
          </div>
        )}
      </div>
      <div
        className={`flex flex-col gap-2  ${
          showScroll ? "overflow-y-auto max-h-96 h-[250px] " : ""
        } `}
      >
        {cart.map((car, index) => (
          <>
            <div key={index} className=" flex flex-row items-center gap-2 ">
              <div className="flex justify-center items-center w-[80px] h-[70px] border border-gray-400 rounded">
                <img
                  src={car.product.images[0].url}
                  className="w-[40px] h-[60px]  rounded  object-fit "
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2 py-1 w-[200px] ">
                <span
                  className="text-xs truncate font-bold "
                  title={car.product.name}
                >
                  {" "}
                  {car.product.name}{" "}
                </span>
                <div className="flex flex-row justify-between gap-5">
                  <span className="text-xs"> Qty: {car.count} </span>
                  <span className="text-xs text-[#23A6F0] font-bold">
                    {" "}
                    ${(car.product.price * car.count).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            <hr />
          </>
        ))}
      </div>
      <div className="flex flex-row">
        <NavLink to="/cart" className="w-full">
          <button className="border bg-blue-400 hover:bg-blue-700 px-2  py-2 rounded w-full">
            <span className="text-sm text-white">Go to Checkout</span>
          </button>
        </NavLink>
      </div>
    </div>
  );
}
