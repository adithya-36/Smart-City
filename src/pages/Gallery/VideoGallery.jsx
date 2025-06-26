import React from 'react'
import Banner from '../../assets/banners/videoBanner.jpg'
import { FaYoutube } from "react-icons/fa6";
const VideoGallery = () => {
  const videos = [
    { id: '79vc9cceP0M', title: 'Inauguration of Public Renovated Toilets ' },
    { id: 'qXseRgHZlW8', title: 'Inauguration of RKV Vending Zone Project' },
    { id: '5UiihIro_kY', title: 'Inauguration Ceremony of Mosquito Density System' },
    { id: 'fy6ww-78p4I', title: 'Open Gym in Trivandrum ' },
    { id: 'BepmkBTiWfM', title: 'Electric Vehicle - E - Auto in Thiruvananthapuram City' },
    { id: '2meMnZpg9dM', title: 'Project Overview' },
    { id: 'unzKqR6Za9o', title: 'Inauguration of EV Charger at Gandhi Park' },
    { id: 'M6p6XAZ0Cx0', title: 'Projects and development works undertaken by Smart City Thiruvananthapuram Limited' },
    { id: 'RAxo4R2DCJU', title: 'P Bala Kiran, CEO, Thiruvananthapuram Smart City Ltd, Govt of Kerala' },
    { id: 'H9n_ITk6OQM', title: 'Initiatives to fight Covid 19' },
    { id: '2rnnzoYXiPM', title: 'Inauguration Ceremony of Redevelopment of Palayam Market Project' },
    { id: 'rY1_RmBNUxA', title: 'Inauguration ceremony of Smart Road Project' },
    { id: 'HHihKC_3UgY', title: 'Smart Trivandrum' },
    { id: 'Il_0xP1pR9w', title: "Upgradation of Anganwadi's" },
    { id: '2aV83jPjNfs', title: 'Electric Rikshaws in Thiruvananthapuram City' },
    { id: '_lPurGt7Z4Q', title: 'Interactive Information Kiosk at various Locations in Trivandrum City' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Banner */}
      <div className="relative h-64 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(24, 78, 119, 0.9), rgba(30, 96, 145, 0.8)), url(${Banner})`,
          }}
        ></div>
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Video Gallery
            </h1>
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Video Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-12 text-center">
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Explore our collection of videos showcasing the progress, initiatives, and achievements of Smart City Thiruvananthapuram
          </p>
        </div>
        
        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {videos.map((video, index) => (
            <div 
              key={video.id}
              className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative aspect-w-16 aspect-h-9">
                <iframe 
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4 border-t border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Smart City TVM</span>
                  <span>{(index % 4) + 1} min ago</span>
                </div>
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
        
        {/* Statistics */}
        <div className="mt-16 bg-white shadow-sm p-8">
          <h3 className="text-2xl font-semibold text-center mb-8 text-[#184E77]">
            Gallery Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#1E6091]">16+</div>
              <p className="text-gray-600 mt-2">Videos</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1E6091]">24K+</div>
              <p className="text-gray-600 mt-2">Views</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1E6091]">6+</div>
              <p className="text-gray-600 mt-2">Categories</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1E6091]">1.2K+</div>
              <p className="text-gray-600 mt-2">Comments</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-[#184E77] text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Stay Updated with Our Progress</h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-300">
            Subscribe to our YouTube channel for the latest videos on Smart City projects and initiatives
          </p>
          <a 
            href="https://www.youtube.com/@smartcitythiruvananthapura7226/videos" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#FF0000] hover:bg-[#CC0000] text-white font-semibold py-3 px-6 transition duration-300"
          >
            <FaYoutube className='mr-2 text-2xl'/>
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </div>
  )
}

export default VideoGallery