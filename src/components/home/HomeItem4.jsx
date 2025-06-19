import React, { useState, useEffect } from 'react';
import News from '../../assets/images/newss.png';

const HomeItem4 = () => {
  const announcements = [
    {
      title: 'SCTL Inviting E Tenders for the Development of Chalai Warehouse',
      link: '#',
      isNew: true,
      date: 'May 15, 2025',
      type: 'announcement',
      image: News
    },
    {
      title: 'Information Handbook to Citizens for Smart City Project - Published',
      link: '#',
      isNew: true,
      date: 'May 14, 2025',
      type: 'announcement',
      image: News  
    },
    {
      title: 'Upcoming Workshop on Urban Mobility – Register Now',
      link: '#',
      isNew: false,
      date: 'May 12, 2025',
      type: 'announcement',
      image: News
    },
    {
      date: '14 MAY 2025',
      title: 'Smart City roads to be inaugurated by chief minister in Thiruvananthapuram on Friday',
      excerpt: 'The new smart roads project will enhance urban mobility and reduce traffic congestion in the city center.',
      type: 'news',
      image: News
    },
    {
      date: '13 MAY 2025',
      title: 'Green initiatives launched in Thiruvananthapuram Smart City',
      excerpt: 'New sustainability projects include solar-powered streetlights and expanded green spaces.',
      type: 'news',
      image: News
    },
    {
      date: '11 MAY 2025',
      title: 'Digital transformation accelerates in government services',
      excerpt: 'Citizens can now access 15 new services through the Smart City mobile app.',
      type: 'news',
      image: News
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Calculate items per view based on screen width
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

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, itemsPerView]);

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(prev => 
        prev >= announcements.length - itemsPerView ? 0 : prev + 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const goToPrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(prev => 
        prev === 0 ? announcements.length - itemsPerView : prev - 1
      );
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

  // Calculate visible items
  const visibleItems = announcements.slice(currentIndex, currentIndex + itemsPerView);
  
  // If we don't have enough items to fill the view, add items from the beginning
  if (visibleItems.length < itemsPerView) {
    visibleItems.push(...announcements.slice(0, itemsPerView - visibleItems.length));
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Updates & Announcements</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </div>

      <div className="relative overflow-hidden">
        {/* Navigation arrows */}
        <button 
          onClick={goToPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 w-10 h-10 flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-50 transition -ml-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 w-10 h-10 flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-50 transition -mr-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel items */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-300 ${
            isTransitioning ? 'opacity-70' : 'opacity-100'
          }`}
        >
          {visibleItems.map((item, index) => (
            <div 
              key={`${item.title}-${index}`} 
              className="bg-white border border-gray-200 h-full flex flex-col"
            >
              {/* Image section - common for both types */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              {item.type === 'announcement' ? (
                <>
                  <div className="p-4 flex-1">
                    <div className="flex items-center mb-3">
                      <div className="bg-blue-600 text-white p-2 rounded mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">Announcement</h3>
                    </div>
                    
                    <div className="flex justify-between items-start mb-3">
                      {item.isNew && (
                        <span className="text-xs font-bold text-white bg-red-500 px-2 py-1 rounded mr-2">
                          NEW
                        </span>
                      )}
                      <span className="text-xs text-gray-500">{item.date}</span>
                    </div>
                    <h4 className="text-base font-semibold text-gray-800 mb-3">{item.title}</h4>
                  </div>
                  
                  <div className="p-4 border-t border-gray-100">
                    <a 
                      href={item.link} 
                      className="text-blue-600 text-sm font-medium hover:underline flex items-center"
                    >
                      Read more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-4 flex-1">
                    <div className="flex items-center mb-3">
                      <div className="bg-blue-600 text-white p-2 rounded mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                          <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">News</h3>
                    </div>
                    
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {item.date}
                      </span>
                      <span className="text-xs text-gray-500">3 min read</span>
                    </div>
                    <h4 className="text-base font-bold text-gray-800 mb-3">{item.title}</h4>
                    <p className="text-sm text-gray-600 mb-4">{item.excerpt}</p>
                  </div>
                  
                  <div className="p-4 border-t border-gray-100">
                    <a 
                      href="#" 
                      className="text-blue-600 text-sm font-medium hover:underline"
                    >
                      Read full story
                    </a>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: Math.ceil(announcements.length / itemsPerView) }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="inline-flex items-center px-6 py-3 bg-[#184E77] text-white font-medium hover:bg-[#0e3a5d] transition-colors">
          View All Updates
          <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HomeItem4;