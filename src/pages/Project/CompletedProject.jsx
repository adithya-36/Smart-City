import React, { useState } from 'react';
import Banner from '../../assets/banners/completeProjectBanner.png'; 
import Image1 from '../../assets/images/completedProject1.jpg';
import Image2 from '../../assets/images/completedProjects2.jpg';
import Image3 from '../../assets/images/completedProjects3.jpg';
import Image4 from '../../assets/images/completedProjects4.jpg';

const CompletedProject = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  
  // Table data
  const tableData = [
    { no: 1, projectName: "Procurement of buses for KSRTC", amount: "49.06" },
    { no: 2, projectName: "Selection of Master System Integrator ICCC (Phase 1)", amount: "33.37" },
    { no: 3, projectName: "Construction of Multi Level Car Parking at Thampanoor", amount: "18.89" },
    { no: 4, projectName: "Selection of System Integrator for ITMS TSCCC ATCS Phase 1", amount: "18.07" },
    { no: 5, projectName: "Selection of System Integrator for ITMS TSCCC ATCS Phase 2", amount: "16.35" },
    { no: 6, projectName: "Construction of Multi Level Car Parking at A Block, Palayam Ph 1", amount: "15.35" },
    { no: 7, projectName: "ROOF TOP SOLAR-AMERT-PHASE 6", amount: "12.6" },
    { no: 8, projectName: "Roof top solar by AMERT", amount: "12.37" },
    { no: 9, projectName: "CONSTRUCTION OF SMART ROADS - KRFB-PHASE 1", amount: "11.52" },
    { no: 10, projectName: "Deviation of Server Lines and Reconstruction of Brick Manhole", amount: "10.2" },
    { no: 11, projectName: "Construction of OAT and Park at Putnankkandam Maidanam", amount: "9.54" },
    { no: 12, projectName: "CONSTRUCTION OF SMART ROADS - CORPORATION-PHASE 1", amount: "7.42" },
    { no: 13, projectName: "Procurement of buses for KSRTC PHASE 2", amount: "6.48" },
    { no: 14, projectName: "ROOF TOP SOLAR-AMERT-PHASE 2", amount: "6.18" },
    { no: 15, projectName: "ROOF TOP SOLAR-AMERT-PHASE 4", amount: "5.38" },
    { no: 16, projectName: "ROOF TOP SOLAR-AMERT-PHASE 5", amount: "4.56" },
    { no: 17, projectName: "ROOF TOP SOLAR-AMERT-PHASE 3", amount: "4.24" },
    { no: 18, projectName: "Grid-Tied Roof Mounted Solar PV Power Plants at 5 Locations", amount: "3.37" },
    { no: 19, projectName: "Development of Traffic signal CCC building", amount: "2.42" },
    { no: 20, projectName: "Installation of Drinking Water Kiosks at 25 locations", amount: "2.2" },
    { no: 21, projectName: "Construction of Vending Zone at RKV Road", amount: "2.02" },
    { no: 22, projectName: "Urban Street heat - Chantrina Veachii Including Sree Chitra Park", amount: "1.99" },
    { no: 23, projectName: "Redevelopment of Childrens Park, KWA Linked Green Activity", amount: "193" },
    { no: 24, projectName: "Cultural Streets - Manaveeyam Veedhi I", amount: "184" },
    { no: 25, projectName: "Upgradation of Public Health Centre at Rajaj", amount: "18" },
    { no: 26, projectName: "Redevelopment and Landscaping of Ponnara Sreedhar Park", amount: "102" },
    { no: 27, projectName: "Improvement of Temple Tanks at Rutherchantha Sreekandeshwaram", amount: "0.99" },
    { no: 28, projectName: "Construction of Open-Air Auditorium and its allied works at Thiruvananthapuram Corporation", amount: "0.95" },
    { no: 29, projectName: "Blomining of Legacy Wastes at Palayam", amount: "0.91" },
    { no: 30, projectName: "Smart Bus Shelter Phi- 6 Locations", amount: "0.88" },
    { no: 31, projectName: "Reconstruction of Public Toilets at 3 locations", amount: "0.61" },
    { no: 32, projectName: "Smart Mosquito Density System", amount: "0.54" },
    { no: 33, projectName: "Renovation of Public Toilets at 6 locations", amount: "0.54" },
    { no: 34, projectName: "Procurement of 15 e-autos, Last Mile Connectivity", amount: "0.5" },
    { no: 35, projectName: "Construction of Interactive Information Kiosks IT Equipment Procurement", amount: "0.47" },
    { no: 36, projectName: "Blomining of Wastes at Chalai", amount: "0.47" },
    { no: 37, projectName: "Upgradation of Angarwadi—Phase 1", amount: "0.38" },
    { no: 38, projectName: "Procurement of 15 e-rickshawa, Last Mile Connectivity", amount: "0.34" },
    { no: 39, projectName: "Installation of Open-Air Gym, Outdoor and Child Play Equipment at three locations", amount: "0.31" },
    { no: 40, projectName: "Installation of Statues at 5 locations", amount: "0.18" },
    { no: 41, projectName: "Construction of Interactive Information Kiosks, Civil", amount: "0.07" },
    { no: 42, projectName: "Procurement of Smart EV Charger", amount: "0.01" },
  ];

  // Gallery data with descriptions
  const galleryData = [
    {
      id: 1,
      image: Image1
    },
    {
      id: 2,
      image: Image2
    },
    {
      id: 3,
      image: Image3
    },
    {
      id: 4,
      image: Image4
    }
  ];

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Calculate total investment
  const totalInvestment = tableData.reduce((sum, project) => {
    const amount = parseFloat(project.amount) || 0;
    return sum + amount;
  }, 0).toFixed(2);

  return (
    <div className="bg-gray-50">
      {/* Banner */}
      <div className="relative h-64 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(24, 78, 119, 0.9), rgba(30, 96, 145, 0.8)), url(${Banner})`,
          }}
        ></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Completed Projects
            </h1>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Celebrating our successful urban transformation initiatives
            </p>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Achievements
          </h2>
          <div className="h-0.5 w-24 bg-[#184E77] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            These successfully completed projects demonstrate our commitment to building a smarter, 
            more sustainable Thiruvananthapuram across various sectors.
          </p>
        </div>

        {/* Projects Table */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">Completed Projects List</h3>
            <div className="text-sm text-gray-500">{tableData.length} projects completed</div>
          </div>
          
          <div className="border border-gray-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#184E77] text-white">
                  <tr>
                    <th className="py-4 px-6 text-left font-medium">No</th>
                    <th className="py-4 px-6 text-left font-medium">Project Name</th>
                    <th className="py-4 px-6 text-right font-medium">Amount (₹ in Cr)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tableData.map((item, index) => (
                    <tr 
                      key={index} 
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-4 px-6 text-gray-700 font-medium">{item.no}</td>
                      <td className="py-4 px-6 text-gray-700">{item.projectName}</td>
                      <td className="py-4 px-6 text-right text-gray-700 font-medium">{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800">Project Highlights</h3>
            <div className="text-sm text-gray-500">Click images to view details</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Left Column */}
            <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Large Featured Image */}
              <div 
                className="md:col-span-2 h-96 overflow-hidden cursor-pointer group relative"
                onClick={() => openLightbox(galleryData[0])}
              >
                <img 
                  src={Image1} 
                  alt="Urban Street Haat" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <h3 className="text-xl font-bold text-white">{galleryData[0].title}</h3>
                    <p className="text-gray-300">{galleryData[0].location}</p>
                  </div>
                </div>
              </div>
              
              {/* Medium Images */}
              <div 
                className="h-80 overflow-hidden cursor-pointer group relative"
                onClick={() => openLightbox(galleryData[1])}
              >
                <img 
                  src={Image2} 
                  alt="Multi-Level Car Parking" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <h3 className="text-xl font-bold text-white">{galleryData[1].title}</h3>
                    <p className="text-gray-300">{galleryData[1].location}</p>
                  </div>
                </div>
              </div>
              
              <div 
                className="h-80 overflow-hidden cursor-pointer group relative"
                onClick={() => openLightbox(galleryData[2])}
              >
                <img 
                  src={Image3} 
                  alt="Smart Roads" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <h3 className="text-xl font-bold text-white">{galleryData[2].title}</h3>
                    <p className="text-gray-300">{galleryData[2].location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Vertical Image */}
            <div className="md:col-span-5 ">
              <div 
                className="h-full overflow-hidden cursor-pointer group relative"
                onClick={() => openLightbox(galleryData[3])}
              >
                <img 
                  src={Image4} 
                  alt="Children's Park" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <h3 className="text-xl font-bold text-white">{galleryData[3].title}</h3>
                    <p className="text-gray-300">{galleryData[3].location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-[#184E77] text-white p-8 border border-[#1E6091]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Transformation in Numbers</h2>
            <div className="h-0.5 w-24 bg-white mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg mb-8">
              Our completed projects have made a significant impact across the city, 
              improving infrastructure, mobility, and quality of life for residents.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 text-[#184E77]">
                <div className="text-3xl font-bold mb-2">{tableData.length}</div>
                <div className="text-gray-700 font-medium">Projects Completed</div>
              </div>
              <div className="bg-white p-4 text-[#184E77]">
                <div className="text-3xl font-bold mb-2">₹{totalInvestment} Cr</div>
                <div className="text-gray-700 font-medium">Total Investment</div>
              </div>
              <div className="bg-white p-4 text-[#184E77]">
                <div className="text-3xl font-bold mb-2">24+</div>
                <div className="text-gray-700 font-medium">Locations Transformed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && currentImage && (
        <div 
          className="fixed inset-0 bg-gray-900/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-white bg-gray-800 p-2 hover:bg-gray-700 transition-colors"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="bg-white border border-gray-200 overflow-hidden">
              <img 
                src={currentImage.image} 
                alt={currentImage.title} 
                className="w-full max-h-[70vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompletedProject;