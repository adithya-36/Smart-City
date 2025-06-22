import React from 'react';
import ABDBanner from '../../../assets/banners/ABDBanner.jpg';
import ABDImage1 from '../../../assets/images/ABDImage1.jpg';
import ABDImage2 from '../../../assets/images/ABDImage2.jpg';
import ABDImage3 from '../../../assets/images/ABDImage3.jpg';
import ABDImage4 from '../../../assets/images/ABDImage4.jpg';

const ABDArea = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      {/* Banner */}
      <div className="relative h-64 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(24, 78, 119, 0.9), rgba(30, 96, 145, 0.8)), url(${ABDBanner})`,
          }}
        ></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
            Selection of ABD Area
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#184E77] mb-4">
            Area-Based Development (ABD) in Thiruvananthapuram
          </h2>
          <div className="h-0.5 w-24 bg-[#1E6091] mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            The Area-Based Development approach focuses on transforming specific areas of the city through
            retrofitting and redevelopment. Thiruvananthapuram's ABD area covers 15.7 km² in the city core,
            targeting comprehensive urban renewal with sustainable infrastructure and enhanced public spaces.
          </p>
        </div>

        {/* Main Content with Large Image and Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Large Main Image Section (3/4 width) */}
          <div className="lg:w-3/4">
            <div className="relative overflow-hidden mb-8">
              <img
                src={ABDImage1}
                alt="ABD Area Development Plan"
                className="w-full h-auto object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Area Development Plan</h3>
                <p>Strategic development zones in the city core covering 15.7 km²</p>
              </div>
            </div>

            <div className="relative overflow-hidden mb-8">
              <img
                src={ABDImage2}
                alt="Infrastructure Mapping"
                className="w-full h-auto object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Infrastructure Mapping</h3>
                <p>Key infrastructure projects in ABD area</p>
              </div>
            </div>

            <div className="relative overflow-hidden mb-8">
              <img
                src={ABDImage3}
                alt="ABD Urban Transformation"
                className="w-full h-auto object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Urban Transformation</h3>
                <p>Before and after development visuals</p>
              </div>
            </div>

            <div className="relative overflow-hidden mb-8">
              <img
                src={ABDImage4}
                alt="ABD Public Spaces"
                className="w-full h-auto object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Public Spaces</h3>
                <p>Enhanced community spaces in development plan</p>
              </div>
            </div>

            {/* Development Details */}
            <div className="bg-white border border-gray-200 p-8 mb-8">
              <h3 className="text-2xl font-bold text-[#184E77] mb-6">Development Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-[#1E6091] mb-4 text-lg">Project Goals</h4>
                  <ul className="space-y-4">
                    {[
                      "Transform urban landscape through retrofitting",
                      "Create pedestrian-friendly public spaces",
                      "Implement smart city solutions for urban services",
                      "Preserve cultural heritage while modernizing infrastructure",
                      "Promote economic development through tourism"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-[#1E6091] p-1 mr-3">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#1E6091] mb-4 text-lg">Implementation Timeline</h4>
                  <div className="space-y-6">
                    {[
                      { phase: "Phase 1 (2023-2024)", content: "Infrastructure assessment and planning" },
                      { phase: "Phase 2 (2024-2025)", content: "Pilot projects implementation" },
                      { phase: "Phase 3 (2025-2026)", content: "Full-scale development rollout" },
                      { phase: "Phase 4 (2026+)", content: "Monitoring, optimization and expansion" }
                    ].map((phase, index) => (
                      <div key={index} className="flex">
                        <div className="bg-[#184E77] text-white h-10 w-10 flex items-center justify-center flex-shrink-0 mr-4">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-bold text-[#1E6091]">{phase.phase}</p>
                          <p className="text-gray-700">{phase.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Content (1/4 width) */}
          <div className="lg:w-1/4">
            {/* Key Stats */}
            <div className="bg-[#184E77] border border-[#1E6091] p-6 text-white mb-8">
              <h3 className="text-xl font-bold text-center mb-6">Project Stats</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-3xl font-bold">15.7 km²</p>
                  <p className="text-gray-300">Development Area</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">₹1,386 Cr</p>
                  <p className="text-gray-300">Total Investment</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">35+</p>
                  <p className="text-gray-300">Development Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">2026</p>
                  <p className="text-gray-300">Target Completion</p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white border border-gray-200 p-6 mb-8">
              <h3 className="text-lg font-bold text-[#184E77] mb-4">Key Features</h3>
              <ul className="space-y-4">
                {[
                  { icon: "🔄", text: "Retrofitting existing infrastructure" },
                  { icon: "🏗️", text: "Redevelopment of outdated areas" },
                  { icon: "🚶", text: "Pedestrian-friendly pathways" },
                  { icon: "🌳", text: "Green spaces and parks" },
                  { icon: "📶", text: "Smart city IoT solutions" },
                  { icon: "♿", text: "Accessibility improvements" }
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-xl mr-3">{feature.icon}</span>
                    <span className="text-gray-700">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Voting Results */}
            <div className="bg-white border border-gray-200 p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-[#184E77]">VOTING RESULTS</h3>
                <span className="bg-[#184E77] text-white px-3 py-1 text-xs">TOP AREAS</span>
              </div>

              <div className="space-y-4">
                {[
                  { title: "City Center", votes: 142, progress: 85 },
                  { title: "Waterfront", votes: 118, progress: 70 },
                  { title: "Heritage Zone", votes: 96, progress: 55 },
                ].map((area, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-[#1E6091]">{area.title}</span>
                      <span className="text-gray-600 text-sm">{area.votes} votes</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2">
                      <div
                        className="bg-[#1E6091] h-2"
                        style={{ width: `${area.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Priority Zones */}
            <div className="bg-white border border-gray-200 p-6 mb-8">
              <h3 className="font-bold text-[#184E77] mb-4">Priority Zones</h3>
              <div className="flex flex-wrap gap-2">
                {["City Center", "Grad & Shipyard", "Innovation District", "Riverside", "Heritage Quarter", "Tech Hub"].map((zone, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-[#1E6091] text-xs font-medium"
                  >
                    {zone}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-[#1E6091] border border-[#184E77] p-6 text-white">
              <h3 className="font-bold mb-4">Project Contact</h3>
              <p className="text-sm mb-2">ABD Project Office</p>
              <p className="text-sm mb-1">Smart City Thiruvananthapuram Ltd.</p>
              <p className="text-sm mb-1">Phone: +91 471 272 8888</p>
              <p className="text-sm mb-6">Email: abd@smartcitytvm.org</p>
              <button className="w-full bg-white text-[#184E77] py-2 font-bold hover:bg-gray-100 transition">
                Contact Team
              </button>
            </div>

            {/* Back Button */}
            <div className="mt-6">
              <a
                href="/CityProfile"
                className="flex items-center justify-center px-6 py-3 bg-[#184E77] w-full text-white hover:bg-[#1E6091] transition"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back to City Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABDArea;