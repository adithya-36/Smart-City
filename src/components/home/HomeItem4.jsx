import React, { useState, useEffect } from 'react';
import News1 from '../../assets/images/news/Palayam_News.jpeg';
import News2 from '../../assets/images/news/project_First_Phase.avif';
import News3 from '../../assets/images/news/cycle_track.avif';
import News from '../../assets/images/newss.png'
const HomeItem4 = () => {
  const announcements = [
    {
      date: 'June 04, 2025 08:14 am',
      title: 'Tension at Palayam Market over demolition of shops',
      excerpt: 'After initial attempt to remove materials from inside the shops and demolish the buildings were prevented by a section of the protesting traders, the drive continued with the support of the police',
      type: 'news',
      image: News1,
      link: 'https://timesofindia.indiatimes.com/city/thiruvananthapuram/smart-city-housing-project-1st-phase-nears-completion/articleshow/121916654.cms',
      source: 'The Hindu'
    },
    {
      date: 'June 18, 2025 03:04',
      title: 'Smart City housing project 1st phase nears completion',
      excerpt: 'The first phase of the redevelopment of Rajaji Nagar, under the Smart City Mission, is on track for completion by Sept 30 this year-well ahead of its original June 2025 deadline. Officials said construction was accelerated, with 40% of the work already complete.',
      type: 'news',
      image: News2,
      link: 'https://timesofindia.indiatimes.com/city/thiruvananthapuram/smart-city-housing-project-1st-phase-nears-completion/articleshow/121916654.cms',
      source: 'The Times of India'
    },
    {
      date: '23 May 2025, 6:00 am',
      title: "T'Puram cyclists feel city's new cycle track could have been 'smarter'",
      excerpt: 'The Smart Road Project is finally completed. However, pedestrians and cyclists point to obstructions along the path and unscientific construction that compromise safety on the footpath and cycle track',
      type: 'news',
      image: News3,
      link: 'https://www.newindianexpress.com/cities/thiruvananthapuram/2025/May/23/tpuram-cyclists-feel-citys-new-cycle-track-could-have-been-smarter',
      source: 'The New Indian Express'
    },
    {
      date: 'June 04, 2025 08:14 am',
      title: 'Tension at Palayam Market over demolition of shops',
      excerpt: 'After initial attempt to remove materials from inside the shops and demolish the buildings were prevented by a section of the protesting traders, the drive continued with the support of the police',
      type: 'news',
      image: News,
      link: 'https://timesofindia.indiatimes.com/city/thiruvananthapuram/smart-city-housing-project-1st-phase-nears-completion/articleshow/121916654.cms',
      source: 'The Hindu'
    },
    {
      date: 'June 18, 2025 03:04',
      title: 'Smart City housing project 1st phase nears completion',
      excerpt: 'The first phase of the redevelopment of Rajaji Nagar, under the Smart City Mission, is on track for completion by Sept 30 this year-well ahead of its original June 2025 deadline. Officials said construction was accelerated, with 40% of the work already complete.',
      type: 'news',
      image: News,
      link: 'https://timesofindia.indiatimes.com/city/thiruvananthapuram/smart-city-housing-project-1st-phase-nears-completion/articleshow/121916654.cms',
      source: 'The Times of India'
    },
    {
      date: '23 May 2025, 6:00 am',
      title: "T'Puram cyclists feel city's new cycle track could have been 'smarter'",
      excerpt: 'The Smart Road Project is finally completed. However, pedestrians and cyclists point to obstructions along the path and unscientific construction that compromise safety on the footpath and cycle track',
      type: 'news',
      image: News,
      link: 'https://www.newindianexpress.com/cities/thiruvananthapuram/2025/May/23/tpuram-cyclists-feel-citys-new-cycle-track-could-have-been-smarter',
      source: 'The New Indian Express'
    },
    // Existing announcements/news below
  ];

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
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </div>

      <div className="relative overflow-hidden">
        <button onClick={goToPrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 w-10 h-10 flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-50 transition -ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button onClick={goToNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 w-10 h-10 flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-50 transition -mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-300 ${isTransitioning ? 'opacity-70' : 'opacity-100'}`}>
          {visibleItems.map((item, index) => (
            <div key={`${item.title}-${index}`} className="bg-white border border-gray-200 h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="p-4 flex-1">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-600 text-white p-2 rounded mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" />
                      <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 capitalize">{item.type}</h3>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">{item.date}</span>
                  <span className="text-xs text-gray-500">{item.source}</span>
                </div>
                <h4 className="text-base font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{item.excerpt}</p>
              </div>
              <div className="p-4 border-t border-gray-100">
                <a href={item.link} className="text-blue-600 text-sm font-medium hover:underline" target="_blank" rel="noopener noreferrer">
                  Read full story
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: Math.ceil(announcements.length / itemsPerView) }).map((_, index) => (
          <button key={index} onClick={() => goToIndex(index)} className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`} aria-label={`Go to slide ${index + 1}`} />
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
