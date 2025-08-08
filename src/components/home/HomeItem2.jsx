import React from 'react';
import Vision from '../../assets/images/smart-city-vision.png';
import { useTranslation } from 'react-i18next';

const HomeItem2 = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Left: Content */}
        <div className="md:w-1/2 text-left" data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003049] mb-6">
            {t('homeItem2.visionTitle')}
          </h2>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed border-l-4 border-[#003049] pl-4 py-1">
            {t('homeItem2.visionText')}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#003049] mb-6 mt-10">
            {t('homeItem2.strategyTitle')}
          </h2>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed border-l-4 border-[#003049] pl-4 py-1">
            {t('homeItem2.strategyText')}
          </p>
          
          <a href="/misson-vision">
            <button className="bg-[#003049] hover:bg-[#001a2c] text-white px-8 py-3 text-lg font-medium transition duration-300 transform hover:scale-105">
              {t('homeItem2.readMore')}
            </button>
          </a>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 flex justify-center" data-aos="zoom-in-left">
          <div className="relative">
            <img 
              src={Vision} 
              alt={t('homeItem2.imageAlt')} 
              className="relative w-full max-w-md object-contain z-10 shadow-lg" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeItem2;
