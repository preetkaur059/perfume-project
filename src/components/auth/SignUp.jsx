import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-30">

      <div className="w-full max-w-md">

        {/* Brand */}
        {/* <div className="text-center mb-8">
          <Link
            to="/"
            className="text-4xl font-bold tracking-[0.2em] text-white"
          >
            ZIVARA
          </Link>

          <p className="text-[#e2f2b0] mt-2 text-sm tracking-[0.3em]">
            ELEGANCE IN EVERY DROP
          </p>
        </div> */}

        {/* Signup Card */}
        <div className="bg-[#111111] border border-white/10 rounded-2xl  md:p-8 shadow-2xl">

          <h2 className="text-3xl mb-5 font-bold text-white text-center">
            Create Account
          </h2>

          {/* <p className="text-gray-400 text-center mt-2 mb-7">
            Create your ZIVARA account
          </p> */}

          {/* Name */}
          <div className="mb-5">
            <label className="block text-white mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-black border border-gray-700
              rounded-lg px-4 py-3 text-white
              placeholder-gray-500 outline-none
              focus:border-[#e2f2b0] transition duration-300"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-white mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-black border border-gray-700
              rounded-lg px-4 py-3 text-white
              placeholder-gray-500 outline-none
              focus:border-[#e2f2b0] transition duration-300"
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block text-white mb-2">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="w-full bg-black border border-gray-700
                rounded-lg px-4 py-3 pr-16 text-white
                placeholder-gray-500 outline-none
                focus:border-[#e2f2b0] transition duration-300"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2
                -translate-y-1/2 text-sm
                text-[#e2f2b0] cursor-pointer"
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-5">
            <label className="block text-white mb-2">
              Confirm Password
            </label>

            <div className="relative">

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className="w-full bg-black border border-gray-700
                rounded-lg px-4 py-3 pr-16 text-white
                placeholder-gray-500 outline-none
                focus:border-[#e2f2b0] transition duration-300"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-4 top-1/2
                -translate-y-1/2 text-sm
                text-[#e2f2b0] cursor-pointer"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>

            </div>
          </div>

          {/* Terms */}
          <div className="flex gap-2 items-start mb-6">

            <input
              type="checkbox"
              className="mt-1 accent-lime-300"
            />

            <p className="text-gray-400 text-sm leading-5">
              I agree to the{" "}
              <span className="text-[#e2f2b0] cursor-pointer">
                Terms & Conditions
              </span>{" "}
              and Privacy Policy.
            </p>

          </div>

          {/* Signup Button */}
          <button
            type="button"
            className="w-full py-3 rounded-lg
            bg-gradient-to-b from-lime-200 to-lime-300
            text-black font-bold text-lg
            cursor-pointer
            transition duration-300
            hover:scale-[1.02]
            hover:bg-[#efc3c5]"
          >
            Create Account
          </button>

          {/* Login */}
          <p className="text-gray-400 text-center mt-7">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-[#e2f2b0] font-semibold
              hover:text-[#efc3c5] transition"
            >
              Login
            </Link>

          </p>

        </div>
      </div>
    </div>
  );
};

export default Signup;