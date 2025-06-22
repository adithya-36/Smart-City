import React from 'react';
import CityBanner from '../../assets/banners/cityBanner.jpg';
import TVMMap from '../../assets/images/tvm_map.jpg';
import SmartCity from '../../assets/images/smart-city.png';
import ProjectDiagram from '../../assets/images/projectDiagram.png';
import LocationMarker from '../../assets/images/location.png';
import Border from '../../assets/images/border.png';

const CityProfile = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Banner */}
      <div className="relative h-64 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(24, 78, 119, 0.9), rgba(30, 96, 145, 0.8)), url(${CityBanner})`,
          }}
        ></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
            City Profile
          </h1>
        </div>
      </div>

      {/* City Map and Description */}
      <div className="px-4 py-8 md:px-12 md:py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="border border-gray-200">
            <img 
              src={TVMMap} 
              alt="Map of Thiruvananthapuram" 
              className="w-full h-full p-8 object-contain"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#184E77]">
              About Thiruvananthapuram
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-2 mr-4">
                </div>
                <p className="text-gray-700"><strong className="text-[#184E77]">Thiruvananthapuram</strong> - Capital city of Kerala</p>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 mr-4">
                </div>
                <p className="text-gray-700">Referred by Mahatma Gandhi as the <em className="text-[#1E6091] italic">"Evergreen city of India"</em></p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 border border-gray-200">
                  <p className="font-semibold text-[#184E77]">Population</p>
                  <p className="text-lg text-gray-700">9.86 lakh (2011 Census)</p>
                </div>
                
                <div className="bg-white p-4 border border-gray-200">
                  <p className="font-semibold text-[#184E77]">Growth Rate</p>
                  <p className="text-lg text-gray-700">3.25% (2001 - 2011)</p>
                </div>
                
                <div className="bg-white p-4 border border-gray-200">
                  <p className="font-semibold text-[#184E77]">Area</p>
                  <p className="text-lg text-gray-700">214.86 sq.km</p>
                </div>
                
                <div className="bg-white p-4 border border-gray-200">
                  <p className="font-semibold text-[#184E77]">Population Density</p>
                  <p className="text-lg text-gray-700">4,470 persons/sq.km</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 mr-4">
                </div>
                <div>
                  <p className="font-semibold text-[#184E77]">Dominant Sectors</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-gray-100 text-[#184E77] px-3 py-1 text-sm">Tourism</span>
                    <span className="bg-gray-100 text-[#184E77] px-3 py-1 text-sm">IT</span>
                    <span className="bg-gray-100 text-[#184E77] px-3 py-1 text-sm">Education</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="py-10 px-4 md:px-8 bg-white">
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
                className="flex flex-col items-center justify-center w-36 h-36 md:w-40 md:h-40 bg-white border border-gray-200 hover:border-[#1E6091] transition-colors group"
              >
                <div className="bg-gray-100 p-3 mb-4 group-hover:bg-[#1E6091] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <span className="text-center font-medium text-[#1E6091] group-hover:text-[#184E77] px-2">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityProfile;