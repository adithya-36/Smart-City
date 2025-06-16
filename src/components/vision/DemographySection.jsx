// DemographySection.jsx
import React from 'react'
import AreaDemographyImage from '../../assets/images/visionArea.jpg'

const DemographySection = () => {
  const stats = [
    { label: "Average density", value: "4,470 persons/sq.Km" },
    { label: "Sex ratio", value: "1,088 TO 1,000" },
    { label: "Slum population", value: "75,623 persons" },
    { label: "Households and average size", value: "1,96,202 hhs, 4 persons/HH" },
    { label: "Average literacy rate", value: "86%" }
  ];

  return (
    <div className="mb-16">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center" style={{ color: '#1A759F' }}>
        Area and Demography
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img 
            src={AreaDemographyImage} 
            alt="Area Demography" 
            className="w-full h-96 px-12 rounded-xl shadow-lg"
          />
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="p-4 rounded-lg border border-gray-200"
                style={{ backgroundColor: index % 2 === 0 ? '#f0f9ff' : '#f8fafc' }}
              >
                <p className="font-semibold" style={{ color: '#1E6091' }}>{stat.label}</p>
                <p className="text-lg font-bold mt-1" style={{ color: '#168AAD' }}>{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DemographySection