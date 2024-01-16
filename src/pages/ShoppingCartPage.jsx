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
//Components
import Checkbox from "../components/Checkbox";

export default function ShoppingCartPage() {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.shopping);

  const orderTotal = cart.reduce((total, pro) => {
    return pro.checked ? total + pro.count * pro.product.price : total;
  }, 0);

  useEffect(() => {}, [orderTotal, cart]);

  return (
    <div className="flex flex-col items-center gap-5 p-10 bg-gray-100">
      <div className="flex justify-center bg-white  px-10 py-5 rounded shadow-md w-[90%] uppercase">
        <h3 className="text-2xl font-bold">
          My Cart ( {cart.length} products )
        </h3>
      </div>
      <div className="flex flex-wrap justify-center gap-10 w-full px-10">
        <div className="flex flex-col gap-5 ">
          {cart.map((car, index) => (
            <>
              <div
                key={index}
                className="flex flex-row justify-between items-center px-3 py-3  gap-2 bg-white rounded-md shadow-md "
              >
                <div>
                  <form>
                    <Checkbox checked={car.checked} id={car.product.id} />
                  </form>
                </div>
                <img
                  src={car.product.images[0].url}
                  className="w-[150px] h-[150px]  rounded shadow-lg object-cover object-top "
                  alt=""
                />

                <div className="flex flex-col justify-center w-[150px] ">
                  <span className="text-normal text-center font-bold">
                    {" "}
                    {car.product.name}{" "}
                  </span>
                  <div
                    title={car.product.description}
                    className="flex flex-col items-center justify-start h-[40px] px-1 overflow-hidden"
                  >
                    <span className="text-sm text-center">
                      {" "}
                      {car.product.description}{" "}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-5">
                  <div className="flex flex-row items-center  ">
                    <button
                      onClick={() => dispatch(increaseProduct(car.product.id))}
                      className="px-5 py-1 bg-blue-700 hover:bg-blue-400 rounded shadow  "
                    >
                      {" "}
                      <div className="flex justify-center items-center ">
                        <span className="text-white">+</span>{" "}
                      </div>
                    </button>
                    <div className="flex justify-center items-center border border-gray-300  px-4 py-1 ">
                      <span className="text-normal"> {car.count} </span>{" "}
                    </div>
                    <button
                      onClick={() => dispatch(decreaseProduct(car.product.id))}
                      className="px-5 py-1 bg-blue-700 hover:bg-blue-400 rounded shadow"
                    >
                      {" "}
                      <div className="flex justify-center items-center ">
                        <span className="text-white">-</span>{" "}
                      </div>
                    </button>
                  </div>
                  <div className="flex flex-row justify-center  w-[150px] ">
                    <span className="text-normal">
                      {" "}
                      ${(car.product.price * car.count).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex flex-row justify-center w-[150px]">
                    <button
                      className=" bg-blue-700  hover:bg-blue-400 px-5 py-2 rounded"
                      onClick={() => dispatch(deleteProduct(car.product.id))}
                    >
                      <Icon
                        icon="ri:delete-bin-line"
                        className="text-normal text-white  "
                      />
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="bg-white flex flex-col justify-center items-center p-5 gap-5 rounded-md shadow-md h-[400px] w-[300px]">
          <h4 className="text-center">
            {" "}
            <b> Order Summary </b>
          </h4>
          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-row justify-between ">
              <span> Order Total:</span> <span> ${orderTotal.toFixed(2)} </span>
            </div>
            <div className="flex flex-row justify-between ">
              <span>Tax:</span>
              <span>${(orderTotal * 0.1).toFixed(2)} </span>
            </div>
            <div className="flex flex-row justify-between ">
              <span>Shipping Cost:</span>
              <span>$25.00 </span>
            </div>
            <div class="relative w-full min-w-[200px] h-10">
              <input
                class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                placeholder=" "
              />
              <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                Discount Code
              </label>
            </div>
            <hr />
            <div className="flex flex-row justify-between ">
              {" "}
              <span>
                <b> Total: </b>
              </span>{" "}
              <span>
                {" "}
                <b> ${(orderTotal * 1.1).toFixed(2)}</b>{" "}
              </span>
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
