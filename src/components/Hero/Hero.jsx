import React from "react";
import perfumeImg from "../../assets/g2.png";
import bgImg from "../../assets/g4.png"; // background image

const Hero = () => {
  return (
    <div
      className="relative isolate pt-32 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >

      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/70 -z-10"></div> */}

      {/* Container */}
      <div className="max-w-[1300px] mx-auto px-4">

        <div className="min-h-[calc(100vh-14vh)] flex flex-col md:flex-row">

          {/* Left Text */}
          <div className="flex-1 flex items-center">
            <h1 className="text-white text-3xl md:text-7xl font-serif">
              THE <br/> FRAGRENCE <br/> OF LIFE
            </h1>
          </div>

          {/* Center Image */}
          {/* <div className="flex-1 flex justify-center relative">
            <img
              src={perfumeImg}
              alt="perfume"
              className="h-[25rem] md:h-[70vh] pt-6 transition-transform duration-500 hover:scale-105"
            />
          </div> */}

          {/* Right Text */}
           <div className="flex-1 md:self-end md:mb-35 flex justify-end">
            <div className="w-[400px] h-[150px] scroll-box overflow-y-scroll p-3">

              <p className="text-white text-sm md:text-xl text-right">
                A timeless fragrance that reflects elegance, confidence, and modern charm, crafted 
                for individuals who appreciate true luxury. Each note is carefully blended to 
                create a scent that feels unique, memorable, and expressive. Our perfumes are 
                designed to elevate everyday moments, leaving a subtle yet lasting impression
                 wherever you go. Discover a fragrance that complements your personality and 
                 becomes a signature of your style and presence.
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;