import React from "react";

export default function PaymentOptionsTitle(props) {
  const { open, setOpen } = props;
  return (
    <div className="flex flex-row w-full bg-white rounded-md shadow-md border border-gray-400">
      <button
        onClick={() => setOpen(true)}
        className={`p-5 w-1/2 text-2xl border-b-4  ${
          open ? "bg-gray-200" : ""
        } border-b-blue-700 border-r border-r-gray-400`}
      >
        <h4>Adress</h4>
      </button>
      <button
        onClick={() => setOpen(false)}
        className={`p-5 w-1/2 text-2xl ${
          !open ? "bg-gray-200" : ""
        } border-b-4 border-b-blue-700 border-r border-r-gray-400`}
      >
        <h4>Payment</h4>
      </button>
    </div>
  );
}
