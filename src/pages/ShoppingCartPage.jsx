import React from "react";

//Icons
import { Icon } from "@iconify/react";
//Hooks
import { useSelector } from "react-redux";

export default function ShoppingCartPage() {
  const { cart } = useSelector((store) => store.shopping);
  return (
    <div className="flex flex-col items-center gap-5">
      <h3 className="text-2xl font-bold">My Cart ( 2 products )</h3>
      <div className="flex flex-wrap justify-center gap-10 w-full px-10">
        <div className="flex flex-col gap-2">
          {cart.map((car) => (
            <>
              <div
                key={car.product.id}
                className="blackborder flex flex-row justify-between items-center px-3 py-2  gap-2"
              >
                <div>
                  <form>
                    <label>
                      <input type="checkbox" />
                    </label>
                  </form>
                </div>
                <img
                  src={car.product.images[0].url}
                  className="w-[150px] h-[150px] border border-gray-600 rounded shadow-sm object-cover "
                  alt=""
                />

                <div className="w-[150px]">
                  <span className="text-[20px]"> {car.product.name} </span>
                </div>
                <div className="flex flex-row items-center gap-5">
                  <div className="flex flex-row items-center gap-2  ">
                    <button className="px-5 py-2 bg-blue-700 hover:bg-blue-400 rounded shadow  ">
                      {" "}
                      <span className="text-white">+</span>{" "}
                    </button>
                    <span className="text-[20px]"> Quantity: {car.count} </span>{" "}
                    <button className="px-5 py-2 bg-blue-700 hover:bg-blue-400 rounded shadow">
                      {" "}
                      <span className="text-white">-</span>{" "}
                    </button>
                  </div>
                  <div className="w-[150px]">
                    <span className="text-[20px] text-[#23A6F0] font-bold">
                      {" "}
                      ${(car.product.price * car.count).toFixed(2)}
                    </span>
                  </div>
                  <div className="w-[150px]">
                    <button>
                      <Icon icon="ri:delete-bin-line" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="blackborder flex flex-col">
          <h4 className="text-center">Order Summary</h4>

          <div className="flex flex-row">
            <span>Order Total:</span>
          </div>
          <div className="flex flex-row">
            <span>Tax:</span>
          </div>
          <div className="flex flex-row">
            {" "}
            <span>Total:</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
