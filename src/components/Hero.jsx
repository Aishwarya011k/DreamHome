import React from 'react';
import { heroImg } from '../assets'; // Ensure the image path is correct
import { FaMapMarkerAlt, FaHome, FaDollarSign } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-[#F9F5F1] relative px-6 lg:px-20 pt-16 pb-28 lg:pb-32 flex flex-col lg:flex-row items-center gap-12">
      {/* Left Side: Text & Button */}
      <div className="flex-1 space-y-6 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
          Find Your <br />
          <span className="text-[#5C3D2E]">Dream Home</span>
        </h1>
        <p className="text-gray-600 max-w-md mx-auto lg:mx-0">
          Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision.
        </p>
        <button className="bg-[#5C3D2E] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#43281E] transition">
          Sign up
        </button>
      </div>

       <div className=" bg-[#F9F5F1] flex-1 flex justify-center">
        <img
          src={heroImg}
          alt="Modern House"
          className=" bg-[#F9F5F1] max-w-[500px] w-full h-auto rounded-2xl shadow-xl"
        />
      </div>

      {/* Search Box – Floating */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-6 w-full h-10 max-w-5xl px-4">
        <div className="bg-[#EBD6C8] h-30 shadow-md rounded-xl py-4 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          <div className="flex items-center gap-2 bg-white rounded-md px-3 py-2">
            <FaMapMarkerAlt className="text-[#5C3D2E]" />
            <select className="bg-transparent outline-none w-full text-sm text-gray-700">
              <option>Location</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
            </select>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-md px-3 py-2">
            <FaHome className="text-[#5C3D2E]" />
            <select className="bg-transparent outline-none w-full text-sm text-gray-700">
              <option>Type</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Studio</option>
            </select>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-md px-3 py-2">
            <FaDollarSign className="text-[#5C3D2E]" />
            <select className="bg-transparent outline-none w-full text-sm text-gray-700">
              <option>Price Range</option>
              <option>Under $500K</option>
              <option>$500K - $1M</option>
              <option>Over $1M</option>
            </select>
          </div>
          <button className="bg-[#5C3D2E] text-white rounded-md py-2 font-semibold hover:bg-[#43281E] transition w-full">
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
