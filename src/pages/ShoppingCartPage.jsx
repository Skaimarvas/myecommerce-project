//Actions
import {
  decreaseProduct,
  deleteProduct,
  increaseProduct,
} from "../store/actions/shoppingCartActions";
//Icons
import { Icon } from "@iconify/react";
import free from "../assets/productcard/free.png";
//Hooks
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
//Components
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function ShoppingCartPage() {
  const [discount, setDiscount] = useState();
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.shopping);
  const orderTotal = cart.reduce((total, pro) => {
    return pro.checked ? total + pro.count * pro.product.price : total;
  }, 0);
  const applyDiscount = discount === "CART10" ? 0.9 : 1;
  const totalViaShipment =
    orderTotal > 100
      ? (orderTotal * 1.1 * applyDiscount - 25).toFixed(2)
      : (orderTotal * 1.1 * applyDiscount + 25).toFixed(2);

  useEffect(() => {}, [orderTotal]);

  return (
    <div className="flex items-center p-2 bg-gray-100 w-full">
      <div className="flex flex-wrap justify-center gap-5 w-full ">
        <div className="flex flex-col gap-5 ">
          <div className="flex justify-between bg-white  px-10 py-5 rounded shadow-md  ">
            <h3 className="text-2xl font-bold uppercase">
              My Cart ({cart.length})
            </h3>
            <div className="flex flex-row justify-between items-center gap-2">
              <span className="text-sm">
                Free shipping on orders over $100!
              </span>
              <img src={free} alt="" className="w-10 h-10" />
            </div>
          </div>
          {cart.map((car, index) => (
            <>
              <div
                key={index}
                className="flex flex-wrap justify-between items-center px-3 py-3  gap-2 bg-white rounded-md shadow-md "
              >
                <div>
                  <form>
                    <Checkbox checked={car.checked} id={car.product.id} />
                  </form>
                </div>
                <img
                  src={car.product.images[0].url}
                  className="w-[150px] h-[150px]  rounded border border-gray-600 object-cover object-top "
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
                      onClick={() => dispatch(decreaseProduct(car.product.id))}
                      className="px-5 py-1 bg-blue-700 hover:bg-blue-400 rounded shadow  "
                    >
                      {" "}
                      <div className="flex justify-center items-center ">
                        <span className="text-white">-</span>{" "}
                      </div>
                    </button>
                    <div className="flex justify-center items-center border border-gray-300  px-4 py-1 ">
                      <span className="text-normal"> {car.count} </span>{" "}
                    </div>
                    <button
                      onClick={() => dispatch(increaseProduct(car.product.id))}
                      className="px-5 py-1 bg-blue-700 hover:bg-blue-400 rounded shadow"
                    >
                      {" "}
                      <div className="flex justify-center items-center ">
                        <span className="text-white">+</span>{" "}
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

            {orderTotal < 100 ? (
              <div className="flex flex-row justify-between ">
                <span>Shipping Cost:</span>
                <span>$25.00 </span>{" "}
              </div>
            ) : (
              <div className="flex flex-row justify-between line-through ">
                <span>Shipping Cost:</span>
                <span>$25.00 </span>{" "}
              </div>
            )}

            <Input
              label=" + Enter Your Discount Code"
              setDiscount={setDiscount}
            />
            <hr />
            <div className="flex flex-row justify-between ">
              {" "}
              <span>
                <b> Total(Including VAT): </b>
              </span>{" "}
              <span>
                {" "}
                <b> ${totalViaShipment}</b>{" "}
              </span>
            </div>
          </div>
          <Link to="/adress">
            <button className=" px-4 py-2 w-full bg-[#23A6F0] rounded shadow hover:bg-[#2d7ba8] ">
              <span className="text-white">Chect Out</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
