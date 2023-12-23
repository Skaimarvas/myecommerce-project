import React from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRoles } from "../store/actions/globalActions";
import { postSignup } from "../store/thunks/userThunk";

export default function SignUp() {
  const { roles } = useSelector((store) => store.global);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      role_id: "3",
    },
  });

  const isValidPhoneNumber = (value) => {
    return /^(\+90\s?|0)([0-9]\s?){9}[0-9]$/.test(value);
  };
  const isValidStoreTaxId = (value) => {
    return /^T\d{4}V\d{6}$/.test(value);
  };
  const isValidIBAN = (value) => {
    return /^[A-Z]{2}\d{2}[A-Z\d]{4}\d{7}([A-Z\d]{1,16})?$/.test(value);
  };
  const onSubmit = (data) => {
    console.log(data);
    const { cpassword, ...postdata } = data;
    dispatch(postSignup(postdata));
    reset();
  };

  useEffect(() => {
    console.log("ROLES", roles);
    if (roles.length === 0) {
      dispatch(getRoles());
    }
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center   bg-gray-100 traking-wider p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-6 py-8 text-left bg-white p-8 rounded-md shadow-lg "
      >
        <h2 className="text-2xl font-bold text-center"> Sign Up</h2>
        <div className="flex flex-wrap justify-center gap-4 w-full">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-[#252B42] text-sm leading-6 font-semibold"
            >
              Name{" "}
            </label>

            <input
              type="text"
              className="py-2 px-3 border border-gray-300 rounded-md w-full"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name should be at least 3 letters",
                },
              })}
            />

            <p className=" text-red-500 text-sm max-w-[200px]">
              {errors.name?.message}
            </p>
          </div>
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
        </div>

        <div className="flex flex-wrap justify-center gap-4 w-full">
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
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$½^&+=!]).{8,}$/,
                  message:
                    "Password must be at least 8 characters, including at least one number, one lowercase letter, one uppercase letter, and one special character",
                },
                maxLength: {
                  value: 16,
                  message: "Password cannot exceed more than 16 characters",
                },
              })}
            />

            <p className=" text-red-500 text-sm max-w-[200px]">
              {errors.password?.message}{" "}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#252B42] text-sm leading-6 font-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              className="py-2 px-3 border border-gray-300 rounded-md w-full"
              {...register("cpassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
            <div className="max-w-[200px]">
              <p className=" text-red-500 text-sm max-w-[200px]">
                {errors.cpassword?.message}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <label
            htmlFor="role_id"
            className="text-[#252B42] text-sm leading-6 font-semibold"
          >
            Role
          </label>
          <select
            id="role_id"
            {...register("role_id")}
            className="uppercase py-2 px-3 border border-gray-300 rounded-md w-full"
            value={watch("role_id")}
          >
            {roles &&
              roles.map((rol) => (
                <option key={rol.id} value={rol.id}>
                  {" "}
                  {rol.code}{" "}
                </option>
              ))}
          </select>
        </div>

        {watch("role_id") === "2" && (
          <>
            <div className="flex flex-wrap gap-4 justify-center w-full">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="storename"
                  className="text-[#252B42] text-sm leading-6 font-semibold"
                >
                  Store Name
                </label>
                <input
                  id="storename"
                  type="text"
                  className="py-2 px-3 border border-gray-300 rounded-md w-full"
                  {...register("store.name", {
                    required: "Store Name should be at least 3 letters",
                  })}
                />
                <p className=" text-red-500 text-sm max-w-[200px]">
                  {errors.store?.name?.message}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="storephone"
                  className="text-[#252B42] text-sm leading-6 font-semibold"
                >
                  Store Phone{" "}
                </label>
                <input
                  id="storephone"
                  type="text"
                  className="py-2 px-3 border border-gray-300 rounded-md w-full"
                  {...register("store.phone", {
                    required: "Store Phone Number Required",
                    validate: {
                      validPhoneNumber: (value) =>
                        isValidPhoneNumber(value) ||
                        "Phone number is not valid",
                    },
                  })}
                />
                <p className=" text-red-500 text-sm max-w-[200px]">
                  {errors.store?.phone?.message}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center w-full">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="storetaxid"
                  className="text-[#252B42] text-sm leading-6 font-semibold"
                >
                  Store Tax ID
                </label>
                <input
                  id="storetaxid"
                  type="text"
                  className="py-2 px-3 border border-gray-300 rounded-md w-full"
                  {...register("store.tax_no", {
                    required: "Store Tax Id Required",
                    validate: {
                      validStoreTaxId: (value) =>
                        isValidStoreTaxId(value) || "Store Tax Id is not valid",
                    },
                  })}
                />
                <p className=" text-red-500 text-sm max-w-[200px]">
                  {errors.store?.tax_no?.message}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="storebank"
                  className="text-[#252B42] text-sm leading-6 font-semibold"
                >
                  Store Bank Account
                </label>{" "}
                <input
                  id="storebank"
                  type="text"
                  className="py-2 px-3 border border-gray-300 rounded-md w-full"
                  {...register("store.bank_account", {
                    required: "Store Bank Account Required",
                    validate: {
                      validIBAN: (value) =>
                        isValidIBAN(value) || "Store Bank is not valid",
                    },
                  })}
                />
                <p className=" text-red-500 text-sm max-w-[200px]">
                  {errors.store?.bank_account?.message}
                </p>
              </div>
            </div>
          </>
        )}

        <button
          type="submit"
          className=" py-3 px-6 bg-[#23A6F0] hover:bg-[#207eb4] rounded-md text-white w-full"
        >
          <span> Sign Up </span>
        </button>
      </form>
    </div>
  );
}
