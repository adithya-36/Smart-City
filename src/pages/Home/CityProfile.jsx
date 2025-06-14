import React from 'react'
import CityBanner from '../../assets/banners/cityBanner.jpg'
import TVMMap from '../../assets/images/tvm_map.jpg'
import SmartCity from '../../assets/images/smart-city.png'
import ProjectDiagram from '../../assets/images/projectDiagram.png'
import LocationMarker from '../../assets/images/location.png'
import Border from '../../assets/images/border.png'

const CityProfile = () => {
  return (
    <div className="font-sans">
      {/* Banner */}
      <div className="relative h-48 md:h-48 lg:h-48 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 60, 80, 0.85), rgba(0, 128, 128, 0.6)), url(${CityBanner})`,
          }}
        ></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center px-4 drop-shadow-lg">
            City Profile
          </h1>
        </div>
      </div>

      {/* City Map and Description */}
      <div className="px-4 py-8 md:px-12 md:py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl overflow-hidden shadow-xl border-2 border-[#1E6091]">
            <img 
              src={TVMMap} 
              alt="Map of Thiruvananthapuram" 
              className="w-full h-full p-10 object-cover"
            />
          </div>
          
          <div className="space-y-4 text-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold text-[#184E77] mb-4">
              About Thiruvananthapuram
            </h2>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-[#caf0f8] rounded-full p-2 mr-3 mt-1">
                  <svg className="w-5 h-5 text-[#1E6091]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p><strong className="text-[#1E6091]">Thiruvananthapuram</strong> - Capital city of Kerala</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#caf0f8] rounded-full p-2 mr-3 mt-1">
                  <svg className="w-5 h-5 text-[#1E6091]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Referred by Mahatma Gandhi as the <em className="text-[#1E6091] italic">"Evergreen city of India"</em></p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-teal-50 p-4 rounded-lg border border-[#caf0f8]">
                  <p className="font-semibold text-[#184E77]">Population</p>
                  <p className="text-lg">9.86 lakh (2011 Census)</p>
                </div>
                
                <div className="bg-teal-50 p-4 rounded-lg border border-[#caf0f8]">
                  <p className="font-semibold text-[#184E77]">Growth Rate</p>
                  <p className="text-lg">3.25% (2001 - 2011)</p>
                </div>
                
                <div className="bg-teal-50 p-4 rounded-lg border border-[#caf0f8]">
                  <p className="font-semibold text-[#184E77]">Area</p>
                  <p className="text-lg">214.86 sq.km</p>
                </div>
                
                <div className="bg-teal-50 p-4 rounded-lg border border-[#caf0f8]">
                  <p className="font-semibold text-[#184E77]">Population Density</p>
                  <p className="text-lg">4,470 persons/sq.km</p>
                </div>
              </div>
              
              <div className="flex items-start pt-2">
                <div className="bg-[#caf0f8] rounded-full p-2 mr-3 mt-1">
                  <svg className="w-5 h-5 text-[#1E6091]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#184E77]">Dominant Sectors</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-[#caf0f8] text-[#184E77] px-3 py-1 rounded-full text-sm">Tourism</span>
                    <span className="bg-[#caf0f8] text-[#184E77] px-3 py-1 rounded-full text-sm">IT</span>
                    <span className="bg-[#caf0f8] text-[#184E77] px-3 py-1 rounded-full text-sm">Education</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="py-10 px-4 md:px-8 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#184E77] mb-10">
            Explore More About Our City
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {[
              { 
                label: 'City Highlights', 
                icon: <img src={SmartCity} alt="Smart city icon" className="w-12 h-12" />, 
                link: '/city-highlights' 
              },
              { 
                label: 'Smart City Overview', 
                icon: <img src={LocationMarker} alt="Location marker" className="w-12 h-12" />, 
                link: '/smart-city-overview' 
              },
              { 
                label: 'Project Area', 
                icon: <img src={ProjectDiagram} alt="Project diagram" className="w-12 h-12" />, 
                link: '/project-area' 
              },
              { 
                label: 'ABD Area', 
                icon: <img src={Border} alt="Border icon" className="w-12 h-12" />, 
                link: '/abd-area' 
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="flex flex-col items-center justify-center w-36 h-36 md:w-40 md:h-40 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#caf0f8] hover:border-teal-300 group"
              >
                <div className="bg-[#caf0f8] rounded-full p-3 mb-4 group-hover:bg-teal-200 transition-colors">
                  {item.icon}
                </div>
                <span className="text-center font-medium text-[#34A0A4] group-hover:text-teal-900 px-2">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CityProfile