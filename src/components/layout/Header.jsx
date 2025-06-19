import React, { useState } from 'react';
import UserIcon from '../../assets/images/user.png';
import PhoneIcon from '../../assets/images/mobile.png';
import SmartPhoneIcon from '../../assets/images/smartphone.png';

import EmailIcon from '../../assets/images/mail.png';
import Logo from '../../assets/images/SCTLLogo.png';
import GovKerala from '../../assets/images/govKerala.png';// Make sure this file exists

const Header = () => {
  const [language, setLanguage] = useState('english');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'english' ? 'malayalam' : 'english');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const content = {
    citizenPortal: {
      english: "Citizen Portal",
      malayalam: "പൗര പോർട്ടൽ"
    },
    smartApp: {
      english: "Smart TVM App",
      malayalam: "സ്മാർട്ട് ടിവിഎം ആപ്പ്"
    }
  };

  return (
    <div className="bg-[#184E77] text-white">
      {/* Main Header */}
      <div className="px-3">
        <div className=" max-w-8xl mx-auto flex justify-between items-center">
          {/* Logo Placeholder */}
          <div className="flex items-center">
            <div className="h-12 w-16 bg-gray-20 flex items-center justify-center text-gray-500">
              <img src={Logo} alt="Smart city logo" />
            </div>
            <div className="p-2">
              <div className="flex items-start justify-center">
                <img className='h-12' src={GovKerala} alt="Govt of kerala" />
              </div>
            </div>
          </div>
          <div className="flex"></div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Phone & Email */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+91-0471-4010374"
                className="flex items-center text-sm hover:text-[#2DC7FF] transition-colors"
              >
                <img src={PhoneIcon} alt="phone" className="w-6 h-6 mt-1" />
                <span>+91-0471-4010374</span>
              </a>
              <a
                href="mailto:info@smartcitytvm.in"
                className="flex items-center gap-1 text-sm hover:text-[#2DC7FF] transition-colors"
              >
                <img src={EmailIcon} alt="email" className="w-6 h-6 mt-1" />
                <span>info@smartcitytvm.in</span>
              </a>
            </div>

            {/* Vertical Divider */}
            <div className="h-6 w-px bg-[#00ABE7]"></div>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center px-3 py-1 rounded bg-[#00ABE7] hover:bg-[#2DC7FF] transition-colors text-sm"
            >
              <span className="mr-2 font-medium">
                {language === 'english' ? 'EN' : 'ML'}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </button>

            {/* Vertical Divider */}
            <div className="h-6 w-px bg-[#00ABE7]"></div>

            {/* Citizen Portal Link */}
            <a
              href="#"
              className="flex items-center hover:text-[#2DC7FF] transition-colors text-sm"
            >
              <img src={UserIcon} alt="user" className="mr-2 w-4" />
              {content.citizenPortal[language]}
            </a>

            {/* Smart App Link */}
            <a
              href="#"
              className="flex items-center hover:text-[#2DC7FF] transition-colors text-sm"
            >
              <img className="mr-2 w-4" src={SmartPhoneIcon} alt="phone" />
              <span>{content.smartApp[language]}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#006B9E] py-4 px-4">
          <div className="flex flex-col gap-4">
            {/* Phone & Email */}
            <div className="flex flex-col gap-3 items-center">
              <a
                href="tel:+9104714010374"
                className="flex items-center gap-2 text-sm"
              >
                <img src={PhoneIcon} alt="phone" className="w-4 h-4" />
                <span>+91 - 0471 - 4010374</span>
              </a>
              <a
                href="mailto:info@smartcitytvm.in"
                className="flex items-center gap-2 text-sm"
              >
                <img src={EmailIcon} alt="email" className="w-4 h-4" />
                <span>info@smartcitytvm.in</span>
              </a>
            </div>

            <div className="flex flex-col items-center gap-2">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="w-full max-w-[200px] flex items-center justify-center px-3 py-1.5 rounded bg-[#00ABE7] hover:bg-[#2DC7FF] transition-colors text-sm"
              >
                <span className="mr-2 font-medium">
                  {language === 'english' ? 'EN' : 'ML'}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </button>

              {/* Citizen Portal Link */}
              <a
                href="#"
                className="w-full max-w-[200px] flex items-center justify-center px-3 py-1.5 rounded bg-[#00ABE7] hover:bg-[#2DC7FF] transition-colors text-sm"
              >
                <img src={UserIcon} alt="user" className="mr-2 w-4" />
                {content.citizenPortal[language]}
              </a>

              {/* Smart App Link */}
              <a
                href="#"
                className="w-full max-w-[200px] flex items-center justify-center px-3 py-1.5 rounded bg-[#00ABE7] hover:bg-[#2DC7FF] transition-colors text-sm"
              >
                <img className="mr-2 w-4" src={PhoneIcon} alt="phone" />
                <span>{content.smartApp[language]}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;