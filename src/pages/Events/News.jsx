import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaArrowRightLong } from "react-icons/fa6";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8000/api/news/')
      .then(response => {
        setNews(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
        setLoading(false);
      });
  }, []);

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
        {loading ? (
          <p className="text-center text-gray-500">Loading news...</p>
        ) : (
          <>
            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item, index) => (
                <div key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image.startsWith('http') ? item.image : `http://localhost:8000${item.image}`}
                      alt={item.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/fallback.jpg'; // Optional fallback image
                      }}
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
                      <FaArrowRightLong className='ml-2 text-lg' />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination (Static Placeholder) */}
            <div className="mt-16 flex justify-center">
              <nav className="flex items-center space-x-1">
                <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100">
                  &lt;
                </button>
                {[1, 2, 3].map(page => (
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
          </>
        )}
      </div>
    </div>
  );
};

export default News;
