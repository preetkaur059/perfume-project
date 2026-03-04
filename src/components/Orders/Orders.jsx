import React from "react";
import { FaBoxOpen, FaTruck, FaCheckCircle } from "react-icons/fa";

const Orders = () => {

  const orders = [
    {
      id: "#PRF2026-45821",
      date: "04 March 2026",
      total: 310,
      status: "Shipped",
      items: [
        { name: "Golden Oud", qty: 1 },
        { name: "Royal Leather", qty: 2 }
      ]
    },
    {
      id: "#PRF2026-45810",
      date: "01 March 2026",
      total: 120,
      status: "Delivered",
      items: [
        { name: "Midnight Bloom", qty: 1 }
      ]
    }
  ];

  const getStatusIcon = (status) => {
    if (status === "Processing")
      return <FaBoxOpen className="text-yellow-400" />;
    if (status === "Shipped")
      return <FaTruck className="text-blue-400" />;
    if (status === "Delivered")
      return <FaCheckCircle className="text-lime-300" />;
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white px-6 md:px-20 py-12">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-12 tracking-wider">
        Your Orders
      </h1>

      {orders.length === 0 ? (
        <div className="text-center mt-20">
          <h2 className="text-2xl mb-4">No Orders Yet 📦</h2>
          <p className="text-gray-400 mb-6">
            Looks like you haven’t placed any orders.
          </p>
        </div>
      ) : (

        <div className="space-y-8">

          {orders.map((order, index) => (
            <div
              key={index}
              className="bg-[#111] border border-[#222] rounded-2xl p-8 
                         hover:shadow-xl hover:shadow-lime-300/10 
                         transition duration-500"
            >

              {/* Top Row */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">

                <div>
                  <p className="text-gray-400 text-sm">Order ID</p>
                  <p className="text-lime-300 font-bold text-lg">
                    {order.id}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Order Date</p>
                  <p>{order.date}</p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Total</p>
                  <p className="font-bold">${order.total.toFixed(2)}</p>
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold">
                  {getStatusIcon(order.status)}
                  <span>{order.status}</span>
                </div>

              </div>

              {/* Items */}
              <div className="border-t border-[#222] pt-4 space-y-2">
                {order.items.map((item, i) => (
                  <div key={i} className="flex justify-between text-gray-300">
                    <span>{item.name}</span>
                    <span>Qty: {item.qty}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="mt-6 text-right">
                <button className="px-6 py-2 border border-lime-300 text-lime-300 
                                   rounded-lg hover:bg-lime-300 hover:text-black 
                                   transition duration-300">
                  View Details
                </button>
              </div>

            </div>
          ))}

        </div>

      )}

    </div>
  );
};

export default Orders;