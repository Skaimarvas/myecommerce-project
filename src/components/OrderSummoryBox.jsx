import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Input from "../components/Input";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function OrderSummoryBox(props) {
  const { ordersHandler } = props;
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

  /**NOTLAR:
   * Link to="/payment" koymak çok mantıklı gelmedi. Başka bir yolu olabilir
   *
   *
   */

  return (
    <div className="flex flex-col justify-center items-center p-5 gap-5 rounded-md shadow-md h-[400px] w-[300px] bg-white sticky top-0 border border-gray-400">
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
        <div className="flex flex-row items-center gap-1">
          <Input
            label=" + Enter Your Discount Code"
            name="discount"
            setDiscount={setDiscount}
          />
          <button className="px-2 py-2 rounded shadow  bg-[#23A6F0] hover:bg-[#2d7ba8]">
            <span className="text-white">Apply</span>
          </button>
        </div>
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
      <Link className="w-full" to="/payment">
        <button
          onClick={ordersHandler}
          className=" px-4 py-2 w-full bg-[#23A6F0] rounded shadow hover:bg-[#2d7ba8] "
        >
          <span className="text-white">Chect Out</span>
        </button>
      </Link>
    </div>
  );
}
