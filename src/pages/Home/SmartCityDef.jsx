import React from 'react';
import CityDefBanner from '../../assets/banners/cityDefBanner.jpg';
import SmartCityDefImage from '../../assets/images/smartCityDef.jpg';

const SmartCityDef = () => {
  return (
    <div className="bg-gray-50">
      {/* Banner */}
      <div className="relative h-48 md:h-64 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 60, 80, 0.85), rgba(0, 128, 128, 0.6)), url(${CityDefBanner})`,
          }}
        ></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-white text-3xl md:text-4xl font-bold text-center px-4 drop-shadow-lg">
            What is a Smart City
          </h1>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* YouTube Video Section - Taller */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Understanding Smart Cities
              </h2>
              <h3 className="text-xl text-teal-600 font-semibold">
                Solving Urban Problems Using Technology
              </h3>
            </div>
            
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg h-[350px] md:h-[500px]">
            <iframe 
              src="https://www.youtube.com/embed/nnyRZotnPSU"
              title="Smart City Explained"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Image Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Smart City Components
          </h2>
          <div className="border-4 border-teal-500 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
            <img 
              src={SmartCityDefImage} 
              alt="Smart City Components Diagram"
              className="w-full h-auto object-contain"
            />
          </div>
          <p className="mt-4 text-gray-600 italic text-center">
            Visual representation of integrated smart city systems
          </p>
        </div>
      </div>
    </div>
  );
}

export default SmartCityDef;