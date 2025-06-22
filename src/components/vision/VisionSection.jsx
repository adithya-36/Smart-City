import React from 'react';

const VisionSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div 
        className="bg-white p-6 md:p-8 border-l-4 border-[#1E6091] shadow-sm"
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-[#184E77]">
          Vision
        </h1>
        <p className="text-gray-700 leading-relaxed">
          A vibrant & alluring capital city that is inclusive, safe & accessible and which respects its natural environment & celebrates its heritage & culture.
        </p>
      </div>
      
      <div 
        className="bg-white p-6 md:p-8 border-l-4 border-[#1E6091] shadow-sm"
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-[#184E77]">
          Strategy
        </h1>
        <p className="text-gray-700 leading-relaxed">
          The five Strategic Pillars that lay the foundation for the Vision Statement are derived from City Profile, Citizen Engagement & SWOT analysis. Below are listed the key focus areas – Strategic Direction & Goals, that will support & build on the Vision.
        </p>
      </div>
    </div>
  );
};

export default VisionSection;