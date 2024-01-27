import React from "react";
import { useForm } from "react-hook-form";

export default function Radio(props) {
  const { label, id, value, set } = props;
  const { register, watch } = useForm();

  const showValue = watch(`${value}`) ? watch(`${value}`) : "";
  set(showValue);
  console.log("RADIO ID VALUE: ", showValue);
  return (
    <div class="inline-flex items-center">
      <label
        class="relative flex items-center p-3 rounded-full cursor-pointer"
        htmlFor={`radio-${id}`}
      >
        <input
          {...register(`${value}`)}
          type="radio"
          value={id}
          class="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
          id={`radio-${id}`}
        />
        <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-2 w-2"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <circle data-name="ellipse" cx="7" cy="9" r="8"></circle>
          </svg>
        </span>
      </label>
      <label
        class="mt-px font-light text-sm cursor-pointer select-none"
        htmlFor={`radio-${id}`}
      >
        {label}
      </label>
    </div>
  );
}
