import React from 'react';
import { person1, person2, person3 } from '../assets';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sarah Nguyen',
    location: 'San Francisco',
    image: person1,
    rating: 5.0,
    comment:
      "Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.",
  },
  {
    name: 'Michael Rodriguez',
    location: 'San Diego',
    image: person2,
    rating: 4.5,
    comment:
      "I had a fantastic experience working with Dwello. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!",
  },
  {
    name: 'Emily Johnson',
    location: 'Los Angeles',
    image: person3,
    rating: 5.0,
    comment:
      "Dwello made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn't be happier with my new home!",
  },
];

const Testimonials = () => (
  <section className="py-16 px-4 sm:px-6 lg:px-20 bg-[#FFF7F2] space-y-10">
    <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-800">
      What People Say About Dwello
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((t, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 space-y-4">
          <img
            src={t.image}
            alt={t.name}
            className="w-16 h-16 rounded-full mx-auto object-cover"
          />
          <div className="text-center">
            <p className="text-gray-600 text-sm mb-2">"{t.comment}"</p>
            <h4 className="font-semibold text-gray-800">{t.name}</h4>
            <p className="text-sm text-gray-500">{t.location}</p>
            <div className="flex justify-center items-center gap-1 mt-1 text-yellow-500 text-sm">
              <FaStar />
              <span className="text-gray-700">{t.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Navigation dots */}
    <div className="flex justify-center items-center gap-2 pt-4">
      <span className="w-3 h-3 rounded-full bg-[#5C3D2E]"></span>
      <span className="w-3 h-3 rounded-full bg-gray-300"></span>
    </div>
  </section>
);

export default Testimonials;
