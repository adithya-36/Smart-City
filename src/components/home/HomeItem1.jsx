import React from 'react';
import Mlcp from '../../assets/images/mlcpSmart.jpg';

const HomeItem1 = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row gap-4 min-h-[600px] lg:min-h-[500px]">
        
        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2">
          <img
            src={Mlcp}
            alt="Smart City Trivandrum"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 px-6 py-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 border-b-2 border-[#184E77] pb-2">
            Welcome to Smart City Thiruvananthapuram Ltd.
          </h2>

          <p className="text-gray-700 leading-relaxed text-base">
            Smart City Thiruvananthapuram Limited is a Special Purpose Vehicle (SPV) set up for implementation of the Smart City Mission of Government of India with a project overlay of ₹1538 Cr. Thiruvananthapuram was selected in the third round of Smart City Selection and secured first rank in the Smart City Challenge in 2017.
          </p>

          <p className="text-gray-700 leading-relaxed text-base">
            The proposal submitted to GOI had 43 projects aimed at improving basic infrastructure of the city and harnessing the use of IT-based solutions to make the city smart.
          </p>

          <p className="text-gray-700 leading-relaxed text-base">
            The projects can be grouped into two categories: Pan City Solution (IT-based solution) for the entire corporation area and Area Based Development (ABD) Projects, specifically targeted for 9 wards in the city centre as a retrofit model.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeItem1;
