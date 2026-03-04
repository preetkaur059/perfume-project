import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white px-6 md:px-20 py-12">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-12 tracking-wider">
        Delivery Information
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">

        {/* Form Section */}
        <div className="lg:col-span-2 bg-[#111] border border-[#222] p-8 rounded-xl">

          <form className="space-y-6">

            {/* Full Name */}
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 bg-[#0d0d0d] border border-[#222] rounded-lg focus:outline-none focus:border-lime-300 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 bg-[#0d0d0d] border border-[#222] rounded-lg focus:outline-none focus:border-lime-300 transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full p-3 bg-[#0d0d0d] border border-[#222] rounded-lg focus:outline-none focus:border-lime-300 transition"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Address
              </label>
              <input
                type="text"
                placeholder="Street address"
                className="w-full p-3 bg-[#0d0d0d] border border-[#222] rounded-lg focus:outline-none focus:border-lime-300 transition"
              />
            </div>

            {/* City + Postal Code */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  City
                </label>
                <input
                  type="text"
                  placeholder="City"
                  className="w-full p-3 bg-[#0d0d0d] border border-[#222] rounded-lg focus:outline-none focus:border-lime-300 transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Postal Code
                </label>
                <input
                  type="text"
                  placeholder="Postal code"
                  className="w-full p-3 bg-[#0d0d0d] border border-[#222] rounded-lg focus:outline-none focus:border-lime-300 transition"
                />
              </div>
            </div>

            {/* Country */}
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Country
              </label>
              <select
                className="w-full p-3 bg-[#0d0d0d] border border-[#222] rounded-lg focus:outline-none focus:border-lime-300 transition"
              >
                <option>India</option>
                <option>UAE</option>
                <option>UK</option>
                <option>USA</option>
              </select>
            </div>

          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-[#111] border border-[#222] p-8 rounded-xl h-fit sticky top-24">

          <h2 className="text-2xl font-semibold mb-6 border-b border-[#222] pb-4">
            Order Summary
          </h2>

          <div className="flex justify-between mb-4">
            <span>Subtotal</span>
            <span className="text-lime-300 font-bold">$310.00</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between text-xl font-bold border-t border-[#222] pt-4">
            <span>Total</span>
            <span className="text-lime-300">$310.00</span>
          </div>

          <Link to='/payment' className="w-full mt-8 py-3 rounded-lg bg-gradient-to-r 
                             from-lime-200 to-lime-300 text-black font-bold 
                             hover:from-lime-300 hover:to-lime-400 
                             transition duration-300">
            Continue To Payment
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Checkout;