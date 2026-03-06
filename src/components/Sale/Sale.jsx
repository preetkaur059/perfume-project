import React from 'react'
import saleimg from '../../assets/sale.png'
import Button from '../Button/Button'

const Sale = () => {
  return (
    <section class="bg-black relative isolate overflow-hidden">

  {/* <!-- Glow effects --> */}
  <div class="absolute top-12 left-20 w-[15rem] h-[15rem] rounded-full blur-[150px] bg-orange-500 -z-10"></div>
  <div class="absolute bottom-12 right-20 w-[15rem] h-[15rem] rounded-full blur-[150px] bg-blue-500 -z-10"></div>

  <div class="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center px-4">

    {/* <!-- Product Image --> */}
    <div class="p-8">
      <img
        src={saleimg}
        class="h-[20rem] transition-transform duration-300 hover:scale-[1.02]"
      />
    </div>

    {/* <!-- Text Content --> */}
    <div class="p-16 flex flex-col gap-3">

      <h3 class="text-[#efc3c5] tracking-wider text-[1.3rem]">
        CELEBRATE DAY SALE!
      </h3>

      <h1 class="text-white text-[2.2rem]">
        Save 25% Off On All Items Collection
      </h1>

      <Button
        content ='Shop Now'/>
    </div>
  </div>
</section>
  )
}

export default Sale
