import React from 'react';
import { FaCheckCircle, FaHeadset, FaFileContract, FaMapMarkedAlt } from 'react-icons/fa';
import { dreamHomeImg } from '../assets'; // Ensure correct path

const stats = [
  { number: '8K+', label: 'Houses Available' },
  { number: '6K+', label: 'Houses Sold' },
  { number: '2K+', label: 'Trusted Agents' },
];

const features = [
  {
    icon: <FaCheckCircle className="text-3xl text-[#5C3D2E]" />,
    title: 'Expert Guidance',
    description: 'Benefit from our team’s seasoned expertise for a smooth buying experience.',
  },
  {
    icon: <FaHeadset className="text-3xl text-[#5C3D2E]" />,
    title: 'Personalized Service',
    description: 'Our services adapt to your unique needs, making your journey stress-free.',
  },
  {
    icon: <FaFileContract className="text-3xl text-[#5C3D2E]" />,
    title: 'Transparent Process',
    description: 'Stay informed with our clear and honest approach to buying your home.',
  },
  {
    icon: <FaMapMarkedAlt className="text-3xl text-[#5C3D2E]" />,
    title: 'Exceptional Support',
    description: 'Providing peace of mind with responsive and attentive customer service.',
  },
];

const Features = () => {
  return (
    <section className="py-20 px-6 lg:px-20 bg-white space-y-16">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-1">
          <img
            src={dreamHomeImg}
            alt="Dream Home"
            className="w-full h-auto rounded-2xl shadow-xl"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            We Help You To Find<br />
            Your <span className="text-[#5C3D2E]">Dream Home</span>
          </h2>
          <p className="text-gray-600">
            From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-2">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-3xl font-bold text-[#5C3D2E]">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center space-y-10">
        <h3 className="text-2xl font-bold text-gray-800">Why Choose Us</h3>
        <p className="text-gray-600 max-w-xl mx-auto">
          Elevating your home buying experience with expertise, integrity, and unmatched personalized service
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#F5E9E1] p-6 rounded-xl shadow-md hover:shadow-lg transition text-left space-y-3"
            >
              <div>{feature.icon}</div>
              <h4 className="text-lg font-semibold text-gray-800">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;



