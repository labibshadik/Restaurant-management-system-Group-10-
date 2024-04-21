import React from "react";
import bannerImg from "/images/home/banner.png";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse items-center justify-between gap-8">

        {/* img */}
        <div className="md:w-1/2">
          <img src="/images/home/banner-2.png" alt="" />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
            <div className="bg-white px-3 py-2 rounded-2xl flex items-center gap-3 shadow-sm w-64">
              <img src="/images/home/pastas.png" alt=""  className="rounded-2xl"/>
              <div className="space-y-1">
                <h5>Pasta</h5>
                <div className="rating rating-sm">
                      <input type="radio" name="rating-1" className="mask mask-star" />
                      <input type="radio" name="rating-1" className="mask mask-star"  />
                      <input type="radio" name="rating-1" className="mask mask-star" checked/>
                      <input type="radio" name="rating-1" className="mask mask-star" />
                      <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
        
                 
              </div>
            </div>
            <div className="bg-white px-3 py-2 rounded-2xl md:flex items-center gap-3 shadow-sm w-64 hidden">
              <img src="/images/home/pizzas.png" alt=""  className="rounded-2xl"/>
              <div className="space-y-1">
                <h5>Pizza</h5>
                <div className="rating rating-sm">
                      <input type="radio" name="rating-1" className="mask mask-star" />
                      <input type="radio" name="rating-1" className="mask mask-star"  />
                      <input type="radio" name="rating-1" className="mask mask-star" />
                      <input type="radio" name="rating-1" className="mask mask-star" checked/>
                      <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                 
              </div>
            </div>
          </div>
        </div>

        {/* texts */}
        <div className="md:w-1/2 px-4 space-y-7">
        <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Dive into Delights Of Delectable <span className="text-aquagr">Food</span>
          </h2>
          <p className="text-[#4A4A4A] text-xl">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <button className="bg-maroon font-semibold btn text-white px-8 py-3 rounded-full">
            Order Now
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;