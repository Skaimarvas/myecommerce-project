import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "../store/thunks/userThunk";

export default function DeliveryAddress() {
  const dispatch = useDispatch();
  const { address } = useSelector((store) => store.userData);
  useEffect(() => {
    dispatch(getAddress());
  }, []);
  console.log(address);
  return (
    <div className="flex flex-col items-start gap-5">
      <h3 className="text-2xl font-bold">Delivery Address</h3>
      <button className="flex flex-col items-center bg-gray-200 hover:bg-gray-100 border border-gray-300 p-5 rounded-md">
        <span className="text-2xl font-bold text-light-blue-800">+</span>
        <span>Add New Address</span>
      </button>
      <form className="flex flex-col   gap-5">
        {address &&
          address.map((add) => (
            <>
              {" "}
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <div className="flex flex-row" key={add.id}>
                    <div className="flex w-full">
                      <input type="radio" id="title" />
                      <label htmlFor="title"> {add.title} </label>
                    </div>
                    <div className="flex">
                      {" "}
                      <span> {add.phone} </span>{" "}
                    </div>
                  </div>
                </div>
                <div>
                  <p>
                    {" "}
                    {add.neighborhood +
                      " " +
                      add.district +
                      " " +
                      add.city +
                      " " +
                      add.address}{" "}
                  </p>
                </div>{" "}
              </div>
            </>
          ))}
      </form>
    </div>
  );
}
