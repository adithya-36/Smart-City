import React from 'react'
import News1 from '../../assets/images/news/Palayam_News.jpeg';
import News2 from '../../assets/images/news/project_First_Phase.avif';
import News3 from '../../assets/images/news/cycle_track.avif';

const News = () => {
  const news = [
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
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-[#184E77] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">News & Updates</h1>
          <div className="w-24 h-1 bg-white mx-auto"></div>
          <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto">
            Stay informed with the latest developments and announcements from Smart City Thiruvananthapuram
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white text-sm">{item.source}</span>
                </div>
              </div>
              <div className="p-6 border-t border-gray-100">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-700">NEWS</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-[#1E6091] transition-colors">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                </h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#1E6091] font-medium hover:text-[#184E77] transition-colors"
                >
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex justify-center">
          <nav className="flex items-center space-x-1">
            <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100">
              &lt;
            </button>
            {[1, 2, 3, 4].map(page => (
              <button 
                key={page}
                className={`w-10 h-10 flex items-center justify-center ${
                  page === 1 
                    ? 'bg-[#184E77] text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100">
              &gt;
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default News