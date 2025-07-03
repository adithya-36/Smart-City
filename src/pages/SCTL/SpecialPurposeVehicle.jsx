import React from 'react';
import BoardOfDirectors from './specialPurpose/BoardOfDirectors';
import CEOs from './specialPurpose/CEOs';
import Staffs from './specialPurpose/Staffs';
import Banner from '../../assets/banners/spvBanner.png';
import AdvisoryForm from './spv/1-Advisory-Forum-001-1-converted.pdf';
import SPVCreation from './spv/creation_of_spv.pdf';

const SpecialPurposeVehicle = () => {
  return (
    <div className="bg-gray-50">
      {/* Banner */}
      <div className="relative h-48 md:h-64 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(24, 78, 119, 0.9), rgba(30, 96, 145, 0.8)), url(${Banner})`,
          }}
        ></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4">
            Special Purpose Vehicle
          </h1>
        </div>
      </div>

      {/* PDF Links Section - Right Aligned */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-end space-x-4 mb-8">
          <a 
            href={AdvisoryForm} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#1E6091] text-white hover:bg-[#184E77] transition-colors duration-200 font-medium"
          >
            Advisory Forum PDF
          </a>
          <a 
            href={SPVCreation} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#1E6091] text-white hover:bg-[#184E77] transition-colors duration-200 font-medium"
          >
            SPV Creation PDF
          </a>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          <BoardOfDirectors />
          <CEOs />
          <Staffs />
        </div>
      </div>
    </div>
  );
};

export default SpecialPurposeVehicle;