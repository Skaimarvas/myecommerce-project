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
    <div className="flex justify-center items-center bg-gray-100">
      OrdersPage
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
