// Connectivity.jsx
import React from 'react'
import Image from '../../assets/images/visionStrategy.jpg'

const Connectivity = () => {
  return (
    <div className="mb-16">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center" style={{ color: '#1A759F' }}>
        Strategic Location and Connectivity
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <img 
            src={Image} 
            alt="Strategic Location and Connectivity" 
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4" style={{ borderColor: '#52B69A' }}>
            <h2 className="text-xl font-bold mb-2" style={{ color: '#1E6091' }}>8TH BUSIEST AIRPORT IN INDIA.</h2>
            <p className="text-gray-700">
              The International Airport is considered an all-weather airport and is busiest in terms of international traffic.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4" style={{ borderColor: '#76C893' }}>
            <h2 className="text-xl font-bold mb-2" style={{ color: '#1E6091' }}>CENTRAL RAILWAY STATION</h2>
            <p className="text-gray-700">
              is the largest railway station in Kerala in terms of passenger movement and an important rail hub in Southern Railway. There are direct rail connections to all major cities in India.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4" style={{ borderColor: '#99D98C' }}>
            <h2 className="text-xl font-bold mb-2" style={{ color: '#1E6091' }}>KSRTC</h2>
            <p className="text-gray-700">
              is one of the oldest state run public bus transport services in India. Daily scheduled distance is over 14,22,546 km
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-[#D9ED92] bg-opacity-30 p-6 rounded-xl">
        <ul className="list-disc list-inside space-y-2">
          {[
            "Administrative capital. located along the west coast (southernmost part of India)",
            "Acts as a gateway to the Middle East and South Asian countries",
            "Southern Air Command headquarters of the Indian Air Force"
          ].map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Connectivity