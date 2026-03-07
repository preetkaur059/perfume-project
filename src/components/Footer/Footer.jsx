import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    
    <div className="  bg-black mx-auto text-gray-300 pt-16">

      {/* Top Border */}

      <div className="flex gap-17 max-w-7xl mx-auto pb-12  grid md:grid-cols-4">

        {/* Brand */}
        <div className="">
          <h2 className="text-lime-200 text-2xl font-semibold mb-4 tracking-wide">
            ZIVARA
          </h2>

          <p className="leading-7 text-gray-400">
            Zivara – Luxury fragrances crafted to leave a lasting impression.
          </p>
          <p className="leading-7 mt-6 text-gray-400">
           © 2026 ZIVARA All Rights Reserved 
          </p>
        </div>


        {/* Quick Links */}
        <div className="flex-2">
          <h3 className="text-lime-200 text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 ">
            <li className="hover:text-lime-200 hover:translate-x-1 transition cursor-pointer">
              Home
            </li>
            <li className="hover:text-lime-200 hover:translate-x-1 transition cursor-pointer">
              About Us
            </li>
            <li className="hover:text-lime-200 hover:translate-x-1 transition cursor-pointer">
              Contact Us
            </li>
            <li className="hover:text-lime-200 hover:translate-x-1 transition cursor-pointer">
              All Products
            </li>
          </ul>
        </div>


        {/* Contact */}
        <div>
          <h3 className="text-lime-200 text-xl font-semibold mb-5">
            Contact
          </h3>

          <div className="space-y-3 text-gray-400">
            <p>Email: info@zivara.com</p>
            <p>Phone: +91 93652 56321</p>
            <p>Address: 123 Street, Punjab, India</p>
          </div>
        </div>


        {/* Social */}
        <div>
          <h3 className="text-lime-200 text-xl font-semibold mb-5">
            Follow Us
          </h3>

          <div className="flex gap-4">

            <div className="w-10 h-10 flex items-center justify-center border-2 border-lime-400/40 rounded-full hover:bg-lime-300 hover:text-black transition cursor-pointer">
              <FaFacebookF />
            </div>

            <div className="w-10 h-10 flex items-center justify-center border-2 border-lime-400/40 rounded-full hover:bg-lime-300 hover:text-black transition cursor-pointer">
              <FaInstagram />
            </div>

            <div className="w-10 h-10 flex items-center justify-center border-2 border-lime-400/40 rounded-full hover:bg-lime-300 hover:text-black transition cursor-pointer">
              <FaTwitter />
            </div>

          </div>    
        </div>

      </div>

      {/* Bottom Text
      <div className="text-center py-6 text-sm text-gray-400">
        © 2026 Your Brand. All Rights Reserved by PK & GS
      </div> */}

    </div>
    
  );
};

export default Footer;