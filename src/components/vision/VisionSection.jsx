// VisionSection.jsx
import React from 'react'

const VisionSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <div 
        className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4"
        style={{ borderColor: '#1E6091' }}
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1A759F' }}>
          Vision
        </h1>
        <p className="text-gray-700 leading-relaxed">
          A vibrant & alluring capital city that is inclusive, safe & accessible and which respects its natural environment & celebrates its heritage & culture.
        </p>
      </div>
      
      <div 
        className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4"
        style={{ borderColor: '#18AE77' }}
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1A759F' }}>
          Strategy
        </h1>
        <p className="text-gray-700 leading-relaxed">
          The five Strategic Pillars that lay the foundation for the Vision Statement are derived from City Profile, Citizen Engagement & SWOT analysis. Below are listed the key focus areas – Strategic Direction & Goals, that will support & build on the Vision.
        </p>
      </div>
    </div>
  )
}

export default VisionSection