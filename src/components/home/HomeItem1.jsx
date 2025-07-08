import React from 'react';
import Mlcp from '../../assets/images/mlcpSmart.jpg';
import { useTranslation } from 'react-i18next';

const HomeItem1 = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row gap-4 min-h-[600px] lg:min-h-[500px]">
        
        {/* LEFT IMAGE */}
        <div
          className="w-full lg:w-1/2"
          data-aos="zoom-in-right"
        >
          <img
            src={Mlcp}
            alt={t("homeItem1.imageAlt")}
            className="w-full h-full object-cover rounded-sm shadow-lg"
          />
        </div>

        {/* RIGHT TEXT */}
        <div
          className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 px-6 py-8"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 border-b-2 border-[#184E77] pb-2">
            {t("homeItem1.heading")}
          </h2>

          <p className="text-gray-700 leading-relaxed text-base">
            {t("homeItem1.para1")}
          </p>

          <p className="text-gray-700 leading-relaxed text-base">
            {t("homeItem1.para2")}
          </p>

          <p className="text-gray-700 leading-relaxed text-base">
            {t("homeItem1.para3")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeItem1;
