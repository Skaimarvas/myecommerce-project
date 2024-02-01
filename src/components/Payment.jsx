import React, { useEffect } from "react";
//Icons and Pngs
import citi from "../assets/cardlogos/citi.png";
import mastercard from "../assets/cardlogos/mastercard48.png";
//Components
import CreditCardForm from "./CreditCardForm";
import { useDispatch, useSelector } from "react-redux";
import { getPayment } from "../store/thunks/shoppingCartThunk";
import Radio from "./Radio";

export default function Payment(props) {
  const dispatch = useDispatch();
  const { set } = props;
  const { payments } = useSelector((store) => store.shopping);

  useEffect(() => {
    if (payments.length === 0) dispatch(getPayment());
  }, [dispatch, payments.length]);

  return (
    <div className="flex flex-col items-center gap-10 bg-white p-5 w-full rounded shadow border border-gray-400">
      <CreditCardForm />

      <form>
        <div className="flex flex-wrap justify-center gap-3 p-2 bg-white ">
          {payments &&
            payments.map((pay) => (
              <div key={pay.id} className=" w-[300px] ">
                {" "}
                <div className="flex flex-row justify-between items-center">
                  <Radio label={pay.name_on_card} id={pay.id} set={set} />
                </div>
                <label htmlFor={`radio-${pay.id}`}>
                  <div className="flex flex-col gap-2 p-2 border border-gray-700 bg-gray-400 rounded-md shadow-md">
                    <div className="flex flex-row justify-between px-2 ">
                      <img className="w-10 h-10" src={citi} alt="" />
                      <img src={mastercard} alt="" />
                    </div>
                    <div className="flex flex-col items-end gap-2 p-3">
                      <div>
                        {" "}
                        <span> {pay.name_on_card} </span>{" "}
                      </div>
                      <div>
                        {" "}
                        <span> {pay.card_no} </span>{" "}
                      </div>
                      <div>
                        {" "}
                        <span>
                          {" "}
                          {pay.expire_month}/{pay.expire_year}{" "}
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            ))}
        </div>
      </form>
    </div>
  );
}
