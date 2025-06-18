import React from 'react'
import Banner from '../../assets/banners/videoBanner.jpg'
import YoutubeIcon from '../../assets/images/youtube_white.png'
const VideoGallery = () => {
  const videos = [
    { id: '79vc9cceP0M', title: 'Smart Roads Project Update' },
    { id: 'qXseRgHZlW8', title: 'Solar Power Initiative' },
    { id: '5UiihIro_kY', title: 'Waste Management System' },
    { id: 'fy6ww-78p4I', title: 'Public Transport Enhancement' },
    { id: 'BepmkBTiWfM', title: 'ICCC Operations Overview' },
    { id: '2meMnZpg9dM', title: 'Urban Development Plans' },
    { id: 'unzKqR6Za9o', title: 'Green Spaces Initiative' },
    { id: 'M6p6XAZ0Cx0', title: 'Smart Parking Solutions' },
    { id: 'RAxo4R2DCJU', title: 'Water Conservation Project' },
    { id: 'H9n_ITk6OQM', title: 'Digital Governance Progress' },
    { id: '2rnnzoYXiPM', title: 'Community Engagement Program' },
    { id: 'rY1_RmBNUxA', title: 'Smart Lighting Installation' },
    { id: 'HHihKC_3UgY', title: 'Traffic Management System' },
    { id: 'Il_0xP1pR9w', title: 'Education Technology Upgrade' },
    { id: '2aV83jPjNfs', title: 'Healthcare Infrastructure' },
    { id: '_lPurGt7Z4Q', title: 'Urban Farming Initiative' }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Banner */}
      <div className="relative h-48 md:h-64 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 60, 80, 0.85), rgba(0, 128, 128, 0.6)), url(${Banner})`,
          }}
        ></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4 drop-shadow-lg">
            Video Gallery
          </h1>
        </div>
      </div>

      {/* Video Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore our collection of videos showcasing the progress, initiatives, and achievements of Smart City Thiruvananthapuram
          </p>
        </div>
        
        
        
        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <div 
              key={video.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800 mb-2 line-clamp-2" style={{ color: '#1A759F' }}>
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
        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700">
              &lt;
            </button>
            {[1, 2, 3, 4].map(page => (
              <button 
                key={page}
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  page === 1 
                    ? 'bg-gradient-to-r from-teal-600 to-blue-800 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700">
              &gt;
            </button>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="mt-12 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6 border border-teal-200">
          <h3 className="text-xl font-bold text-center mb-4" style={{ color: '#1A759F' }}>
            Gallery Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold" style={{ color: '#1E6091' }}>16+</div>
              <p className="text-gray-600">Videos</p>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: '#168AAD' }}>24K+</div>
              <p className="text-gray-600">Views</p>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: '#34A0A4' }}>6+</div>
              <p className="text-gray-600">Categories</p>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: '#52B69A' }}>1.2K+</div>
              <p className="text-gray-600">Comments</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-800 text-white py-12 mt-10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Our Progress</h2>
          <p className="mb-6 max-w-2xl mx-auto text-teal-100">
            Subscribe to our YouTube channel for the latest videos on Smart City projects and initiatives
          </p>
          <a 
            href="https://www.youtube.com/@smartcitythiruvananthapura7226/videos" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
          >
            
            <img className='w-9' src={YoutubeIcon} alt="" />
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </div>
  )
}

export default VideoGallery