import React from "react";
import { Link } from "react-router-dom";

const OurServices = () => {
  return (
    <div className="section-container my-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Our Story & Services</p>
            <h2 className="title">Our Culinary Journey And Services</h2>
            <p className="my-5 text-secondary leading-[30px]">
              Rooted in passion, we curate unforgettable dining experiences and
              offer exceptional services, blending culinary artistry with warm
              hospitality.
            </p>

            <button className="bg-aquagr font-semibold btn text-white px-8 py-3 rounded-full">
              Explore
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
            {/* Service items */}
          </div>
          <div className="flex justify-center mt-5">
            {/* Links for owner login and signup */}
            <Link to="/ownerlogin" className="mr-4 text-aquagr font-semibold hover:text-indigo-600">
              Owner Login
            </Link>
            <Link to="/ownersignup" className="text-aquagr font-semibold hover:text-indigo-600">
              Owner Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
