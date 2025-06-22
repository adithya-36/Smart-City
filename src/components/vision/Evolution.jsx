import React from 'react'
import CityEvolutionImage from '../../assets/images/visionEvolution.jpg'

const Evolution = () => {
  return (
    <div className="mb-16 max-w-6xl mx-auto px-4 md:px-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#184E77]">
        City Evolution & Identity
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="border border-gray-200">
          <img 
            src={CityEvolutionImage} 
            alt="City Evolution" 
            className="w-full h-auto object-cover"
          />
        </div>
        
        <div className="bg-white border border-gray-200 p-6">
          <ul className="space-y-4">
            {[
              "Derived from 'Thiru-Anantha-Puram' meaning The town of Lord Anantha",
              "Marthanda Varna founded the princely state of Thiruvithamkoor with Thiruvananthapuram as the capital in 1745",
              "Acted as trading post for spices, sandalwood and ivory during pre-colonial and colonial period",
              "Municipality set up in 1920 and upgraded to Corporation in 1940",
              "International tourist destination - Shri Anantha Padmanabhaswamy Temple and Kovalam Beach",
              "Hosts the Annual International Film Festival",
              "Thumba Equatorial Rocket Launching Station is located here"
            ].map((item, index) => (
              <li 
                key={index} 
                className="flex items-start group"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-[#1E6091] flex items-center justify-center mr-3 mt-1 group-hover:bg-[#184E77] transition-colors">
                  <span className="text-xs font-bold text-white">{index + 1}</span>
                </div>
                <span className="text-gray-700 group-hover:text-[#184E77] transition-colors">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Evolution