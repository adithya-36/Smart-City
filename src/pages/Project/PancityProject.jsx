import React from 'react';
import Banner from '../../assets/banners/pancityBanner.png';
import TrafficImage from '../../assets/images/traffic.jpg';
import SMDS from '../../assets/images/smds.jpg';
import ICCC from '../../assets/images/iccc.jpg';

const PancityProject = () => {
  return (
    <div className="bg-gray-50">
      {/* Banner */}
      <div className="relative h-48 md:h-64 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center object-cover"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 60, 80, 0.85), rgba(0, 128, 128, 0.6)), url(${Banner})`,
          }}
        ></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4 drop-shadow-lg">
            Pancity Projects
          </h1>
        </div>
      </div>

      {/* Projects Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Project 1 - Left Image */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16 md:mb-20">
          <div className="w-full md:w-1/2">
            <img 
              src={TrafficImage} 
              alt="Traffic Management System" 
              className="rounded-xl shadow-lg w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500 inline-block">
              Selection of System Integrator TSCCC - (ITMS & ATCS)
            </h1>
            <p className="text-gray-600 leading-relaxed">
              The objective of the TSCCC project is to develop an Intelligent Traffic Management System (ITMS) and adaptive traffic control system (ATCS) to improve the efficiency and effectiveness of the traffic on Trivandrum roads. Implementation of ITMS and ATCS is an initiative taken by Smart City Trivandrum Limited (SCTL) to provide a secure and pleasant road experience to the citizens of Trivandrum. Also, when aided with the security and surveillance cameras, the city authorities aim to enhance the safety and security of the city and its dwellers. The project integrates various subsystems (such as CCTV, Vehicle Detection, Signal synchronization, communication, variable message signs, etc.) across 113 locations in the city of Trivandrum.
            </p>
          </div>
        </div>

        {/* Project 2 - Right Image */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16 md:mb-20">
          <div className="w-full md:w-1/2">
            <img 
              src={SMDS} 
              alt="Smart Mosquito Density System" 
              className="rounded-xl shadow-lg w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-green-500 inline-block">
              Smart Mosquito Density System
            </h1>
            <p className="text-gray-600 leading-relaxed">
              The mosquito detection and classification system utilizes a combination of optical sensor technologies to detect, count and classify by species. This sensor package will be housed in a weather resistant enclosure designed to be cost effective for manufacture and low maintenance, requiring little human interaction after installation. Sensors will be installed on electric poles or other relevant public infrastructure where there is a source of electricity.
            </p>
          </div>
        </div>

        {/* Project 3 - Left Image */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img 
              src={ICCC} 
              alt="Integrated City Control Centre" 
              className="rounded-xl shadow-lg w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-amber-500 inline-block">
              Selection of Master System Integrator ICCC
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Integrated City Control Centre (ICCC) is envisaged as the nerve centre for managing the city operations as well as monitoring various critical components of the city administration. The ICCC is envisaged to provide co-relative analytics that uses the various analytics and co-relates them to provide deeper insight to city's problems. The analytics provide actionable items upon which action can be taken by city officials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PancityProject;