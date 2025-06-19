import React, { useState, useEffect, useRef } from 'react';
import Logo from '../../assets/images/SCTLLogo.png';
import GovKerala from '../../assets/images/govKerala.png';
import navigation from '../../data/navData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const bannerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current && navbarRef.current) {
        const bannerRect = bannerRef.current.getBoundingClientRect();
        const navbarHeight = navbarRef.current.offsetHeight;
        setIsScrolled(bannerRect.bottom <= navbarHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <div className="font-sans">
      <div ref={bannerRef} className="bg-[#184E77] py-4">
        <div className="w-full mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Navigation Bar */}
          <div 
            ref={navbarRef}
            className={`w-full left-0 min-h-[60px] transition-all duration-300 z-50 ${
              isScrolled 
                ? 'fixed top-0 shadow-lg bg-[#184E77] backdrop-blur-sm' 
                : 'sticky top-0'
            }`}
          >
            <div className="w-full mx-auto px-4 py-2 flex items-center justify-center gap-4 lg:gap-6">
              {/* Desktop Menu */}
              <div className="hidden lg:flex space-x-1 items-center overflow-visible">
                {navigation.map((item) => (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a
                      href={item.href || '#'}
                      className="relative text-white hover:text-[#d9ed92] font-medium text-base flex items-center px-4 py-2 transition-colors duration-200 whitespace-nowrap"
                    >
                      {item.name}
                      {/* Animated underline */}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#d9ed92] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    {item.dropdown && activeDropdown === item.name && (
                      <div className="absolute left-0 mt-1 bg-white shadow-xl rounded-sm py-2 w-56 z-50 border border-gray-200">
                        {item.dropdown.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150 border-b border-gray-100 last:border-b-0"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden flex items-center">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors duration-200"
                >
                  {menuOpen ? (
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
              <div className="lg:hidden px-4 pb-4 bg-blue-600">
                {navigation.map((item) => (
                  <div key={item.name} className="py-2 border-b border-blue-500">
                    <div className="flex justify-between items-center">
                      <a
                        href={item.href || '#'}
                        className="block text-white font-medium text-base py-2 pl-2 rounded-lg w-full"
                        onClick={(e) => {
                          if (item.dropdown) {
                            e.preventDefault();
                            toggleMobileDropdown(item.name);
                          }
                        }}
                      >
                        <span className="relative">
                          {item.name}
                          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#d9ed92] transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </a>
                      {item.dropdown && (
                        <button 
                          onClick={() => toggleMobileDropdown(item.name)}
                          className="p-2 text-white"
                        >
                          <svg 
                            className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      )}
                    </div>
                    {item.dropdown && activeDropdown === item.name && (
                      <div className="pl-4 mt-1 bg-white rounded-sm border border-gray-200">
                        {item.dropdown.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            className="block text-sm text-gray-700 py-3 px-5 border-b border-gray-100 last:border-b-0 hover:bg-gray-100"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Mobile Search Bar */}
                <div className="mt-4 flex items-center bg-white rounded-lg overflow-hidden">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="px-4 py-2 text-gray-700 text-base w-full outline-none"
                  />
                  <button className="bg-blue-600 px-4 py-2 hover:bg-blue-500 text-white">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;