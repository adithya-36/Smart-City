import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoNewspaper } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
const HomeItem4 = () => {
  const [announcements, setAnnouncements] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/api/latest-news/')
      .then(response => {
        setAnnouncements(response.data);
      })
      .catch(error => {
        console.error("Error fetching latest news:", error);
      });
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, itemsPerView]);

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(prev => prev >= announcements.length - itemsPerView ? 0 : prev + 1);
      setIsTransitioning(false);
    }, 300);
  };

  const goToPrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(prev => prev === 0 ? announcements.length - itemsPerView : prev - 1);
      setIsTransitioning(false);
    }, 300);
  };

  const goToIndex = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  const visibleItems = announcements.slice(currentIndex, currentIndex + itemsPerView);
  if (visibleItems.length < itemsPerView) {
    visibleItems.push(...announcements.slice(0, itemsPerView - visibleItems.length));
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Updates & Announcements</h2>
        <div className="w-20 h-1 bg-[#184E77] mx-auto"></div>
      </div>

      <div className="relative overflow-hidden">
        <button onClick={goToPrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 w-10 h-10 flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-50 transition -ml-4">
          <GrPrevious style={{ color: '#1E6091', width: 50 }} />
        </button>

        <button onClick={goToNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 w-10 h-10 flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-50 transition -mr-4">
          <GrNext style={{ color: '#1E6091', width: 50 }} />
        </button>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-300 ${isTransitioning ? 'opacity-70' : 'opacity-100'}`}>
          {visibleItems.map((item, index) => (
            <div key={`${item.title}-${index}`} className="bg-white border border-gray-200 h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />


              </div>
              <div className="p-4 flex-1">
                <div className="flex items-center mb-3">
                  <div className="bg-[#184E77] text-white p-2 rounded mr-2">
                    <IoNewspaper className='w-5 h-5' />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 capitalize">{item.type}</h3>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-[#184E77] bg-blue-50 px-2 py-1 rounded">{item.date}</span>
                  <span className="text-xs text-gray-500">{item.source}</span>
                </div>
                <h4 className="text-base font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{item.excerpt}</p>
              </div>
              <div className="p-4 border-t border-gray-100">
                <a href={item.link} className="text-[#184E77] text-sm font-medium hover:underline" target="_blank" rel="noopener noreferrer">
                  Read full story
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: Math.ceil(announcements.length / itemsPerView) }).map((_, index) => (
          <button key={index} onClick={() => goToIndex(index)} className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-[#184E77]' : 'bg-gray-300'}`} aria-label={`Go to slide ${index + 1}`} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <a href="/news">
          <button className="inline-flex items-center px-6 py-3 bg-[#184E77] text-white font-medium hover:bg-[#0e3a5d] transition-colors">
            View All Updates
            <FaArrowRightLong className='ml-2 h-4 w-4' />
          </button></a>

      </div>
    </div>
  );
};

export default HomeItem4;
