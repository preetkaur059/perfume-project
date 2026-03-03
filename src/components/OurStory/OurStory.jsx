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
            
            <p className="text-white text-[1.2rem] pb-7 md:text-[1.2rem] text-[1rem]">
              A timeless fragrance that speaks of grace, confidence, and charm —
              designed for those who believe in making every scent their signature.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              alias cumque totam quod iusto soluta Vel, quod. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Laboriosam tempore eos
              cumque, fugit, praesentium asperiores soluta ab sit quasi nam
              architecto suscipit corrupti nisi fugiat ex fuga saepe optio nulla!
              Nam dolorum repellat similique aliquam, sint quis. Esse quas,
              accusantium laboriosam magnam, laborum dolorem commodi sunt mollitia
              ea iste laudantium sequi expedita ab quidem veritatis fugit ratione,
              ducimus quibusdam maxime.
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