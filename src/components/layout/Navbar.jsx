import React, { useState, useEffect, useRef } from 'react';
import navigation from '../../data/navData';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const bannerRef = useRef(null);
  const navbarRef = useRef(null);
  const searchInputRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current && navbarRef.current) {
        const bannerRect = bannerRef.current.getBoundingClientRect();
        const navbarHeight = navbarRef.current.offsetHeight;
        setIsScrolled(bannerRect.bottom <= navbarHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleSearchToggle = () => {
    setShowSearch((prev) => !prev);
    setTimeout(() => {
      if (!showSearch && searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, 100);
  };

  return (
    <div className="font-sans">
      <div ref={bannerRef} className="bg-[#184E77] py-4">
        <div className="w-full mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Navigation Bar */}
          <div
            ref={navbarRef}
            className={`w-full left-0 min-h-[60px] transition-all duration-300 z-50 ${isScrolled
              ? 'fixed top-0 shadow-lg bg-[#184E77] backdrop-blur-sm'
              : 'sticky top-0'
              }`}
          >
            <div className="w-full mx-auto px-4 py-2 flex items-center justify-center">
              {/* Left: Menu Items */}
              <div className="hidden lg:flex space-x-1 items-center overflow-visible">
                {navigation.map((item) => (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <NavLink
                      to={item.href || '#'}
                      className={({ isActive }) =>
                        `relative font-medium text-base flex items-center px-4 py-2 transition-colors duration-200 whitespace-nowrap text-white hover:text-[#1E6091]
                        after:absolute after:left-0 after:bottom-0 after:h-0.5
                        ${isActive
                          ? 'after:w-full after:bg-yellow-400'
                          : 'after:w-0 after:bg-[#d9ed92] group-hover:after:w-full after:transition-all after:duration-300'
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                    {item.dropdown && activeDropdown === item.name && (
                      <div className="absolute left-0 mt-1 bg-white shadow-xl rounded-sm py-2 w-56 z-50 border border-gray-200">
                        {item.dropdown.map((sub) => (
                          <NavLink
                            key={sub.name}
                            to={sub.href}
                            className={({ isActive }) =>
                              `block px-5 py-3 text-sm border-b border-gray-100 last:border-b-0 transition-colors duration-150 ${isActive ? 'text-[#184E77] font-medium' : 'text-gray-700'
                              } hover:text-[#1E6091] hover:bg-gray-100`
                            }
                          >
                            {sub.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Right: Search & Mobile Toggle */}
              <div className="flex items-center gap-4">
                <button
                  onClick={handleSearchToggle}
                  className="text-white ml-4 text-2xl hover:text-[#d9ed92] transition-all"
                >
                  <IoSearch />
                </button>

                <div className="lg:hidden">
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="p-2 bg-[#184E77] hover:bg-[#1E6091] transition-colors duration-200"
                  >
                    {menuOpen ? (
                      <RxCross1 className='text-3xl text-white' />
                    ) : (
                      <GiHamburgerMenu className='text-3xl text-white' />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Collapsible Search Bar */}
            {showSearch && (
              <div className="w-full bg-white px-4 py-2 flex justify-center items-center border-t border-gray-200">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search..."
                  className="w-full max-w-md border border-[#1E6091] rounded-md px-4 py-2 text-base outline-none text-gray-800"
                />
              </div>
            )}

            {/* Mobile Dropdown */}
            {menuOpen && (
              <div className="lg:hidden px-4 pb-4 bg-[#184E77]">
                {navigation.map((item) => (
                  <div key={item.name} className="py-2 border-b border-blue-500">
                    <div className="flex justify-between items-center">
                      <NavLink
                        to={item.href || '#'}
                        className={({ isActive }) =>
                          `block font-medium text-base py-2 pl-2 rounded-lg w-full transition-colors duration-150 ${isActive ? 'text-[#184E77] bg-white' : 'text-white'
                          } hover:text-[#1E6091]`
                        }
                        onClick={(e) => {
                          if (item.dropdown) {
                            e.preventDefault();
                            toggleMobileDropdown(item.name);
                          }
                        }}
                      >
                        {item.name}
                      </NavLink>
                      {item.dropdown && (
                        <button
                          onClick={() => toggleMobileDropdown(item.name)}
                          className="p-2 text-white"
                        >
                          <RiArrowDropDownLine className="text-3xl" />
                        </button>
                      )}
                    </div>
                    {item.dropdown && activeDropdown === item.name && (
                      <div className="pl-4 mt-1 bg-white rounded-sm border border-gray-200">
                        {item.dropdown.map((sub) => (
                          <NavLink
                            key={sub.name}
                            to={sub.href}
                            className={({ isActive }) =>
                              `block text-sm py-3 px-5 border-b border-gray-100 last:border-b-0 transition-colors duration-150 ${isActive ? 'text-[#184E77] font-medium' : 'text-gray-700'
                              } hover:text-[#1E6091] hover:bg-gray-100`
                            }
                          >
                            {sub.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
