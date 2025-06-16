import React from 'react';
import MissionChallengeBanner from '../../assets/banners/challengeBanner.jpg';

const MissionChallenge = () => {
  return (
    <div className="text-gray-800">
      {/* Banner */}
      <div className="relative h-48 md:h-64 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 60, 80, 0.85), rgba(0, 128, 128, 0.6)), url(${MissionChallengeBanner})`,
          }}
        ></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-white text-3xl md:text-4xl font-bold text-center px-4 drop-shadow-lg">
            Smart Cities Challenge
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <p className="text-lg leading-relaxed text-justify">
          In 2015, the Union Ministry of Urban Development announced the Smart Cities Challenge. The challenge aims to create exemplar areas in cities by merging innovative plans with latest technologies. By creating these replicable exemplar areas it aims at redefining the way city is imagined in India. The Challenge aims to find solutions for the major problems of the cities by merging innovative plans and latest information technologies. It aims to improve economic opportunity, quality of life and ensure public accountability. In short, it aims at making life in the cities smarter and faster.
        </p>
        <p className="text-lg leading-relaxed text-justify">
          The Smart Cities Mission proposed a two stage selection process. In 2015, in the first stage of the challenge only Kochi got selected from Kerala though the state nominated six other cities including Thiruvananthapuram. Thankfully Kochi got selected in the final list of twenty states. To win the Smart City challenge, the cities chosen for challenge have to present project proposals developed in consultation with public and various other stakeholders. The mission stresses the use of information technology and social media to reach out to various sections. Once selected, the city will receive Rs. 500 crore from the centre in a span of five years to implement the proposal while the city administration and state government has to finance an equal amount. Though Thiruvananthapuram was not selected among the first 100, fortunately it was selected again for competition in May 2016. This has once again opened a chance for Trivandrum to finally prove its mettle and become a Smart Thiruvananthapuram. Smart Thiruvananthapuram is the bold response of the Thiruvananthapuram Corporation and its people to the challenge thrown at it by the Smart Cities Challenge. By taking this challenge up, the city corporation aims to remake the life and image of the city and create a city of a better future.
        </p>
      </div>

      {/* Download Section */}
      <div className="bg-teal-50 py-8 px-4 md:px-0">
        <div className="max-w-3xl mx-auto text-center bg-white rounded-xl shadow-md p-6 md:p-10">
          <p className="text-xl font-medium text-gray-700 mb-6">
            The process of selection of Smart Cities. Click below to download the PDF:
          </p>
          <a
            href="#"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default MissionChallenge;
