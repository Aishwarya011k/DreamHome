
import React from 'react';
import { FaComments, FaQuestionCircle, FaEnvelope } from 'react-icons/fa';

const FAQBox = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-20 text-center">
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#2B1B12]">
          Do You Have Any Questions?
        </h2>
        <p className="text-lg md:text-xl font-semibold text-[#2B1B12]">
          Get Help From Us
        </p>

        {/* Support Options */}
        <div className="flex justify-center gap-10 mt-6 flex-wrap text-[#5C3D2E]">
          <div className="flex items-center gap-2 text-sm md:text-base">
            <FaComments className="text-lg" />
            <span>Chat live with our support team</span>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base">
            <FaQuestionCircle className="text-lg" />
            <span>Browse our FAQ</span>
          </div>
        </div>

        {/* Email input form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center justify-center max-w-md mx-auto gap-4 mt-8"
        >
          <div className="relative w-full sm:w-[70%]">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#5C3D2E]" />
            <input
              type="email"
              placeholder="Enter your email address..."
              className="w-full pl-10 pr-4 py-3 rounded-md bg-[#EBDCD1] placeholder-[#5C3D2E] text-[#2B1B12] focus:outline-none shadow"
            />
          </div>
          <button
            type="submit"
            className="bg-[#2B1B12] text-white px-6 py-3 rounded-md hover:bg-[#1F130C] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default FAQBox;
