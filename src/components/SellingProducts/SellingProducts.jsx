import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import productList from '../Temp/Temp'
import Cards from '../Cards/Cards';
import { Link } from 'react-router-dom';
import noproductfound from '../../assets/no.avif'
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import Button from '../Button/Button';
import Allproducts from '../Allproducts/Allproducts';
import { useNavigate } from "react-router-dom";

const SellingProducts = () => {
  const categories = ['All', 'Men', 'Women', 'Unisex'];
  const [activeTab, setActiveTab] = useState('All');

  const { addToCart, searchItem } = useContext(StoreContext);
  const navigate = useNavigate();

  let filteredItems = activeTab === 'All' ? productList : productList.filter(item => item.category.toLowerCase() === activeTab.toLowerCase());

  const searchedItems = filteredItems.filter(product =>
        product.name.toLowerCase().includes(searchItem.toLowerCase())
    );
  // Render Cards 
  const renderProducts = searchedItems.slice(0, 8).map((product, index) => (
    <Cards
      key={product.id}
      product={product}
      addToCart={addToCart} />
  ))

  return (
    <div className=' bg-black pt-10'>
      <div  id='product-section' className="max-w-[1300px] mx-auto">
        <div className="text-center">
          <Heading highlight="Best Selling Products" />
        </div>

        <div className="flex mx-auto justify-center mt-5 gap-4 ">
          {categories.map((category) => {
            return (
              <button key={category}
                className={`transform transition duration-500 hover:scale-105 cursor-pointer px-5 py-2 text-lg
                    ${activeTab === category ? 'bg-gradient-to-b from-lime-200 to-lime-300 font-bold  text-black' : 'bg-white font-medium text-black'}`}
                onClick={() => {
                  setActiveTab(category)
                }}>{category}</button>
            )
          })}
        </div>
        <div className="grid grid-cols-4 gap-10 mt-20">
          {searchedItems.length === 0 ?
                        <p className='col-span-full text-white text-3xl flex justify-center items-center'>NO PRODUCT FOUND</p>
                        : (renderProducts)}
        </div>
        <div className='w-fit  pb-20 mx-auto mt-10'>
          {/* <Link to='/' className='bg-gradient-to-b font-medium from-lime-200 to-lime-300 text-black px-8 py-3 md:text-xl text-md  hover:scale-105 hover:from-lime-300 to-lime-400 transition-all duration-300 inline-block cursor-pointer'>Explore Collection →</Link> */}
          <button onClick={() => navigate("/Allproducts")}
           className = 'text-center cursor-pointer mt-4 px-4 py-2 bg-[#e2f2b0] text-black border-2 border-[#f5f5dc] text-[1.3rem] font-bold transition-transform duration-200 hover:scale-[1.03] hover:bg-[#efc3c5]'>
            Explore Collection →</button>
        </div>
      </div>
    </div>
  )
}

export default SellingProducts
