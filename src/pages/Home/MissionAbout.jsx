import React from 'react'
import AboutBanner from '../../assets/banners/pageBanner.jpg'
import AboutImage1 from '../../assets/images/aboutImage1.jpg'
import AboutImage2 from '../../assets/images/aboutImage2.jpg'

const MissionAbout = () => {
  return (
    <div className="bg-gray-50">
      {/* Banner */}
      <div className="relative h-48 md:h-64 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 60, 80, 0.85), rgba(0, 128, 128, 0.6)), url(${AboutBanner})`,
          }}
        ></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-white text-3xl md:text-4xl font-bold text-center px-4 drop-shadow-lg">
            About 'Smart City Mission'
          </h1>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* First Section */}
        <div className="mb-12 bg-white rounded-xl shadow-md p-6">
          <div className="flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-bold text-teal-700 mb-6 text-center">
              The Government of India has launched the Smart Cities Mission on 25 June 2015.
            </h3>
            
            {/* Image container - 3/4 width */}
            <div className="w-full md:w-3/4 mb-6">
              <img 
                src={AboutImage1} 
                alt="About Smart City Mission" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            
            <p className="text-gray-700 leading-relaxed md:text-lg w-full md:w-3/4">
              The implementation of the Smart Cities Mission is done by a Special Purpose Vehicle (SPV) to be set up at city level in the form of a limited company under the Companies Act, 2013 and will be promoted by the State/UT and the Urban Local Body (ULB) jointly both having 50:50 equity shareholding. After selection, each selected Smart Cities have to set up SPVs and start implementation of their Smart City Proposal, preparation of Detailed Project Reports (DPRs), tenders etc. The SPV will convert the Smart City Proposal into projects through Project Management Consultants (PMCs) and implementation thereafter.
            </p>
          </div>
        </div>

        {/* Second Section */}
        <div className="mb-12 bg-white rounded-xl shadow-md p-6">
          <div className="flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-bold text-teal-700 mb-6 text-center">
              Cities selected under Smart City Mission across India
            </h3>
            
            {/* Image container - 3/4 width */}
            <div className="w-full md:w-3/4 mb-6">
              <img 
                src={AboutImage2} 
                alt="Smart Cities in India" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            
            <ol className="list-decimal list-inside space-y-4 text-gray-700 md:text-lg w-full md:w-3/4">
              <li className="pb-3 border-b border-gray-100">
                The objective is to promote sustainable and inclusive cities that provide core infrastructure and give a decent quality of life to its citizens, a clean and sustainable environment and application of 'Smart' Solutions.
              </li>
              <li className="pb-3 border-b border-gray-100">
                The focus is on sustainable and inclusive development and the idea is to look at compact areas, create a replicable model which will act like a lighthouse to other aspiring cities. The Smart Cities Mission is meant to set examples that can be replicated both within and outside the Smart City, catalysing the creation of similar Smart Cities in various regions and parts of the country.
              </li>
              <li className="pb-3 border-b border-gray-100">
                Some of the core infrastructure elements in a Smart City would include adequate water supply, assured electricity supply, sanitation, including solid waste management, efficient urban mobility and public transport, affordable housing, especially for the poor, robust IT connectivity and digitalization, good governance, especially e-Governance and citizen participation, sustainable environment, safety and security of citizens, particularly women, children and the elderly and health and education.
              </li>
              <li className="pb-3 border-b border-gray-100">
                The strategic components of the Smart Cities Mission are city improvement (retrofitting), city renewal (redevelopment) and city extension (Greenfield development) plus a Pan-city initiative in which Smart Solutions are applied covering larger parts of the city.
              </li>
              <li className="pb-3 border-b border-gray-100">
                Area-based development will transform existing areas (retrofit and redevelop), including slums, into better planned human settlements, thereby, improving liveability of the whole cities. Development of well-planned and fully serviced new areas (greenfield) will be encouraged around cities in order to accommodate the rapidly expanding population in urban areas. Application of Smart Solutions will enable cities to use technology to improve infrastructure and services.
              </li>
              <li>
                Comprehensive development in this way will improve quality of life, create employment and enhance incomes for all, especially the poor and the disadvantaged, leading to inclusive cities.
              </li>
            </ol>
          </div>
        </div>

        {/* Download Section */}
        <div className="text-center py-6 bg-teal-50 rounded-xl shadow-md">
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Click here to download the official guidelines
          </p>
          <a 
            href="#" 
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
          >
            Smart City Mission Guidelines
          </a>
        </div>
      </div>
    </div>
  )
}

export default MissionAbout