import React from 'react';

const CityHighlight = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#D9ED92] to-[#1E6091] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1E6091] mb-4">
            What makes Thiruvananthapuram Unique?
          </h1>
          <div className="h-1 w-32 bg-[#18AE77] mx-auto rounded-full"></div>
        </div>

        {/* SWOT Analysis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Strength */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-[#34A0A4]">
            <div className="bg-[#34A0A4] p-4">
              <h2 className="text-xl font-bold text-white">Strength</h2>
            </div>
            <ul className="p-4 space-y-3">
              <li className="flex items-start">
                <div className="bg-[#99D98C] rounded-full p-1 mt-1 mr-3">
                  <svg className="w-4 h-4 text-[#1E6091]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Major IT Hub in India</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#99D98C] rounded-full p-1 mt-1 mr-3">
                  <svg className="w-4 h-4 text-[#1E6091]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Highly literate and skilled workforce</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#99D98C] rounded-full p-1 mt-1 mr-3">
                  <svg className="w-4 h-4 text-[#1E6091]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Ranked as city providing best quality of life</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#99D98C] rounded-full p-1 mt-1 mr-3">
                  <svg className="w-4 h-4 text-[#1E6091]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Ranked as best governed city in India</span>
              </li>
            </ul>
          </div>

          {/* Opportunities */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-[#168AAD]">
            <div className="bg-[#168AAD] p-4">
              <h2 className="text-xl font-bold text-white">Opportunities</h2>
            </div>
            <ul className="p-4 space-y-3">
              <li className="flex items-start">
                <div className="bg-[#76C893] rounded-full p-1 mt-1 mr-3">
                  <svg className="w-4 h-4 text-[#1A759F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Prospects for strengthening of tourism economy</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#76C893] rounded-full p-1 mt-1 mr-3">
                  <svg className="w-4 h-4 text-[#1A759F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Upcoming metro rail projects and transhipment terminal</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#76C893] rounded-full p-1 mt-1 mr-3">
                  <svg className="w-4 h-4 text-[#1A759F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Electronic manufacturing based economic development</span>
              </li>
            </ul>
          </div>

          {/* Weakness */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-[#1A759F]">
            <div className="bg-[#1A759F] p-4">
              <h2 className="text-xl font-bold text-white">Weakness</h2>
            </div>
            <ul className="p-4 space-y-3">
              <li className="flex items-start">
                <div className="bg-[#52B69A] rounded-full p-1 mt-1 mr-3">
                  <svg className="w-4 h-4 text-[#1E6091]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Deficient Sewerage Infrastructure</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#52B69A] rounded-full p-1 mt-1 mr-3">
                  <svg className="w-4 h-4 text-[#1E6091]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Deteriorating condition of water bodies</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#52B69A] rounded-full p-1 mt-1 mr-3">
                  <svg className="w-4 h-4 text-[#1E6091]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Lack of end to end waste management system</span>
              </li>
            </ul>
          </div>

          {/* Threats */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-[#1E6091]">
            <div className="bg-[#1E6091] p-4">
              <h2 className="text-xl font-bold text-white">Threats</h2>
            </div>
            <ul className="p-4 space-y-3">
              <li className="flex items-start">
                <div className="bg-[#34A0A4] rounded-full p-1 mt-1 mr-3">
                  <svg className="w-4 h-4 text-[#1E6091]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Economic devaluation due to flooding and water logging in city core area</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#34A0A4] rounded-full p-1 mt-1 mr-3">
                  <svg className="w-4 h-4 text-[#1E6091]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Environmental degradation</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#34A0A4] rounded-full p-1 mt-1 mr-3">
                  <svg className="w-4 h-4 text-[#1E6091]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Motorized-vehicle oriented Urban Transport</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Awards Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-center text-[#1E6091] mb-6">
            Awards and Recognition
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#18AE77] bg-opacity-10 p-5 rounded-lg border-l-4 border-[#18AE77]">
              <p className="text-gray-700">
                Selected as ‘Best governed city in India’ in 2017 by Janaagraha Center for Citizenship & Democracy
              </p>
            </div>
            
            <div className="bg-[#18AE77] bg-opacity-10 p-5 rounded-lg border-l-4 border-[#18AE77]">
              <p className="text-gray-700">
                Selected as ‘Best city’ of India under Housing & Transport category in 2013 by India Today
              </p>
            </div>
            
            <div className="bg-[#18AE77] bg-opacity-10 p-5 rounded-lg border-l-4 border-[#18AE77]">
              <p className="text-gray-700">
                Listed among top 10 cities in India on Vibrancy and Consumption Index by Morgan Stanley
              </p>
            </div>
            
            <div className="bg-[#18AE77] bg-opacity-10 p-5 rounded-lg border-l-4 border-[#18AE77]">
              <p className="text-gray-700">
                Rated as the ‘best 2nd tier metro’ with IT/ITeS infrastructure & second in terms of availability of human talent
              </p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
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
  );
};

export default CityHighlight;