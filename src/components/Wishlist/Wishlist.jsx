import React from "react";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Wishlist = () => {

  const { wishlist, addToCart, removeFromWishlist } = useContext(StoreContext);
  
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white px-6 md:px-20 py-12">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-12 tracking-wider">
        Your Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <div className="text-center mt-20">
          <h2 className="text-2xl mb-4">Your wishlist is empty 💔</h2>
          <button className="px-6 py-3 bg-lime-300 text-black rounded-lg font-semibold hover:bg-lime-400 transition">
            Continue Shopping
          </button>
        </div>
      ) : (

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-[#111] border border-[#222] rounded-xl overflow-hidden 
                         hover:-translate-y-2 hover:shadow-xl hover:shadow-lime-300/20 
                         transition duration-500"
            >

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover hover:scale-110 transition duration-700"
                />

                {/* Remove Icon */}
                <button onClick={() => removeFromWishlist(item.id)}
                 className="absolute top-3 right-3 bg-black/70 p-2 rounded-full text-red-400 hover:text-red-600 transition">
                  <FaTrash />
                </button>
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold mb-2">
                  {item.name}
                </h3>

                <p className="text-lime-300 text-xl font-bold mb-4">
                  ${item.price.toFixed(2)}
                </p>

                {/* Add To Cart Button */}
                <button onClick={() => addToCart(item)}
                 className="w-full cursor-pointer py-3 rounded-lg bg-gradient-to-r 
                                   from-lime-200 to-lime-300 text-black font-bold 
                                   hover:from-lime-300 hover:to-lime-400 
                                   transition duration-300 flex items-center justify-center gap-2">
                  <FaShoppingCart />
                  Add To Cart
                </button>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default Wishlist;