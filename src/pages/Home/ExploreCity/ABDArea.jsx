import React from 'react'
import ABDBanner from '../../../assets/banners/ABDBanner.jpg'
import ABDImage1 from '../../../assets/images/ABDImage1.jpg'
import ABDImage2 from '../../../assets/images/ABDImage2.jpg'
import ABDImage3 from '../../../assets/images/ABDImage3.jpg'
import ABDImage4 from '../../../assets/images/ABDImage4.jpg'

const ABDArea = () => {
  const images = [
    { src: ABDImage1, title: 'Area Development Plan', description: 'Strategic development zones in the city core' },
    { src: ABDImage2, title: 'Infrastructure Mapping', description: 'Key infrastructure projects in ABD area' },
    { src: ABDImage3, title: 'Urban Transformation', description: 'Before and after development visuals' },
    { src: ABDImage4, title: 'Public Spaces', description: 'Enhanced community spaces in development plan' },
  ]

  return (
    <div className="font-sans">
      {/* Banner */}
      <div className="relative h-48 md:h-64 lg:h-48 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 60, 80, 0.85), rgba(0, 128, 128, 0.6)), url(${ABDBanner})`,
          }}
        ></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4 drop-shadow-lg">
            Selection of ABD Area
          </h1>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E6091] mb-4">
            Area-Based Development (ABD) in Thiruvananthapuram
          </h2>
          <div className="h-1 w-32 bg-[#18AE77] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            The Area-Based Development approach focuses on transforming specific areas of the city through 
            retrofitting and redevelopment. Thiruvananthapuram's ABD area covers 15.7 km² in the city core, 
            targeting comprehensive urban renewal with sustainable infrastructure and enhanced public spaces.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E6091] to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                <p className="text-sm opacity-90">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="bg-[#D9ED92] bg-opacity-30 rounded-xl p-6 mb-12 border border-[#99D98C]">
          <h3 className="text-2xl font-bold text-[#1E6091] mb-6 text-center">
            Key Features of ABD Area
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Retrofitting', desc: 'Upgrading existing infrastructure' },
              { title: 'Redevelopment', desc: 'Replacing old constructions' },
              { title: 'Green Mobility', desc: 'Pedestrian-friendly pathways' },
              { title: 'Smart Solutions', desc: 'IoT-based urban services' },
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-5 rounded-lg shadow-md text-center border-t-4 border-[#34A0A4] hover:border-[#18AE77] transition-colors"
              >
                <h4 className="text-lg font-bold text-[#1A759F] mb-2">{feature.title}</h4>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Development Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#1E6091]">
            <h3 className="text-xl font-bold text-[#1E6091] mb-4">Development Goals</h3>
            <ul className="space-y-3">
              {[
                "Enhance urban infrastructure and services",
                "Promote walkability and non-motorized transport",
                "Preserve and enhance natural environment",
                "Develop integrated public spaces",
                "Implement smart city solutions",
                "Ensure socio-economic inclusiveness"
              ].map((goal, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-[#99D98C] rounded-full p-1 mt-1 mr-3">
                    <svg className="w-4 h-4 text-[#1E6091]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#18AE77]">
            <h3 className="text-xl font-bold text-[#1E6091] mb-4">Implementation Strategy</h3>
            <div className="space-y-4 ">
              {[
                { phase: "Phase 1", content: "Infrastructure assessment and planning" },
                { phase: "Phase 2", content: "Pilot projects implementation" },
                { phase: "Phase 3", content: "Full-scale development" },
                { phase: "Phase 4", content: "Monitoring and optimization" }
              ].map((phase, index) => (
                <div key={index} className="flex">
                  <div className="bg-[#1E6091]  text-white rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 mr-4">
                    {phase.phase}
                  </div>
                  <p className="text-gray-700 pt-2">{phase.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-[#1E6091] to-[#34A0A4] rounded-xl p-8 text-white mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">ABD Area Development Stats</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">15.7 km²</p>
              <p className="text-[#B5E48C]">Development Area</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">₹1,386 Cr</p>
              <p className="text-[#B5E48C]">Total Investment</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">35+</p>
              <p className="text-[#B5E48C]">Development Projects</p>
            </div>
          </div>
        </div>

        {/* Back to City Profile */}
        <div className="text-center">
          <a 
            href="/cityProfile" 
            className="inline-flex items-center px-6 py-3 bg-[#1E6091] text-white rounded-full hover:bg-[#168AAD] transition duration-300 shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to City Profile
          </a>
        </div>
      </div>
    </div>
  )
}

export default ABDArea