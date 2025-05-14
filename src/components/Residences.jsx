import React from 'react';
import { residence1, residence2, residence3 } from '../assets';
import { FaMapMarkerAlt } from 'react-icons/fa';

const residences = [
  {
    image: residence1,
    location: 'San Francisco, California',
    rooms: '4 Rooms',
    size: '1,500 sq ft',
    price: '$2,500,000',
  },
  {
    image: residence2,
    location: 'Beverly Hills, California',
    rooms: '3 Rooms',
    size: '1,500 sq ft',
    price: '$850,000',
  },
  {
    image: residence3,
    location: 'Palo Alto, California',
    rooms: '6 Rooms',
    size: '4,000 sq ft',
    price: '$3,700,000',
  },
];

const Residences = () => (
  <section className="py-12 px-4 sm:px-6 lg:px-20 bg-white space-y-10">
    <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-800">Our Popular Residences</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {residences.map((residence, idx) => (
        <div
          key={idx}
          className="bg-[#F9F5F1] rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
        >
          <img
            src={residence.image}
            alt={`Image of ${residence.location}`}
            className="w-full h-52 sm:h-56 md:h-60 lg:h-64 object-cover"
          />

          <div className="p-5 space-y-2">
            <div className="flex items-center text-gray-700 text-sm gap-2">
              <FaMapMarkerAlt className="text-[#5C3D2E]" />
              <span className="text-sm sm:text-base">{residence.location}</span>
            </div>

            <p className="text-sm sm:text-base text-gray-600">
              {residence.rooms} • {residence.size}
            </p>

            <button className="mt-3 w-full sm:w-auto bg-[#5C3D2E] text-white text-sm sm:text-base px-4 py-2 rounded-md hover:bg-[#4e3227] transition">
              Sign up
            </button>

            <p className="text-[#5C3D2E] font-bold text-lg sm:text-xl mt-2">{residence.price}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Residences;
