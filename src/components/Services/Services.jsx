import React from 'react'
import Heading from '../Heading/Heading'

const Services = () => {
  return (
    <section class="bg-[#101010] py-20">
  <div class="max-w-[1300px] mx-auto px-4 flex flex-col items-center gap-12 text-center">

    {/* <!-- Heading --> */}
    <Heading highlight='Our Services'/>

    {/* <!-- Services Grid --> */}
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">

      {/* <!-- Service 1 --> */}
      <div class="group relative isolate overflow-hidden">

        {/* <!-- animated top line --> */}
        <span class="absolute left-0 top-0 w-full h-[0.3rem] bg-lime-200 transition-all duration-300 group-hover:h-full -z-10"></span>

        <h4 class="text-white text-[2rem] pt-6 pb-3 group-hover:text-black">
          Free Shipping
        </h4>

        <p class="text-white text-[1rem] px-3 pb-8 group-hover:text-black group-hover:font-medium">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, nemo minus. 
          Laboriosam blanditiis cumque enim exercitationem minus accusantium unde et cupiditate?
        </p>

      </div>

      {/* <!-- Service 2 --> */}
      <div class="group relative isolate overflow-hidden">

        <span class="absolute left-0 top-0 w-full h-[0.3rem] bg-lime-200 transition-all duration-300 group-hover:h-full -z-10"></span>

        <h4 class="text-white text-[2rem] pt-6 pb-3 group-hover:text-black">
          Free Customer Support
        </h4>

        <p class="text-white text-[1rem] px-3 pb-8 group-hover:text-black group-hover:font-medium">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, nemo minus. 
          Laboriosam blanditiis cumque enim exercitationem minus accusantium unde et cupiditate?
        </p>

      </div>

      {/* <!-- Service 3 --> */}
      <div class="group relative isolate overflow-hidden">

        <span class="absolute left-0 top-0 w-full h-[0.3rem] bg-lime-200 transition-all duration-300 group-hover:h-full -z-10"></span>

        <h4 class="text-white text-[2rem] pt-6 pb-3 group-hover:text-black">
          Payment Security
        </h4>

        <p class="text-white text-[1rem] px-3 pb-8 group-hover:text-black group-hover:font-medium">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, nemo minus. 
          Laboriosam blanditiis cumque enim exercitationem minus accusantium unde et cupiditate?
        </p>

      </div>

    </div>
  </div>
</section>
  )
}

export default Services
