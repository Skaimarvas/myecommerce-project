import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function ShoppingCart() {
  const { cart } = useSelector((store) => store.shopping);
  return (
    <div className="blackborder   flex flex-col items-center justify-center gap-6 py-2 bg-white text-black shadow-lg rounded px-1">
      <div>
        <span>Sepetim ({cart.length} Ürün) </span>
      </div>
      <div className="flex flex-col gap-2 ">
        {cart.map((car) => (
          <>
            <div
              key={car.product.id}
              className="blackborder flex flex-row items-center gap-2"
            >
              <img
                src={car.product.images[0].url}
                className="w-10 h-10 border border-gray-600 rounded shadow-sm object-cover "
                alt=""
              />
              <div className="flex flex-col gap-2 py-1">
                <span className="text-xs"> {car.product.name} </span>
                <div className="flex flex-row  gap-5">
                  <span className="text-xs"> Piece: {car.count} </span>
                  <span className="text-xs text-[#23A6F0] font-bold">
                    {" "}
                    ${(car.product.price * car.count).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="flex flex-row gap-1">
        <Link to="/cart">
          <button className="border border-black bg-blue-gray-100 px-1 py-2 rounded hover:bg-blue-gray-500">
            <span>Sepete Git</span>
          </button>
        </Link>
        <button className="border border-black bg-blue-400 hover:bg-blue-700 px-1 py-2 rounded">
          <span className="text-white">Siparişi Tamamla</span>
        </button>
      </div>
    </div>
  );
}
