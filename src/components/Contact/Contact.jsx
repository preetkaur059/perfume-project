import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Heading from "../Heading/Heading";

const Contact = () => {
  return (
    <div className="bg-black text-white pt-25 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
            <Heading highlight = 'Get In Touch'/>
          {/* <h1 className="text-5xl font-semibold tracking-wide">
            Get In Touch
          </h1> */}
          <p className="text-gray-400 mt-2 max-w-[600px] mx-auto leading-7">
            Have questions about our fragrances or your order? Our team is
            always ready to assist you. Feel free to contact us anytime.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="bg-[#111] border border-[#333] p-8 text-center rounded-lg hover:border-lime-200 transition">
            <FaMapMarkerAlt className="text-2xl mx-auto mb-4 text-lime-200" />
            <h3 className="text-xl font-medium mb-2">Our Store</h3>
            <p className="text-gray-400">
              Zivara Fragrance Store <br />
              Ludhiana, Punjab
            </p>
          </div>

          <div className="bg-[#111] border border-[#333] p-8 text-center rounded-lg hover:border-lime-200 transition">
            <FaPhoneAlt className="text-2xl mx-auto mb-4 text-lime-200" />
            <h3 className="text-xl font-medium mb-2">Call Us</h3>
            <p className="text-gray-400">
              +91 98765 43210
            </p>
          </div>

          <div className="bg-[#111] border border-[#333] p-8 text-center rounded-lg hover:border-lime-200 transition">
            <FaEnvelope className="text-2xl mx-auto mb-4 text-lime-200" />
            <h3 className="text-xl font-medium mb-2">Email Us</h3>
            <p className="text-gray-400">
              support@zivara.com
            </p>
          </div>

        </div>

        {/* Contact Form */}
        <div className="max-w-[700px] mx-auto bg-[#111] border border-[#333] p-10 rounded-lg">

          <h2 className="text-2xl font-medium mb-6 text-center">
            Send Us A Message
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-black border border-[#333] rounded outline-none focus:border-lime-200"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-black border border-[#333] rounded outline-none focus:border-lime-200"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 bg-black border border-[#333] rounded outline-none focus:border-lime-200"
            ></textarea>

            <button className="w-full py-3 bg-lime-200 text-black font-semibold rounded hover:bg-lime-300 transition">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </div>
  );
};

export default Contact;