import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "../store/thunks/userThunk";
import OrderSummoryBox from "./OrderSummoryBox";
import PaymentOptionsTitle from "./PaymentOptionsTitle";
import Address from "./Address";
import Radio from "./Radio";
//Icons
import { Icon } from "@iconify/react";
import Checkbox from "./Checkbox";

export default function PaymentOptions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [option, setOption] = useState(true);

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const dispatch = useDispatch();
  const { address } = useSelector((store) => store.userData);
  useEffect(() => {
    if (address.length === 0) {
      dispatch(getAddress());
    }
  }, []);
  console.log("PAYMENTOPTIONS", address);
  return (
    <div className="flex flex-wrap justify-center gap-5 bg-gray-100 p-2   w-full">
      <div className="flex flex-col items-start gap-5  w-3/5">
        <PaymentOptionsTitle open={option} setOpen={setOption} />
        <div className="bg-white rounded-md shadow-md">
          <div className="flex flex-wrap justify-between px-5 py-4 w-full">
            <div>
              <h3 className="text-2xl font-bold">Delivery Address</h3>
            </div>
            <div className="flex flex-row items-center">
              {" "}
              <Checkbox /> <span>Send My Invoice to the Same Address</span>{" "}
            </div>
          </div>
          <hr />
          <form className="flex flex-wrap  justify-start px-5 py-8  gap-5">
            <div className="flex items-end">
              <button
                onClick={(e) => openModal(e)}
                className="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-100 border border-gray-300 p-8 rounded-md w-[400px]"
              >
                <span className="text-2xl font-bold text-light-blue-800">
                  +
                </span>
                <span>Add New Address</span>
              </button>
            </div>
            {address &&
              address.map((add, index) => (
                <>
                  {" "}
                  <div key={index} className="flex flex-col gap-2 w-[400px]">
                    <div className="flex flex-row justify-between items-center">
                      <Radio label={add.title} id={add.id} />

                      <div className="flex">
                        <button className="hover:underline">
                          <span className="text-sm"> Edit </span>{" "}
                        </button>
                      </div>
                    </div>
                    <label
                      className="cursor-pointer"
                      htmlFor={`radio-${add.id}`}
                    >
                      <div className="flex flex-col border border-gray-500 bg-gray-100 p-3 rounded-md font-bold gap-4 ">
                        <div className="flex flex-row justify-between font-normal text-gray-800 text-sm ">
                          <div className="flex items-center gap-1">
                            <Icon icon="iconamoon:profile-fill" />
                            <span> {add.name + " " + add.surname} </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon icon="gridicons:phone" />
                            <span> {add.phone} </span>
                          </div>
                        </div>
                        <div>
                          <p
                            className=" truncate"
                            title={
                              add.address +
                              " " +
                              add.neighborhood +
                              " " +
                              add.district +
                              "/" +
                              add.city
                            }
                          >
                            {" "}
                            {add.address +
                              " " +
                              add.neighborhood +
                              " " +
                              add.district +
                              "/" +
                              add.city}{" "}
                          </p>
                        </div>
                        <div>
                          <span> {add.district + "/" + add.city} </span>
                        </div>
                      </div>{" "}
                    </label>
                  </div>
                </>
              ))}
          </form>
        </div>
      </div>
      <OrderSummoryBox />
      <Address isOpen={isModalOpen} setClose={closeModal} />
    </div>
  );
}