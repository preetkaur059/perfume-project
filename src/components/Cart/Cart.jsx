import React from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { MdOutlineDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import img2 from "../../assets/1.jpg";



const Cart = () => {
    const { cart, removeFromCart, quantityIncrement, quantityDecrease, subTotal, shippingFee, orderTotal } = useContext(StoreContext);

  const cartItems = [
    {
      id: 1,
      name: "Golden Oud",
      price: 120,
      quantity: 1,
      image: img2
    },
    {
      id: 2,
      name: "Royal Leather",
      price: 95,
      quantity: 2,
      image: "https://via.placeholder.com/150"
    }
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen pt-35 bg-[#0d0d0d] text-white px-6 md:px-20 py-12">

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-10 text-center tracking-wider">
        Your Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">

        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center bg-[#111] border border-[#222] p-6 rounded-xl hover:shadow-xl hover:shadow-lime-300/10 transition"
            >

              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-lg"
              />

              {/* Details */}
              <div className="flex-1 md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-lime-300 text-lg font-bold">
                  ${item.price.toFixed(2)}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-4 mt-4 md:mt-0">

                <button className="bg-[#222] p-2 rounded-md hover:bg-lime-300 hover:text-black transition">
                  <FaMinus />
                </button>

                <span className="text-lg font-semibold">
                  {item.quantity}
                </span>

                <button className="bg-[#222] p-2 rounded-md hover:bg-lime-300 hover:text-black transition">
                  <FaPlus />
                </button>

              </div>

              {/* Remove Button */}
              <button className="ml-6 text-red-400 hover:text-red-600 transition mt-4 md:mt-0">
                <FaTrash size={18} />
              </button>

            </div>
          ))}

        </div>

        {/* Order Summary */}
        <div className="bg-[#111] border border-[#222] p-8 rounded-xl h-fit sticky top-24">

          <h2 className="text-2xl font-semibold mb-6 border-b border-[#222] pb-4">
            Order Summary
          </h2>

          <div className="flex justify-between mb-4 text-lg">
            <span>Subtotal</span>
            <span className="text-lime-300 font-bold">
              ${subtotal.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between mb-4 text-lg">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between text-xl font-bold border-t border-[#222] pt-4">
            <span>Total</span>
            <span className="text-lime-300">
              ${subtotal.toFixed(2)}
            </span>
          </div>

          <button className="w-full mt-8 py-3 rounded-lg bg-gradient-to-r 
                             from-lime-200 to-lime-300 text-black font-bold 
                             hover:from-lime-300 hover:to-lime-400 
                             transition duration-300">
            Proceed To Checkout
          </button>

        </div>

      </div>
    </div>
  );
};

export default Cart;