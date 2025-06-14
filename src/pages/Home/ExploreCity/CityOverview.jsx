import React from 'react'
import SCPMap from '../../../assets/images/map2.jpg'

const SmartCityTable = () => {
  const data = [
    {
      module: 'Urban Basic Services',
      projects: '15 Projects : ₹771.5Cr',
      strategy: 'Improving Basic Services',
      color: '#34A0A4'  // Teal
    },
    {
      module: 'Land Use Efficiency',
      projects: '5 Projects : ₹238Cr',
      strategy: 'Re-Densification with creative land use',
      color: '#52B69A'  // Green
    },
    {
      module: 'Cultural Identity & Heritage',
      projects: '9 Projects : ₹126.5Cr',
      strategy: 'Conserving Historical & Cultural assets',
      color: '#76C893'  // Light green
    },
    {
      module: 'Resilience & Eco-friendliness',
      projects: '3 Projects : ₹143.7Cr',
      strategy: 'Sustainable Built & natural landscape',
      color: '#99D98C'  // Lime
    },
    {
      module: 'Socio-economic Inclusiveness',
      projects: '3 Projects : ₹106.4Cr',
      strategy: 'Promote diversity & Foster inclusiveness',
      color: '#B5E48C'  // Light lime
    },
  ]

  return (
    <div className="px-4 md:px-8 lg:px-16 py-10 bg-gradient-to-b from-[#D9ED92] to-[#1E6091]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#1E6091]">
          Thiruvananthapuram Smart City & ABD Area
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Map Image - Added padding here */}
          <div className="w-full lg:w-1/2 flex justify-center p-4 bg-white/10 rounded-xl">
            <div className="relative w-full max-w-lg">
              <img
                src={SCPMap}
                alt="Smart City ABD Map"
                className="w-full rounded-xl shadow-xl border-4 border-white"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#1E6091] bg-opacity-80 text-white p-3 rounded-b-xl">
                <p className="text-center font-medium">Smart City Area Development Plan</p>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="w-full lg:w-1/2">
            <div className="overflow-x-auto rounded-xl shadow-xl border border-[#1A759F]">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-[#1E6091] text-white">
                    <th className="py-4 px-4 text-left font-bold text-sm md:text-base">SCP Modules</th>
                    <th className="py-4 px-4 text-left font-bold text-sm md:text-base">Projects & Cost</th>
                    <th className="py-4 px-4 text-left font-bold text-sm md:text-base">Proposed Strategies</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#168AAD]">
                  {data.map((row, index) => (
                    <tr 
                      key={index} 
                      className="bg-white hover:bg-[#D9ED92] transition-colors duration-200"
                    >
                      <td className="py-3 px-4 text-sm md:text-base font-medium">
                        <div className="flex items-center">
                          <div 
                            className="w-3 h-3 rounded-full mr-3" 
                            style={{ backgroundColor: row.color }}
                          ></div>
                          {row.module}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm md:text-base font-semibold text-[#1A759F]">
                        {row.projects}
                      </td>
                      <td className="py-3 px-4 text-sm md:text-base">
                        {row.strategy}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Legend */}
            <div className="mt-6 bg-white p-4 rounded-xl shadow-md border border-[#34A0A4]">
              <h3 className="text-lg font-semibold text-[#1E6091] mb-3">Project Module Legend</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {data.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div 
                      className="w-4 h-4 rounded-full mr-2" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm text-gray-700">{item.module}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Key Facts - Improved text visibility */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#34A0A4]">
            <h3 className="text-xl font-bold text-[#1E6091] mb-2">Total Projects</h3>
            <p className="text-3xl font-bold text-[#1A759F]">35+</p>
            <p className="mt-2 text-gray-700">Across all development modules</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#52B69A]">
            <h3 className="text-xl font-bold text-[#1E6091] mb-2">Total Investment</h3>
            <p className="text-3xl font-bold text-[#1A759F]">₹1,386 Cr</p>
            <p className="mt-2 text-gray-700">Committed for city development</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#76C893]">
            <h3 className="text-xl font-bold text-[#1E6091] mb-2">Development Area</h3>
            <p className="text-3xl font-bold text-[#1A759F]">15.7 km²</p>
            <p className="mt-2 text-gray-700">Covered under ABD program</p>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Resilience & Eco-friendliness */}
            <div className="p-6 rounded-xl bg-[#99D98C] bg-opacity-20 border-l-4 border-[#99D98C]">
              <h3 className="text-xl font-bold text-[#1E6091] mb-4">Resilience & Eco-friendliness</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-[#1A759F]">3 Projects</p>
                  <p className="text-lg font-bold">₹143.7Cr</p>
                </div>
                <p className="text-gray-700">Sustainable Built & natural landscape</p>
              </div>
            </div>
            
            {/* Socio-economic inclusiveness */}
            <div className="p-6 rounded-xl bg-[#B5E48C] bg-opacity-20 border-l-4 border-[#B5E48C]">
              <h3 className="text-xl font-bold text-[#1E6091] mb-4">Socio-economic inclusiveness</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-[#1A759F]">3 Projects</p>
                  <p className="text-lg font-bold">₹106.4Cr</p>
                </div>
                <p className="text-gray-700">Promote diversity & Foster inclusiveness</p>
              </div>
            </div>
          </div>
        </div>
        {/* Back Button */}
        <div className="text-center mt-10">
          <a 
            href="/CityProfile" 
            className="inline-flex items-center px-6 py-3 bg-[#1E6091] text-white rounded-full hover:bg-[#168AAD] transition duration-300"
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

export default SmartCityTable