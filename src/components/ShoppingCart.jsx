import React from "react";

export default function ShoppingCart() {
  return (
    <div className="blackborder flex flex-col items-center justify-center gap-6 py-2 bg-white text-black shadow-lg rounded px-1">
      <div>
        <span>Sepetim (2 Ürün) </span>
      </div>
      <div>
        <span>Deneme Ürün</span>
      </div>
      <div className="flex flex-row gap-1">
        <button className="border border-black bg-blue-gray-100 px-1 py-2 rounded hover:bg-blue-gray-500">
          <span>Sepete Git</span>
        </button>
        <button className="border border-black bg-blue-400 hover:bg-blue-700 px-1 py-2 rounded">
          <span className="text-white">Siparişi Tamamla</span>
        </button>
      </div>
    </div>
  );
}
