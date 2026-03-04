import React from "react";
import storyimg from "../../assets/perfume1.png";
import Heading from "../Heading/Heading";

const OurStory = () => {
  return (
    <section className="bg-[#101010] ">
      <div className="max-w-[1300px] mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-around items-center">
          
          {/* Image */}
          <div className="m-[5rem_2rem]">
            <img
              src={storyimg}
              alt="perfume-image"
              className="h-[570px] transition-transform duration-500 ease-in hover:scale-105 hidden md:block"
            />
          </div>

          {/* Content */}
          <div className="w-full max-w-[600px] m-12">
             <Heading highlight=" Our Little Story"/>
            
            <p className="text-white text-[1rem] pb-7 md:text-[1.1rem] text-[1rem]">
              A timeless fragrance that speaks of grace, confidence, and charm — designed for those who believe in making every scent their signature. Our journey began with a simple passion: to create perfumes that do more than just smell beautiful. We wanted every bottle to capture emotion, elegance, and individuality in its purest form.

From delicate floral notes to deep woody and oriental blends, each fragrance is carefully crafted to reflect personality and mood. Inspired by luxury traditions and modern sophistication, our scents are made for those who walk with confidence and leave a lasting impression wherever they go.

 Whether it’s a special evening, a busy workday, or a memorable celebration, our fragrances are designed to stay with you and be remembered.

This is more than just a scent. It’s your identity in a bottle — elegant, powerful, unforgettable.
            </p>

            <a
              href="#"
              className="inline-block px-4 py-2 bg-[#e2f2b0] text-black text-[1.2rem] font-bold border-2 border-beige hover:bg-[#efc3c5] transition"
            >
              Read More
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;