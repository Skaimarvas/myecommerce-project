import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function SignUp() {
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password length should be at least 4 characters")
      .max(16, "Password cannot exceed more than 12 characters"),
    cpassword: Yup.string()
      .required("Password is required")
      .min(8, "Password length should be at least 4 characters")
      .max(16, "Password cannot exceed more than 12 characters")
      .oneOf([Yup.ref("password")], "Passwords do not match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({ mode: "onChange", resolver: yupResolver(formSchema) });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-[100px] py-[50px] text-center"
      >
        <label className="flex flex-col gap-[10px]">
          Name
          <input
            type="text"
            {...register("name", { required: true, minLength: 3 })}
          />
          {errors.name && (
            <p className=" text-deep-orange-900">
              Name should be at least 3 letters
            </p>
          )}
        </label>

        <label className="flex flex-col gap-[10px]">
          Email
          <input type="email" {...register("email", { required: true })} />
          {errors.email && (
            <p className=" text-deep-orange-900">Email Required</p>
          )}
        </label>
        <label className="flex flex-col gap-[10px]">
          Password
          <input type="password" {...register("password")} />
          {<p className=" text-deep-orange-900">{errors.password?.message} </p>}
        </label>

        <label className="flex flex-col gap-[10px]">
          Confirm Password
          <input type="password" {...register("cpassword")} />
          <p className=" text-deep-orange-900">{errors.cpassword?.message}</p>
        </label>

        <button
          type="submit"
          className=" py-[20px] px-[10px] bg-[#23A6F0] hover:bg-[#207eb4] rounded-md text-white  "
        >
          {" "}
          <span> Kayıt Ol / Giriş Yap </span>{" "}
        </button>
      </form>
    </div>
  );
}
