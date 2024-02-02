import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../store/thunks/userThunk";

export default function OrdersPage() {
  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store.userData);

  /**NOTLAR:
   *
   */
  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <div className="flex justify-center items-center bg-gray-100 p-2">
      <div className="text-2xl flex flex-left w-full bg-white p-2">
        {" "}
        <h2> My Orders </h2>{" "}
      </div>
      <div className="flex flex-col justify-center items-center ">
        {orders &&
          orders.map((ord) => (
            <div>
              <span> {ord.card_name} </span>{" "}
            </div>
          ))}
      </div>
    </div>
  );
}
