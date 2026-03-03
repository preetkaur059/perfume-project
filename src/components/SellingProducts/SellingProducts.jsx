import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import products from '../Temp/Temp'
import Cards from '../Cards/Cards';

const SellingProducts = () => {
    const categories = ['All','men', 'women', 'unisex'];
    const [activeTab, setActiveTab] = useState('All');

    let filteredItems = activeTab === 'All' ? products : products.filter(item => item.category.toLowerCase() === activeTab.toLowerCase());

    // Render Cards 
    const renderProducts  = filteredItems.map((product, index)=>(
        <Cards
         key={product.id}
         product={product}/>
    ) )

  return (
    <div className=' bg-black pt-10'>
        <div className="max-w-[1300px] mx-auto">
      <div className="text-center">
        <Heading highlight="Best Selling Products"/>
      </div>

    <div className="flex mx-auto justify-center mt-5 gap-4 ">
        {categories.map((category) =>{
            return (
                <button key={category} 
                className={`transform transition duration-500 hover:scale-105 cursor-pointer px-5 py-2 text-lg
                    ${activeTab === category ? 'bg-gradient-to-b from-lime-200 to-lime-300 font-bold  text-black' : 'bg-white font-medium text-black'}`}
                    onClick={() =>{
                        setActiveTab(category)
                    }}>{category}</button>
            )
        })}
    </div>
      <div className="grid grid-cols-3 gap-10 mt-20">
        {renderProducts}
      </div>
    </div>
    </div>
  )
}

export default SellingProducts
