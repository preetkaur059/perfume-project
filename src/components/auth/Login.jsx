import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-10 pt-30">
      <div className="w-full max-w-md ">

        {/* Logo / Brand */}
        {/* <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white tracking-widest">
            PERFUME
          </h1>
          <p className="text-[#e2f2b0] mt-2 text-sm tracking-[0.3em]">
            ELEGANCE IN EVERY DROP
          </p>
        </div> */}

        {/* Login Card */}
        <div className="bg-[#111111] border border-[#f5f5dc]/20 rounded-2xl p-8 shadow-2xl">

          <h2 className="text-3xl font-bold text-white text-center">
            Welcome Back
          </h2>

          <p className="text-gray-400 text-center mt-2 mb-8">
            Login to continue your fragrance journey
          </p>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-white mb-2 font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-black border border-gray-700
              rounded-lg text-white placeholder-gray-500
              outline-none focus:border-[#e2f2b0] transition duration-300"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-white mb-2 font-medium">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-3 pr-16 bg-black border border-gray-700
                rounded-lg text-white placeholder-gray-500
                outline-none focus:border-[#e2f2b0] transition duration-300"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2
                text-[#e2f2b0] text-sm cursor-pointer"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end mb-6">
            <Link
              to="/forgot-password"
              className="text-[#e2f2b0] text-sm hover:text-[#efc3c5] transition"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            className="w-full py-3 bg-gradient-to-b from-lime-200 to-lime-300
            text-black font-bold text-lg rounded-lg cursor-pointer
            transition duration-300 hover:scale-[1.02]
            hover:bg-gradient-to-b hover:from-lime-300 hover:to-lime-200"
          >
            Login
          </button>

          {/* Signup */}
          <p className="text-gray-400 text-center mt-7">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#e2f2b0] font-semibold hover:text-[#efc3c5] transition"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;