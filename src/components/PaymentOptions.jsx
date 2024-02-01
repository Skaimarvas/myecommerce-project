import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

//Thunk
import { getAddress, postOrders } from "../store/thunks/shoppingCartThunk";
//Icons
import { Icon } from "@iconify/react";
//Components
import Checkbox from "./Checkbox";
import Payment from "./Payment";
import Radio from "./Radio";
import Address from "./Address";
import OrderSummoryBox from "./OrderSummoryBox";
import PaymentOptionsTitle from "./PaymentOptionsTitle";
import {
  getUserAddressData,
  getUserPaymentData,
} from "../store/actions/userActions";
import { getPayment } from "../store/thunks/shoppingCartThunk";
import { useForm } from "react-hook-form";

export default function PaymentOptions() {
  const { register, watch } = useForm();
  const dispatch = useDispatch();
  const { address, payment } = useSelector((store) => store.userData);
  const { addresses, payments } = useSelector((store) => store.shopping);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [option, setOption] = useState(true);
  const [paymentID, setPaymentID] = useState();
  const [total, setTotal] = useState();
  console.log(
    "ORDER DATE",
    new Date(new Date().toString().split("GMT")[0] + " UTC")
      .toISOString()
      .split(".")[0]
  );
  console.log("ADRESS WATCH", watch("address"));
  console.log("PAYMENT WATCH", paymentID);

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const userAddress = addresses.find((add) => add.id == watch("address"));
  const userPayment = payments.find((pay) => pay.id == paymentID);

  const ordersHandler = () => {
    if (address) setOption(false);
    const orderSample = {
      address_id: 1,
      order_date: "2024-01-10T14:18:30",
      card_no: 1234123412341234,
      card_name: "Ali Baş",
      card_expire_month: 12,
      card_expire_year: 2025,
      card_ccv: 321,
      price: 1919,
      products: [
        {
          product_id: 12,
          count: 1,
          detail: "açık mavi - xl",
        },
        {
          product_id: 13,
          count: 2,
          detail: "siyah - lg",
        },
      ],
    };

    //Geçerli Adres ve card bilgileri yoksa post etmeye izin verme!
    // if (location.pathname === "/payment") {
    //   dispatch(postOrders(orderSample));
    // }
  };

  useEffect(() => {
    if (userAddress) dispatch(getUserAddressData(userAddress));
    if (userPayment) dispatch(getUserPaymentData(userPayment));
    if (addresses.length === 0) dispatch(getAddress());
    if (payments.length === 0) dispatch(getPayment());
  }, [watch("address"), userPayment]);
  return (
    <div className="relative flex flex-wrap justify-center gap-5 bg-gray-100 p-2 w-full">
      <div className="flex flex-col items-start gap-5 w-4/6">
        <PaymentOptionsTitle open={option} setOpen={setOption} />
        {option && (
          <div className=" bg-white rounded-md shadow-md w-full">
            <div className="flex flex-wrap  justify-between px-5 py-4 w-full">
              <div>
                <h3 className="text-2xl font-bold">Delivery Address</h3>
              </div>
              <div className="flex flex-row items-center">
                {" "}
                <Checkbox /> <span>
                  Send My Invoice to the Same Address
                </span>{" "}
              </div>
            </div>
            <hr />
            <div className="flex justify-center px-8 py-5 items-center">
              <form className="flex flex-wrap justify-start gap-10 p-2  ">
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
                {addresses &&
                  addresses.map((add) => (
                    <div key={add.id} className="flex flex-col gap-2 w-[400px]">
                      <div className="flex flex-row justify-between items-center">
                        <div className="inline-flex items-center gap-1">
                          <input
                            type="radio"
                            value={add.id}
                            {...register("address")}
                            id={add.id}
                          />
                          <label htmlFor={add.id}> {add.title} </label>
                        </div>
                        <div className="flex">
                          <button className="hover:underline">
                            <span className="text-sm"> Edit </span>{" "}
                          </button>
                        </div>
                      </div>
                      <label className="cursor-pointer" htmlFor={add.id}>
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
                  ))}
              </form>
            </div>
          </div>
        )}
        {!option && <Payment set={setPaymentID} />}
      </div>

      <OrderSummoryBox
        setOption={setOption}
        option={option}
        ordersHandler={ordersHandler}
      />
      <Address isOpen={isModalOpen} setClose={closeModal} />
    </div>
  );
}
