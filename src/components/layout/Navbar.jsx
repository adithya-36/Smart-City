import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const Navbar = () => {
  const [navigation, setNavigation] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const bannerRef = useRef(null);
  const navbarRef = useRef(null);
  const searchInputRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Scroll logic for sticky navbar
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

  // Fetch nav and page data
  useEffect(() => {
    const fetchNavigation = async () => {
      try {
        const [navRes, pageRes] = await Promise.all([
          axios.get('http://127.0.0.1:8000/api/navigation/'),
          axios.get('http://127.0.0.1:8000/api/pages/')
        ]);

        const navItems = navRes.data;
        const pages = pageRes.data;

        const structuredNav = navItems.map(nav => {
          const pageLinks = pages
            .filter(p => p.navigation_item === nav.id)
            .map(p => ({
              name: p.title,
              href: `/pages/${p.id}`
            }));

          const dropdownsFromNav = Array.isArray(nav.dropdown) ? nav.dropdown.map(d => ({
            name: d.name,
            href: d.href
          })) : [];

          return {
            ...nav,
            dropdown: dropdownsFromNav.length > 0 ? dropdownsFromNav : null,
            pages: pageLinks
          };
        });

        setNavigation(structuredNav);
      } catch (err) {
        console.error('Failed to fetch navigation:', err);
      }
    };

    fetchNavigation();
  }, []);

  const toggleMobileDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleSearchToggle = () => {
    setShowSearch(prev => !prev);
    setTimeout(() => {
      if (!showSearch && searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, 100);
  };

  const handleSearchSubmit = () => {
    if (!searchQuery.trim()) return;
    navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    setShowSearch(false);
    setSearchQuery('');
    setMenuOpen(false);
  };

  return (
    <div className="font-sans" data-cy="navbar">
      <div ref={bannerRef} className="bg-[#184E77] py-4">
        <div className="w-full mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div
            ref={navbarRef}
            className={`w-full left-0 min-h-[60px] transition-all duration-300 z-50 ${isScrolled ? 'fixed top-0 shadow-lg bg-[#184E77] backdrop-blur-sm' : 'sticky top-0'}`}
          >
            <div className="w-full mx-auto px-4 py-2 flex items-center justify-between">
              <div className="hidden lg:flex flex-1 justify-center space-x-1 items-center overflow-visible">
                {navigation.map(item => (
                  <div key={item.name} className="relative group" onMouseEnter={() => setActiveDropdown(item.name)} onMouseLeave={() => setActiveDropdown(null)}>
                    <NavLink
                      to={item.href || '#'}
                      className={({ isActive }) =>
                        `relative font-medium text-base flex items-center px-4 py-2 transition-colors duration-200 whitespace-nowrap text-white hover:text-[#1E6091] after:absolute after:left-0 after:bottom-0 after:h-0.5 ${isActive ? 'after:w-full after:bg-yellow-400' : 'after:w-0 after:bg-[#d9ed92] group-hover:after:w-full after:transition-all after:duration-300'}`
                      }
                    >
                      {t(`navbar.${item.name}`, item.name)}
                    </NavLink>

                    {(item.dropdown || item.pages.length > 0) && activeDropdown === item.name && (
                      <div className="absolute left-0 mt-1 bg-white shadow-xl rounded-sm py-2 w-56 z-50 border border-gray-200">
                        {item.dropdown && item.dropdown.map(sub => (
                          <NavLink key={sub.name} to={sub.href} className={({ isActive }) => `block px-5 py-3 text-sm border-b border-gray-100 last:border-b-0 transition-colors duration-150 ${isActive ? 'text-[#184E77] font-medium' : 'text-gray-700'} hover:text-[#1E6091] hover:bg-gray-100`}>
                            {t(`navbar.${sub.name}`, sub.name)}
                          </NavLink>
                        ))}
                        {item.pages.map(p => (
                          <NavLink key={p.name} to={p.href} className={({ isActive }) => `block px-5 py-3 text-sm border-b border-gray-100 last:border-b-0 transition-colors duration-150 ${isActive ? 'text-[#184E77] font-medium' : 'text-gray-700'} hover:text-[#1E6091] hover:bg-gray-100`}>
                            {t(`navbar.${p.name}`, p.name)}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 ml-auto">
                <button onClick={handleSearchToggle} className="text-white text-2xl hover:text-[#d9ed92] transition-all">
                  <IoSearch />
                </button>
                <div className="lg:hidden">
                  <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 bg-[#184E77] hover:bg-[#1E6091] transition-colors duration-200">
                    {menuOpen ? <RxCross1 className='text-3xl text-white' /> : <GiHamburgerMenu className='text-3xl text-white' />}
                  </button>
                </div>
              </div>
            </div>
            {menuOpen && (
              <div className="lg:hidden bg-[#184E77] text-white w-full px-4 py-4 space-y-2">
                {navigation.map(item => (
                  <div key={item.name}>
                    <NavLink
                      to={item.href || '#'}
                      className="block py-2 border-b border-[#1E6091]"
                      onClick={() => setMenuOpen(false)}
                    >
                      {t(`navbar.${item.name}`, item.name)}
                    </NavLink>

                    {(item.dropdown || item.pages.length > 0) && (
                      <div className="pl-4 space-y-1">
                        {item.dropdown && item.dropdown.map(sub => (
                          <NavLink
                            key={sub.name}
                            to={sub.href}
                            className="block py-1 text-sm border-b border-[#1E6091]"
                            onClick={() => setMenuOpen(false)}
                          >
                            {t(`navbar.${sub.name}`, sub.name)}
                          </NavLink>
                        ))}
                        {item.pages.map(p => (
                          <NavLink
                            key={p.name}
                            to={p.href}
                            className="block py-1 text-sm border-b border-[#1E6091]"
                            onClick={() => setMenuOpen(false)}
                          >
                            {t(`navbar.${p.name}`, p.name)}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {showSearch && (
              <div className="w-full bg-white px-4 py-2 flex justify-center items-center border-t border-gray-200">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder={t('navbar.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()}
                  className="w-full max-w-md border border-[#1E6091] rounded-md px-4 py-2 text-base outline-none text-gray-800"
                />
                <button
                  onClick={handleSearchSubmit}
                  className="ml-2 bg-[#1E6091] text-white px-4 py-2 rounded hover:bg-[#184E77]"
                >
                  {t('navbar.Search')}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
