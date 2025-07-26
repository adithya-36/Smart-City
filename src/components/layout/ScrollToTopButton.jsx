import React, { useState, useEffect } from 'react';
import { IoMdArrowRoundUp } from "react-icons/io";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when scrolled 1/4th of viewport height
      const quarterScreenHeight = window.innerHeight / 4;
      if (window.pageYOffset > quarterScreenHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`fixed bottom-8 right-8 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} data-cy="scroll-to-top-button">

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[#1E6091] text-white p-3 mb-8 shadow-lg hover:bg-[#184E77] transition-all duration-200 focus:outline-none animate-bounce"
          aria-label="Scroll to top"
        >
          <IoMdArrowRoundUp className='text-3xl ' />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;