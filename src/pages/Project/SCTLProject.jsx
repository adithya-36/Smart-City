import React from 'react';
import Image1 from '../../assets/images/SCTL Projects/manaveeyamImg1.png';
import Image2 from '../../assets/images/SCTL Projects/mlcpImg2.png';
import Image3 from '../../assets/images/SCTL Projects/Open-Air_AuditoriumImg3.png';
import Image4 from '../../assets/images/SCTL Projects/Biomining_of_Wastes_at_Chalaiimg4.png';
import Image5 from '../../assets/images/SCTL Projects/img5.jpg';
import Image6 from '../../assets/images/SCTL Projects/KSRTCImg6.jpg';
import Image7 from '../../assets/images/SCTL Projects/KRFB2img7.png';
import Image8 from '../../assets/images/SCTL Projects/KRFB1Img8.png';
import Image9 from '../../assets/images/SCTL Projects/ANERTImg9.png';
import PDF from '../Project/PDFFolder/SCTL.pdf';

const SCTLProject = () => {
  const projects = [
    {
      title: "Cultural Streets - Manaveeyam Veedhi",
      image: Image1,
      content: "Manaveeyam Veedhi is a 180 m road stretch from Museum-Vellayambalam Road to the Althara junction. This street is famous for the numerous artworks on display along the road and numerous cultural performances it hosts. SCTL's proposal is to facilitate the current activities in the Veedhi by giving the street a physical makeover and convert Manaveeyam Veedhi as a Cultural Street in all sense. The new streetscape design is pedestrian dominant and universally accessible. The design components are a covered venue, sculptures, art gallery space, Exercise Park, street library, gender friendly toilets, drinking water fountains, food kiosks and cycle parking area. The estimated project cost is approximately Rs. 1.92 Cr. The construction of utility ducting and such works would be taken up under Smart Road Project. The work was awarded to M/s. SILK for an amount of Rs. 1.84 Cr. The project is completed.",
      stats: [
        { label: "Project Cost", value: "₹1.92 Cr" },
        { label: "Completed", value: "2023" },
        { label: "Contractor", value: "M/s. SILK" }
      ]
    },
    {
      title: "Construction of Multi Level Car Parking at Thampanoor",
      image: Image2,
      content: "Construction of Multi-Level Car Parking at Thampanoor opposite Central Railway Station started in 2020. It was executed as a part of the Smart Cities Mission, a central scheme for urban redevelopment with a matching contribution of 50% by the state government. The total cost of the project is worth Rs. 22.9 Cr and was constructed by M/s. Heather Construction. The project was inaugurated in April 2023 as part of the 100 days programme of the State Government. The initiative will be catering to the parking demand of 400 bikes and 22 cars coming within the city. Apart from the infrastructure, other salient features include software and mobile applications being developed as part of the Smart Parking feature within the Thiruvananthapuram Municipal Corporation. The contract of the project was awarded to M/s. Heather Construction for an amount of Rs.18.89Cr and is completed.",
      stats: [
        { label: "Capacity", value: "400 bikes + 22 cars" },
        { label: "Project Cost", value: "₹22.9 Cr" },
        { label: "Contractor", value: "M/s. Heather Construction" }
      ]
    },
    {
      title: "Construction of Open-Air Auditorium and its allied works at Thiruvananthapuram Corporation",
      image: Image3,
      content: "This project aims at development of an Open-Air Auditorium inside the premises of Thiruvananthapuram corporation. The proposal includes an open auditorium with a covered stage, an open area which serves dual purposes of parking cum seating area whenever there is a programme occurring at the Corporation premise. Some landscaping works are also included in the proposal for making the office into both a public and environment friendly area. The work was completed in 2023.",
      stats: [
        { label: "Completed", value: "2023" },
        { label: "Features", value: "Dual-purpose space" },
        { label: "Location", value: "Corporation Premises" }
      ]
    },
    {
      title: "Biomining of Wastes at Chalai",
      image: Image4,
      content: "The Waste dump in Chalai has to be cleared. The reclamation of land is being done through the process of Biomining and the legacy waste is cleared as per CPCB norms. This work is completed in 2023.",
      stats: [
        { label: "Method", value: "Biomining" },
        { label: "Completed", value: "2023" },
        { label: "Compliance", value: "CPCB norms" }
      ]
    },
    {
      title: "Development of Traffic signal CCC building",
      image: Image5,
      content: "The existing locations will be revamped and additional cameras are provisioned at the new locations within the PAN City area. Key components include: i) City Surveillance, ii) Intelligent Video Analytics & Video Wall iii) Smart Traffic Control iv) Smart Governance and Citizen Services v) Network Backbone (OFC laying). The data center building is completed",
      stats: [
        { label: "Components", value: "5 key systems" },
        { label: "Status", value: "Building completed" },
        { label: "Coverage", value: "PAN City area" }
      ]
    },
    {
      title: "Procurement of buses for KSRTC phase 1,2,3",
      image: Image6,
      content: "This project aims at improving smart mobility by the procurement of EV buses for KSRTC. Procurement of 113 buses under KSRTC for strengthening Green Public Transport has become an aim for any City at this point of time, as this reduces traffic congestion in roads, pollution and encourages energy efficiency.The 113 nos of buses are being procured in 3 phases and flag off was done in August 2023.",
      stats: [
        { label: "Buses", value: "113 EV buses" },
        { label: "Phases", value: "3" },
        { label: "Launched", value: "August 2023" }
      ]
    },
    {
      title: "Construction of Smart Roads – KRFB ph 1",
      images: [Image7, Image8],
      content: "The works at Manaveeyam road & Kala bhavan road are completed in August 2023.",
      stats: [
        { label: "Roads", value: "Manaveeyam & Kala Bhavan" },
        { label: "Completed", value: "August 2023" },
        { label: "Contractor", value: "KRFB" }
      ]
    },
    {
      title: "Rooftop solar by ANERT phases 1-6",
      image: Image9,
      content: "The aim of this project is to support large campuses and buildings to function in sustainable energy by harnessing solar energy, thus helping them transition towards becoming economically, socially and environmentally conscious. SCTL has already implemented grid tied rooftop solar projects of 807 KWP capacity which helps to reduce 1000 tons of carbon footprint annually. Additionally reducing the demand from the KSEB grid. ANERT is implementing the project phase-wise. The project has kick started and is being implemented at various Government institutions. The project is being completed in different phases as per the capacity requirements and location and is completed in December 2023.",
      stats: [
        { label: "Capacity", value: "807 KWP" },
        { label: "Carbon Reduction", value: "1000 tons/year" },
        { label: "Completed", value: "December 2023" }
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SCTL Projects Portfolio</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Transforming Thiruvananthapuram through innovative urban development projects
          </p>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-blue-700">8</div>
            <div className="text-gray-600">Featured Projects</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-blue-700">₹250+ Cr</div>
            <div className="text-gray-600">Total Investment</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-blue-700">12+</div>
            <div className="text-gray-600">Locations Transformed</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-blue-700">100%</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                {project.images ? (
                  <div className="grid grid-cols-2 gap-4">
                    {project.images.map((img, imgIndex) => (
                      <div 
                        key={imgIndex} 
                        className="rounded-xl overflow-hidden shadow-xl h-80 transition-transform duration-300 hover:scale-[1.03]"
                      >
                        <img 
                          src={img} 
                          alt={`${project.title} ${imgIndex + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-xl overflow-hidden shadow-xl h-96 transition-transform duration-300 hover:scale-[1.03]">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
              
              {/* Content Section */}
              <div className="w-full md:w-1/2">
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-blue-100 relative">
                  {/* Project number badge */}
                  <div className="absolute -top-4 left-6 bg-blue-600 text-white text-lg font-bold py-2 px-4 rounded-lg">
                    Project {index + 1}
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pt-4">
                    {project.title}
                  </h2>
                  
                  {/* Stats */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm">
                        <span className="font-semibold">{stat.label}:</span> {stat.value}
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.content}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-green-700 font-medium">Project Completed</span>
                    </div>
                    <div className="text-blue-600 font-medium">
                      SCTL Initiative
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transformative Impact</h2>
            <p className="text-blue-200 max-w-3xl mx-auto">
              Our projects have created sustainable value across Thiruvananthapuram
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-800/30 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">Urban Renewal</h3>
              <p>Revitalized public spaces, enhanced cultural hubs, and improved urban infrastructure</p>
            </div>
            <div className="bg-blue-800/30 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">Sustainable Mobility</h3>
              <p>Reduced traffic congestion through smart parking solutions and electric public transport</p>
            </div>
            <div className="bg-blue-800/30 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">Environmental Stewardship</h3>
              <p>Waste management solutions and renewable energy adoption reducing carbon footprint</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore More Projects</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Discover how SCTL is transforming Thiruvananthapuram into a model smart city
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/photoGallery">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
            View Project Gallery
          </button>
          </a>
          <a href={PDF}
          target="_blank" rel="noopener noreferrer">
            <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg transition-colors">
            Download Project Reports
          </button>
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default SCTLProject;