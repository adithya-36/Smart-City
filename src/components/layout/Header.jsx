import React, { useState } from 'react';
import { FaUser, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import Logo from '../../assets/images/SCTLLogo.png';
import GovKerala from '../../assets/images/govKerala.png';
import { useTranslation } from 'react-i18next';
import '../../i18n';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation(); 
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ml' : 'en'; 
    i18n.changeLanguage(newLang); 
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="bg-[#184E77] text-white" data-cy="header">
      {/* Main Header */}
      <div className="px-4">
        <div className="max-w-8xl mx-auto flex justify-between items-center py-3">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/" className="h-12 w-16 flex items-center justify-center">
              <img src={Logo} alt="Smart city logo" className="h-full" />
            </a>
            <div className="ml-2">
              <a href="https://tmc.lsgkerala.gov.in/en/home" target="_blank" rel="noopener noreferrer">
                <img className='h-12' src={GovKerala} alt="Govt of kerala" />
              </a>
            </div>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Phone & Email */}
            <div className="flex items-center gap-6">
              <a
                href="tel:+91-0471-4010374"
                className="flex items-center text-sm hover:text-gray-300 transition-colors"
              >
                <FaPhone className='w-4 h-4 mr-1' />
                <span>+91-0471-4010374</span>
              </a>
              <a
                href="mailto:info@smartcitytvm.in"
                className="flex items-center gap-1 text-sm hover:text-gray-300 transition-colors"
              >
                <MdEmail className='w-4 h-4' />
                <span>info@smartcitytvm.in</span>
              </a>
            </div>

            {/* Vertical Divider */}
            <div className="h-6 w-px bg-[#1E6091]"></div>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center px-3 py-1 hover:bg-[#1E6091] transition-colors text-sm"
            >
              <span className="mr-2 font-medium">
                {i18n.language === 'en' ? 'EN' : 'ML'} {/* ✅ Display lang code */}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </button>

            {/* Vertical Divider */}
            <div className="h-6 w-px bg-[#1E6091]"></div>

            {/* Citizen Portal Link */}
            <a
              href="#"
              className="flex items-center hover:text-gray-300 transition-colors text-sm"
            >
              <FaUser className="mr-2 w-4 h-4" />
              {t('citizen_portal')} {/* ✅ Translated text */}
            </a>

            {/* Smart App Link */}
            <a
              href="#"
              className="flex items-center hover:text-gray-300 transition-colors text-sm"
            >
              <IoPhonePortraitOutline className='w-5 h-5 mr-1' />
              <span>{t('smart_app')}</span> {/* ✅ Translated text */}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1E6091] py-4 px-4">
          <div className="flex flex-col gap-4">
            {/* Phone & Email */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:+9104714010374"
                className="flex items-center gap-2 text-sm hover:text-gray-300"
              >
                <FaPhone className='w-4 h-4' />
                <span>+91 - 0471 - 4010374</span>
              </a>
              <a
                href="mailto:info@smartcitytvm.in"
                className="flex items-center gap-2 text-sm hover:text-gray-300"
              >
                <MdEmail className='w-5 h-5' />
                <span>info@smartcitytvm.in</span>
              </a>
            </div>

            <div className="flex flex-col gap-2">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="w-full flex items-center justify-center px-3 py-2 hover:bg-[#184E77] transition-colors text-sm"
              >
                <span className="mr-2 font-medium">
                  {i18n.language === 'en' ? 'EN' : 'ML'} {/* ✅ Translated */}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </button>

              {/* Citizen Portal Link */}
              <a
                href="#"
                className="w-full flex items-center justify-center px-3 py-2 hover:bg-[#184E77] transition-colors text-sm"
              >
                <FaUser className="mr-2 w-4 h-4" />
                {t('citizen_portal')} {/* ✅ */}
              </a>

              {/* Smart App Link */}
              <a
                href="#"
                className="w-full flex items-center justify-center px-3 py-2 hover:bg-[#184E77] transition-colors text-sm"
              >
                <IoPhonePortraitOutline className='w-5 h-5 mr-2' />
                <span>{t('smart_app')}</span> {/* ✅ */}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;