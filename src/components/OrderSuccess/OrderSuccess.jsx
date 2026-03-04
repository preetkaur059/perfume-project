import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center px-6">

      <div className="bg-[#111] border border-[#222] p-10 rounded-2xl text-center 
                      max-w-lg w-full hover:shadow-2xl hover:shadow-lime-300/20 
                      transition duration-500">

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <FaCheckCircle className="text-lime-300 text-7xl animate-bounce" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-4 tracking-wide">
          Order Placed Successfully!
        </h1>

        {/* Message */}
        <p className="text-gray-400 mb-6">
          Thank you for shopping with us. Your perfume is being prepared 
          and will be delivered soon.
        </p>

        {/* Order Info */}
        <div className="bg-[#161616] border border-[#222] p-4 rounded-lg mb-6">
          <p className="text-sm text-gray-400">Order ID</p>
          <p className="text-lime-300 font-bold text-lg">
            #PRF2026-45821
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-lg bg-gradient-to-r 
                       from-lime-200 to-lime-300 text-black font-bold 
                       hover:from-lime-300 hover:to-lime-400 transition duration-300">
            Continue Shopping
          </button>

          <button
            onClick={() => navigate("/orders")}
            className="px-6 py-3 rounded-lg border border-lime-300 
                       text-lime-300 hover:bg-lime-300 hover:text-black 
                       transition duration-300">
            View Orders
          </button>

        </div>

      </div>

    </div>
  );
};

export default OrderSuccess;