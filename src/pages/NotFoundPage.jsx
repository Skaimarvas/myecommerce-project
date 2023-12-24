import React from "react";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-4">Oops! Sayfa bulunamadı.</p>
        <p className="text-gray-600">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <button
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
          onClick={() => window.history.back()}
        >
          Geri Dön
        </button>
      </div>
    </div>
  );
}
