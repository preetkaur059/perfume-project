import React from "react";
// import perfumeImg from "../../assets/orange2.png";
import perfumeImg from "../../assets/perfume4.png";

const Hero = () => {
  return (
    <div className="relative isolate pt-35 pt-10 bg-black overflow-hidden">

      {/* Bottom Blur Layer */}
      <div className="absolute bottom-0 h-[35vh] w-full bg-black blur-[10px] -z-10"></div>

      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2 
      bg-white blur-[100px] 
      h-[30vh] w-[30vh] 
      -z-20"></div>

      {/* Container */}
      <div className="max-w-[1300px] mx-auto px-4">

        {/* Hero Section */}
        <div className="min-h-[calc(100vh-14vh)] flex flex-col md:flex-row">

          {/* Left Text */}
          <div className="flex-1 flex items-center">
            <h1 className="text-white text-3xl md:text-7xl font-serif">
              THE FRAGRENCE OF LIFE
            </h1>
          </div>

          {/* Center Image */}
          <div className="flex-1 flex justify-center relative">
            <img
              src={perfumeImg}
              alt="perfume"
              className="h-[25rem] md:h-[70vh] pt-6 transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Right Scroll Text */}
          <div className="flex-1 md:self-end md:mb-35 flex justify-end">
            <div className="w-[400px] h-[150px] scroll-box overflow-y-scroll p-3">

              <p className="text-white text-sm md:text-xl text-right">
                A timeless fragrance that speaks of grace, confidence, and charm —
                designed for those who believe in making every scent their signature.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus alias cumque totam quod iusto soluta nam numquam libero,
                temporibus iure praesentium tempora possimus accusantium architecto,
                sit, adipisci ipsum! Vel, quod.
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;