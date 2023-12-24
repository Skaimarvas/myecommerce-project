import React from "react";
//Thunk
import { postLogin } from "../store/thunks/userThunk";

//Hooks
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Login() {
  const token = localStorage.getItem("token");
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { email, password } = data;
    console.log("LOGINDATA", data);
    dispatch(postLogin(data));
    reset();
    // if (token) {
    //   history.push("/");
    // }
  };

  return (
    <div className=" flex justify-center items-center   bg-gray-100 traking-wider p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-6 py-8 text-left bg-white p-8 rounded-md shadow-lg "
      >
        <h2 className="text-2xl font-bold text-center"> Login</h2>
        <div className="flex flex-wrap justify-center gap-4 w-full">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-[#252B42] text-sm leading-6 font-semibold "
            >
              Email
            </label>
            <input
              type="email"
              className="py-2 px-3 border border-gray-300 rounded-md w-full"
              {...register("email", { required: "Email is required" })}
            />
            <p className=" text-red-500 text-sm max-w-[200px]">
              {errors.email?.message}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-[#252B42] text-sm leading-6 font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              className="py-2 px-3 border border-gray-300 rounded-md w-full"
              {...register("password", {
                required: "Password is required",
              })}
            />

            <p className=" text-red-500 text-sm max-w-[200px]">
              {errors.password?.message}{" "}
            </p>
          </div>
        </div>

        <button
          type="submit"
          className=" py-3 px-6 bg-[#23A6F0] hover:bg-[#207eb4] rounded-md text-white w-full"
        >
          <span> Login </span>
        </button>
      </form>
    </div>
  );
}
