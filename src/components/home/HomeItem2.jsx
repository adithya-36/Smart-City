import React from 'react';
import Vision from '../../assets/images/smart-city-vision.png';

const HomeItem2 = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left: Content */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003049] mb-6">
            Vision
          </h2>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed border-l-4 border-[#003049] pl-4 py-1">
            A vibrant & alluring capital city that is inclusive, safe & accessible and which respects its natural environment & celebrates its heritage & culture.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#003049] mb-6 mt-10">
            Strategy
          </h2>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed border-l-4 border-[#003049] pl-4 py-1">
            The five Strategic Pillars that lay the foundation for the Vision Statement are derived from City Profile, Citizen Engagement & SWOT analysis. Below are listed the key focus areas – Strategic Direction & Goals, that will support & build on the Vision.
          </p>
          
          <a href="/MissonVision">
            <button className="bg-[#003049] hover:bg-[#001a2c] text-white px-8 py-3 text-lg font-medium transition duration-300 transform hover:scale-105">
              Read More
            </button>
          </a>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 transform-skew-y-3"></div>
            <img 
              src={Vision} 
              alt="Vision and Strategy" 
              className="relative w-full max-w-md object-contain z-10 shadow-lg" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeItem2;