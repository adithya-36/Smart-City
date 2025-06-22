import React, { useState } from 'react';
import Banner from '../../assets/banners/ongoingProjectBanner.png';
import Image1 from '../../assets/images/Ongoing Projects/mlcp_med_clg.jpg';
import Image2 from '../../assets/images/Ongoing Projects/mlcp_putharikandom.jpg';
import Image3 from '../../assets/images/Ongoing Projects/mlcp_rajaji.jpg';
import Image4 from '../../assets/images/Ongoing Projects/mlcp_vaniyamkulam.jpg';
import Image5 from '../../assets/images/Ongoing Projects/mlcp_med_clg.jpg';

const OngoingProject = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const openImageModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const allProjects = [
    { 
      no: 1, 
      projectId: "KER-TIR-019", 
      projectName: "Construction of Warehousing at Chalai", 
      scm: "18.66",
      targetDate: "30 - 08 - 2025"
    },
    { 
      no: 2, 
      projectId: "KER-TIR-033", 
      projectName: "Integrated Social Housing Complex Project at Rajaji Nagar - Phase I", 
      scm: "8.00",
      targetDate: "30 - 07 - 2025"
    },
    { 
      no: 3, 
      projectId: "KER-TIR-057", 
      projectName: "Redevelopment of Palayam Market- incl. prefab structure and pit puzzle parking system - Phase I", 
      scm: "28.54",
      targetDate: "30 - 09 - 2025"
    },
    { 
      no: 4, 
      projectId: "KER-TIR-082", 
      projectName: "GIS-based asset mapping and digitization of property tax", 
      scm: "3.98",
      targetDate: "31 - 07 - 2025"
    },
    { 
      no: 5, 
      projectId: "KER-TIR-091", 
      projectName: "Smart Solutions for Decentralised Solid waste management", 
      scm: "4.49",
      targetDate: "31 - 07 - 2025"
    },
    { 
      no: 6, 
      projectId: "KER-TIR-092", 
      projectName: "Procurement of E-vehicles and chargers for promoting E-mobility", 
      scm: "23.90",
      targetDate: "31 - 07 - 2025"
    },
    { 
      no: 7, 
      projectId: "KER-TIR-097", 
      projectName: "CONSTRUCTION OF SMART ROADS - CORPORATION-PHASE 4", 
      scm: "40.62",
      targetDate: "31 - 07 - 2025"
    },
    { 
      no: 8, 
      projectId: "KER-TIR-104", 
      projectName: "MLCP AT VARIOUS LOCATIONS", 
      scm: "35.00",
      targetDate: "30 - 08 - 2025",
      images: [Image1, Image2, Image3, Image4, Image5],
      locations: [
        "Medical College", 
        "Putharikandom", 
        "Rajaji Nagar", 
        "Vaniyamkulam",
        "Palayam"
      ]
    },
    { 
      no: 9, 
      projectId: "KER-TIR-106", 
      projectName: "JUNCTION IMPROVEMENT & EASE OF ACCESS", 
      scm: "19.42",
      targetDate: "30 - 08 - 2025"
    },
  ];

  const totalProjects = allProjects.length;
  const totalInvestment = allProjects.reduce((sum, project) => sum + parseFloat(project.scm), 0).toFixed(2);

  return (
    <div className="bg-gray-50">
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-gray-900 bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div 
            className="relative max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Full size project" 
              className="max-w-full max-h-[80vh] object-contain"
            />
            <button 
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white bg-gray-800 p-2 hover:bg-gray-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}
      
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
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow">
              Ongoing Projects
            </h1>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Current initiatives transforming Thiruvananthapuram
            </p>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Building a Smarter City
          </h2>
          <div className="h-1 w-24 bg-[#184E77] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            These strategic projects represent our commitment to urban transformation, 
            addressing infrastructure, mobility, housing, and digital solutions across the city.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 border border-gray-200">
            <div className="text-5xl font-bold text-[#184E77] mb-2">{totalProjects}</div>
            <div className="text-lg text-gray-600 uppercase tracking-wider font-medium">Active Projects</div>
          </div>

          <div className="bg-white p-8 border border-gray-200">
            <div className="text-5xl font-bold text-[#184E77] mb-2">₹{totalInvestment} Cr</div>
            <div className="text-lg text-gray-600 uppercase tracking-wider font-medium">Total Investment</div>
          </div>

          <div className="bg-white p-8 border border-gray-200">
            <div className="text-5xl font-bold text-[#184E77] mb-2">24+</div>
            <div className="text-lg text-gray-600 uppercase tracking-wider font-medium">Development Zones</div>
          </div>
        </div>

        {/* Projects Table */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Project Portfolio</h3>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200">
              <thead className="bg-[#184E77] text-white">
                <tr>
                  <th className="py-4 px-6 text-left font-medium">No</th>
                  <th className="py-4 px-6 text-left font-medium">Project ID</th>
                  <th className="py-4 px-6 text-left font-medium">Project Name</th>
                  <th className="py-4 px-6 text-right font-medium">SCM (₹ in Cr)</th>
                  <th className="py-4 px-6 text-right font-medium">Target Completion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {allProjects.map((project, index) => (
                  <tr
                    key={index}
                    className="bg-white hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-6 text-gray-700 font-medium">{project.no}</td>
                    <td className="py-4 px-6 text-[#1E6091] font-mono">{project.projectId}</td>
                    <td className="py-4 px-6 text-gray-700">{project.projectName}</td>
                    <td className="py-4 px-6 text-right text-gray-700 font-medium">{project.scm}</td>
                    <td className="py-4 px-6 text-right text-gray-700 font-medium">
                      <div className="inline-flex items-center justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1E6091] mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {project.targetDate}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Project Gallery Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Project Visual Progress</h3>
          
          {/* MLCP Project Gallery */}
          <div className="border border-gray-200 bg-white p-6 mb-12">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#184E77] mb-2">
                MLCP at Various Locations (KER-TIR-104)
              </h3>
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                <div>
                  <p className="text-gray-600">
                    <span className="font-semibold">Budget:</span> ₹35.00 Cr | 
                    <span className="font-semibold ml-2">Target:</span> 30-08-2025
                  </p>
                  <p className="text-gray-600 mt-2">
                    Multi-Level Car Parking facilities at 5 strategic locations to address urban parking challenges
                  </p>
                </div>
                <div className="bg-[#184E77] text-white px-4 py-2 self-start">
                  <span className="font-medium">5 Locations</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {allProjects.find(p => p.projectId === "KER-TIR-104")?.images?.map((img, index) => (
                <div 
                  key={index} 
                  className="overflow-hidden border border-gray-200 hover:shadow transition-all cursor-pointer"
                  onClick={() => openImageModal(img)}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={img} 
                      alt={`MLCP at ${allProjects.find(p => p.projectId === "KER-TIR-104")?.locations?.[index] || 'Location'}`}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="bg-gray-50 p-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-800">
                      {allProjects.find(p => p.projectId === "KER-TIR-104")?.locations?.[index]}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">Click to enlarge</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Categories */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Project Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#184E77] p-6 text-white border border-[#1E6091]">
              <div className="text-4xl font-bold mb-2">4</div>
              <h3 className="text-xl font-semibold mb-2">Infrastructure</h3>
              <p className="text-gray-300">Roads, junctions, warehouses</p>
            </div>

            <div className="bg-[#184E77] p-6 text-white border border-[#1E6091]">
              <div className="text-4xl font-bold mb-2">2</div>
              <h3 className="text-xl font-semibold mb-2">Mobility</h3>
              <p className="text-gray-300">E-vehicles, parking systems</p>
            </div>

            <div className="bg-[#184E77] p-6 text-white border border-[#1E6091]">
              <div className="text-4xl font-bold mb-2">1</div>
              <h3 className="text-xl font-semibold mb-2">Urban Development</h3>
              <p className="text-gray-300">Housing, market redevelopment</p>
            </div>

            <div className="bg-[#184E77] p-6 text-white border border-[#1E6091]">
              <div className="text-4xl font-bold mb-2">2</div>
              <h3 className="text-xl font-semibold mb-2">Smart Solutions</h3>
              <p className="text-gray-300">Waste management, GIS mapping</p>
            </div>
          </div>
        </div>

        {/* Project Timeline */}
        <div className="mb-20 bg-white border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Project Timeline</h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

            {/* Timeline items */}
            <div className="space-y-16">
              {/* July 2025 */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#184E77] border-2 border-white z-10"></div>
                <div className="w-1/2 pr-12 text-right">
                  <h3 className="text-xl font-bold text-gray-800">July 2025</h3>
                  <p className="text-gray-600 mt-2">
                    Social Housing, GIS Mapping, Waste Management, E-mobility, Smart Roads
                  </p>
                  <div className="mt-2 text-[#1E6091] font-medium">
                    {allProjects.filter(p => p.targetDate.includes('07 - 2025')).length} projects
                  </div>
                </div>
                <div className="w-1/2"></div>
              </div>

              {/* August 2025 */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#184E77] border-2 border-white z-10"></div>
                <div className="w-1/2"></div>
                <div className="w-1/2 pl-12">
                  <h3 className="text-xl font-bold text-gray-800">August 2025</h3>
                  <p className="text-gray-600 mt-2">
                    Warehousing, MLCPs, Junction Improvements
                  </p>
                  <div className="mt-2 text-[#1E6091] font-medium">
                    {allProjects.filter(p => p.targetDate.includes('08 - 2025')).length} projects
                  </div>
                </div>
              </div>

              {/* September 2025 */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#184E77] border-2 border-white z-10"></div>
                <div className="w-1/2 pr-12 text-right">
                  <h3 className="text-xl font-bold text-gray-800">September 2025</h3>
                  <p className="text-gray-600 mt-2">
                    Palayam Market Redevelopment
                  </p>
                  <div className="mt-2 text-[#1E6091] font-medium">
                    {allProjects.filter(p => p.targetDate.includes('09 - 2025')).length} projects
                  </div>
                </div>
                <div className="w-1/2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#184E77] border border-[#1E6091] p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Project Inquiries</h2>
            <div className="h-0.5 w-24 bg-white mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg mb-8">
              For more information about any ongoing project, contact our project management team
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:projects@tvmcorporation.gov.in"
                className="bg-white text-[#184E77] font-medium py-3 px-8 hover:bg-gray-100 transition-colors"
              >
                Email Project Team
              </a>
              <a
                href="tel:+9104714010374"
                className="bg-transparent border border-white text-white font-medium py-3 px-8 hover:bg-white hover:text-[#184E77] transition-colors"
              >
                Call +91-0471-4010374
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingProject;