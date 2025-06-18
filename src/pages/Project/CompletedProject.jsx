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
    { no: 22, projectName: "Urban Street heat - Chantrina Veedhi Including Sree Chitra Park", amount: "199" },
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
      image: Image1,
      title: "Urban Street Haat",
      location: "Charithra Veedhi, East Fort",
      description: "A vibrant cultural marketplace revitalizing the historic East Fort area with traditional craft stalls and cultural activities."
    },
    {
      id: 2,
      image: Image2,
      title: "Multi-Level Car Parking",
      location: "Thampanoor Railway Station",
      description: "Modern parking facility with EV charging stations, reducing congestion near the busy railway station."
    },
    {
      id: 3,
      image: Image3,
      title: "Smart Roads",
      location: "KRFB Phase 1 Implementation",
      description: "Intelligent transportation infrastructure with smart sensors and traffic management systems."
    },
    {
      id: 4,
      image: Image4,
      title: "Children's Park",
      location: "KWA Linked Green Activity",
      description: "Eco-friendly recreational space with interactive play equipment and green landscaping."
    }
  ];

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

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
            Completed Projects
          </h1>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Celebrating Our Achievements
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Explore the diverse range of projects we've successfully completed across Thiruvananthapuram. 
            Each initiative represents our commitment to transforming our city into a smarter, more sustainable urban environment.
          </p>
        </div>

        {/* Projects Table */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
                  <tr>
                    <th className="py-4 px-4 text-left text-sm md:text-base font-semibold">No</th>
                    <th className="py-4 px-4 text-left text-sm md:text-base font-semibold">Project Name</th>
                    <th className="py-4 px-4 text-right text-sm md:text-base font-semibold">Amount (₹ in Cr)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {tableData.map((item, index) => (
                    <tr 
                      key={index} 
                      className={`transition-colors duration-150 ${index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}`}
                    >
                      <td className="py-4 px-4 text-gray-700 font-medium">{item.no}</td>
                      <td className="py-4 px-4 text-gray-700">{item.projectName}</td>
                      <td className="py-4 px-4 text-right text-gray-700 font-medium">{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Enhanced Gallery Section */}
        <div className="mt-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Project Gallery</h2>
            <div className="text-sm text-gray-500">Click images to view details</div>
          </div>
          
          {/* Masonry Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left Column */}
            <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Large Featured Image */}
              <div 
                className="md:col-span-2 rounded-xl overflow-hidden shadow-lg cursor-pointer group relative"
                onClick={() => openLightbox(galleryData[0])}
              >
                <img 
                  src={Image1} 
                  alt="Urban Street Haat" 
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <h3 className="text-xl font-bold text-white">Urban Street Haat</h3>
                    <p className="text-blue-200">Charithra Veedhi, East Fort</p>
                  </div>
                </div>
              </div>
              
              {/* Medium Image */}
              <div 
                className="rounded-xl overflow-hidden shadow-lg cursor-pointer group relative"
                onClick={() => openLightbox(galleryData[1])}
              >
                <img 
                  src={Image2} 
                  alt="Multi-Level Car Parking" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <h3 className="text-xl font-bold text-white">Multi-Level Car Parking</h3>
                    <p className="text-blue-200">Thampanoor Railway Station</p>
                  </div>
                </div>
              </div>
              
              {/* Medium Image */}
              <div 
                className="rounded-xl overflow-hidden shadow-lg cursor-pointer group relative"
                onClick={() => openLightbox(galleryData[2])}
              >
                <img 
                  src={Image3} 
                  alt="Smart Roads" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <h3 className="text-xl font-bold text-white">Smart Roads</h3>
                    <p className="text-blue-200">KRFB Phase 1 Implementation</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Vertical Image */}
            <div className="md:col-span-5">
              <div 
                className="h-full rounded-xl overflow-hidden shadow-lg cursor-pointer group relative"
                onClick={() => openLightbox(galleryData[3])}
              >
                <img 
                  src={Image4} 
                  alt="Children's Park" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <h3 className="text-xl font-bold text-white">Children's Park</h3>
                    <p className="text-blue-200">KWA Linked Green Activity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Making a Difference Together</h2>
            <p className="text-gray-700 text-lg mb-6">
              With over 42 projects successfully completed across various sectors including transportation, 
              renewable energy, urban development, and public amenities, we're proud of the progress we've made 
              in transforming Thiruvananthapuram into a smarter, more livable city.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white rounded-lg p-4 shadow-md text-center min-w-[150px]">
                <div className="text-3xl font-bold text-blue-700">42</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md text-center min-w-[150px]">
                <div className="text-3xl font-bold text-blue-700">₹285.31 Cr</div>
                <div className="text-gray-600">Total Investment</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md text-center min-w-[150px]">
                <div className="text-3xl font-bold text-blue-700">24+</div>
                <div className="text-gray-600">Locations Transformed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && currentImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 z-10"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={currentImage.image} 
                alt={currentImage.title} 
                className="w-full max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{currentImage.title}</h3>
                <p className="text-blue-600 font-medium mb-4">{currentImage.location}</p>
                <p className="text-gray-700">{currentImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompletedProject;