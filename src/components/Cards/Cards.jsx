import React from 'react'
import { FaHeart, FaPlus, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Cards = ({ product }) => {
    return (
        <div className="bg-[#111] overflow-hidden border border-[#222] 
                        transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-lime-300/20">

            {/* Top Icons */}
            <div className="flex justify-between items-center p-4 absolute absolute top-4 left-2 w-full z-10">
                <span className="text-white text-xl hover:scale-110 cursor-pointer hover:text-lime-400 transition">
                    <FaHeart />
                </span>

                <Link to = '/cart'
                 className="bg-lime-200 text-xl text-black cursor-pointer p-2 mr-3 
                                   hover:scale-110 transition">
                    <FaPlus />
                </Link>
            </div>

            {/* Image Section */}
            <div className=" relative w-full h-62 overflow-hidden">
                <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
            </div>

            {/* Content */}
            <div className="text-center pt-5">
                <h3 className="text-white text-lg mb-2 tracking-wide">
                    {product.name}
                </h3>

                
                    <p className='flex justify-around'>
                    <p className="text-[#e2f2b0] text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
                    <span className="flex text-yellow-400 mt-1 text-xl gap-1">{Array(product.rating).fill().map((_, i) => ( <FaStar key={i} />))} </span>
                </p>
                

                {/* <button className="w-full py-3 rounded-lg bg-gradient-to-r 
                                   from-lime-200 to-lime-300 text-black font-bold 
                                   hover:from-lime-300 hover:to-lime-400 
                                   transition duration-300">
                    Add To Cart
                </button> */}
                {/* <span>{product.rating}</span> */}
            </div>

        </div>
    )
}

export default Cards