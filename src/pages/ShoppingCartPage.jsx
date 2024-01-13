//Actions
import {
  checkedProduct,
  addProductToCart,
  decreaseProduct,
  deleteProduct,
  increaseProduct,
} from "../store/actions/shoppingCartActions";
//Icons
import { Icon } from "@iconify/react";
//Hooks
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

export default function ShoppingCartPage() {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.shopping);

  const orderTotal = cart.reduce((total, pro) => {
    return pro.checked ? total + pro.count * pro.product.price : total;
  }, 0);

  useEffect(() => {}, [orderTotal]);

  return (
    <div className="flex flex-col items-center gap-5 p-10 bg-gray-100">
      <h3 className="text-2xl font-bold">My Cart ( {cart.length} products )</h3>
      <div className="flex flex-wrap justify-center gap-10 w-full px-10">
        <div className="flex flex-col gap-2 ">
          {cart.map((car, index) => (
            <>
              <div
                key={index}
                className="flex flex-row justify-between items-center px-3 py-2  gap-2 bg-white rounded-md shadow-md border-blue-900 border"
              >
                <div>
                  <form>
                    <label>
                      <input
                        type="checkbox"
                        onClick={() => {
                          dispatch(checkedProduct(car.product.id));
                        }}
                      />
                    </label>
                  </form>
                </div>
                <img
                  src={car.product.images[0].url}
                  className="w-[150px] h-[150px] border border-gray-600 rounded shadow-sm object-cover "
                  alt=""
                />

                <div className="flex flex-row justify-center w-[150px]">
                  <span className="text-[20px] text-center">
                    {" "}
                    {car.product.name}{" "}
                  </span>
                </div>
                <div className="flex flex-row items-center gap-5">
                  <div className="flex flex-row items-center gap-2  ">
                    <button
                      onClick={() => dispatch(increaseProduct(car.product.id))}
                      className="px-5 py-2 bg-blue-700 hover:bg-blue-400 rounded shadow  "
                    >
                      {" "}
                      <span className="text-white">+</span>{" "}
                    </button>
                    <span className="text-[20px]"> Quantity: {car.count} </span>{" "}
                    <button
                      onClick={() => dispatch(decreaseProduct(car.product.id))}
                      className="px-5 py-2 bg-blue-700 hover:bg-blue-400 rounded shadow"
                    >
                      {" "}
                      <span className="text-white">-</span>{" "}
                    </button>
                  </div>
                  <div className="flex flex-row justify-center  w-[150px] ">
                    <span className="text-[20px] text-[#23A6F0] font-bold">
                      {" "}
                      ${(car.product.price * car.count).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex flex-row justify-center w-[150px]">
                    <button
                      onClick={() => dispatch(deleteProduct(car.product.id))}
                    >
                      <Icon icon="ri:delete-bin-line" className="text-[30px]" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="bg-white flex flex-col justify-center items-center p-5 gap-5 rounded-md shadow-md h-[300px] w-[300px]">
          <h4 className="text-center">
            {" "}
            <b> Order Summary </b>
          </h4>
          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-row justify-between ">
              <span>
                {" "}
                <b> Order Total: </b>
              </span>{" "}
              <span> ${orderTotal.toFixed(2)} </span>
            </div>
            <div className="flex flex-row justify-between ">
              <span>
                <b> Tax: </b>
              </span>
              <span>${(orderTotal * 0.1).toFixed(2)} </span>
            </div>
            <div className="flex flex-row justify-between ">
              <span>
                <b> Shipping Cost: </b>
              </span>
              <span>$25.00 </span>
            </div>
            <div className="flex flex-row justify-between ">
              {" "}
              <span>
                <b> Total: </b>
              </span>{" "}
              <span> ${(orderTotal * 1.1).toFixed(2)} </span>
            </div>
          </div>
          <button className=" px-4 py-2 w-full bg-[#23A6F0] rounded shadow hover:bg-[#2d7ba8] ">
            <span className="text-white">Confirm Order</span>
          </button>
        </div>
      </div>
    </div>
  );
}
