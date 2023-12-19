import React from "react";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({ mode: "onChange" });

  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(3, "Password length should be at least 4 characters").max,
  });

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
          <input
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className=" text-deep-orange-900">Password Required</p>
          )}
        </label>

        <label className="flex flex-col gap-[10px]">
          Confirm Password
          <input
            type="password"
            {...register("cpassword", { required: true })}
          />
          {errors.cpassword && (
            <p className=" text-deep-orange-900">Confirm Password Required</p>
          )}
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
