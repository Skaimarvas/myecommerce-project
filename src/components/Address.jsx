import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postAddress } from "../store/thunks/shoppingCartThunk";

export default function Address(props) {
  const { isOpen, setClose } = props;
  if (!isOpen) return null;
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const dataHandle = (data) => {
    console.log("DATA", data);
    dispatch(postAddress(data));
    setClose(false);
  };

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center p-10 bg-gray-800 bg-opacity-50">
      <form onSubmit={handleSubmit(dataHandle)}>
        <div className=" blackborder flex flex-col p-5 bg-white rounded-md shadow-md">
          <div className="flex flex-row justify-between">
            <div>
              {" "}
              <h3>Add Address</h3>{" "}
            </div>
            <div>
              {" "}
              <button onClick={() => setClose(false)}>
                <span>x</span>
              </button>{" "}
            </div>
          </div>
          <hr />
          <div className="flex flex-wrap gap-2">
            <div className="flex flex-col p-2">
              <label htmlFor="name">Name </label>
              <input
                id="name"
                className="blackborder"
                {...register("name")}
                type="text"
              />
            </div>
            <div className="flex flex-col p-2">
              <label htmlFor="surname">Surname </label>
              <input
                className="blackborder"
                {...register("surname")}
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="flex flex-col p-2 ">
              <label htmlFor="phone">Phone </label>
              <input
                id="phone"
                className="blackborder"
                {...register("phone")}
                type="text"
              />
            </div>
            <div className="flex flex-col p-2 w-full">
              <label htmlFor="city">City </label>
              <select id="city" className="blackborder " {...register("city")}>
                <option value="">Select City</option>
                <option value="ist">Istanbul</option>
                <option value="ank">Ankara</option>
                <option value="izm">Izmır</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 ">
            <div className="flex flex-col p-2">
              <label htmlFor="district">District </label>
              <input
                id="district"
                className="blackborder"
                {...register("district")}
                type="text"
              />
            </div>
            <div className="flex flex-col p-2">
              <label htmlFor="neigborhood">Neighborhood </label>
              <input
                className="blackborder"
                {...register("neighborhood")}
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="address">Address </label>
            <input
              id="address"
              className="blackborder"
              {...register("address")}
              type="text"
            />
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="title">Adress Title </label>
            <input
              id="title"
              className="blackborder"
              {...register("title")}
              type="text"
            />
          </div>

          <button type="submit" className="bg-blue-700 px-5 py-2 rounded-md">
            {" "}
            <span className="text-white">Save Adress</span>{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
