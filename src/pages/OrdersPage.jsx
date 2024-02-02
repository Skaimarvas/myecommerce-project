import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../store/thunks/shoppingCartThunk";

export default function OrdersPage() {
  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store.shopping);
  console.log("ORDERS ", orders);
  /**NOTLAR:
   *
   */
  useEffect(() => {
    if (orders.length === 0) dispatch(getOrders());
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 gap-2 p-2">
      <div className="text-2xl font-bold flex flex-left w-full bg-white p-6 rounded-md shadow-sm border border-gray-300">
        {" "}
        <h2> My Orders ({orders.length}) </h2>{" "}
      </div>
      <div className="flex flex-col gap-6 p-5 justify-center items-center bg-white w-full rounded-md shadow-sm border border-gray-300">
        {orders &&
          orders.map((ord) => (
            <>
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-col gap-2">
                  <span className="font-bold">Order Date:</span>
                  <span>{ord.order_date.slice(0, 10)} </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-bold">Order Summary:</span>
                  <span> Total: 2 product(s) </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-bold">Order Total:</span>
                  <span> {ord.price} </span>
                </div>
                <button className=" px-4 py-2 bg-[#23A6F0] rounded shadow hover:bg-[#2d7ba8]">
                  <span className="text-white">Order Details</span>
                </button>
              </div>
              <hr className="w-full" />
            </>
          ))}
      </div>
    </div>
  );
}
