import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../components/Input";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function OrderSummoryBox() {
  const [discount, setDiscount] = useState();
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
    <div className="flex flex-col justify-center items-center p-5 gap-5 rounded-md shadow-md h-[400px] w-[300px] bg-white">
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

        <Input label=" + Enter Your Discount Code" setDiscount={setDiscount} />
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
      <Link to="/payment">
        <button className=" px-4 py-2 w-full bg-[#23A6F0] rounded shadow hover:bg-[#2d7ba8] ">
          <span className="text-white">Chect Out</span>
        </button>
      </Link>
    </div>
  );
}