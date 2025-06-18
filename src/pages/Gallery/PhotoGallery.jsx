import React, { useState } from 'react';
import Banner from '../../assets/banners/photoBanner.jpg';

// Import all images
import thumb1 from '../../assets/images/execution photo/execution.jpg';
import img1a from '../../assets/images/execution photo/img1.jpeg';
import img1b from '../../assets/images/execution photo/img2.jpeg';
import img1c from '../../assets/images/execution photo/img3.jpeg';
import img1d from '../../assets/images/execution photo/img4.jpeg';
import img1e from '../../assets/images/execution photo/img5.jpeg';
import img1f from '../../assets/images/execution photo/img6.jpeg';
import img1g from '../../assets/images/execution photo/img7.jpeg';
import img1h from '../../assets/images/execution photo/img8.jpeg';
import img1i from '../../assets/images/execution photo/img9.jpeg';
import img1j from '../../assets/images/execution photo/img10.jpeg';
import img1k from '../../assets/images/execution photo/img11.jpeg';
import img1l from '../../assets/images/execution photo/img12.jpeg';

import thumb2 from '../../assets/images/manaveeyam/thumb.jpeg';
import img2a from '../../assets/images/manaveeyam/img1.jpeg';
import img2b from '../../assets/images/manaveeyam/img2.jpeg';
import img2c from '../../assets/images/manaveeyam/img3.jpeg';
import img2d from '../../assets/images/manaveeyam/img4.jpeg';

import thumb3 from '../../assets/images/smart road/thumb.jpg';
import img3a from '../../assets/images/smart road/img1.jpeg';
import img3b from '../../assets/images/smart road/img2.jpeg';
import img3c from '../../assets/images/smart road/img3.jpeg';
import img3d from '../../assets/images/smart road/img4.jpeg';

import thumb4 from '../../assets/images/meeting/thumb.jpg';
import img4a from '../../assets/images/meeting/img1.jpeg';

import thumb5 from '../../assets/images/mlcp/thumb.jpg';
import img5a from '../../assets/images/mlcp/img1.jpeg';
import img5b from '../../assets/images/mlcp/img2.jpeg';
import img5c from '../../assets/images/mlcp/img3.jpeg';
import img5d from '../../assets/images/mlcp/img4.jpeg';

import thumb6 from '../../assets/images/TRIDA/thumb.jpg';
import img6a from '../../assets/images/TRIDA/img1.jpeg';
import img6b from '../../assets/images/TRIDA/img2.jpeg';
import img6c from '../../assets/images/TRIDA/img.jpeg';

const photoGroups = [
  {
    title: 'Execution Photographs',
    count: 12,
    thumbnail: thumb1,
    images: [img1a, img1b, img1c, img1d, img1e, img1f, img1g, img1h, img1i, img1j, img1k, img1l],
  },
  {
    title: 'Sreechithra Park Redevelopment',
    count: 4,
    thumbnail: thumb2,
    images: [img2a, img2b, img2c, img2d],
  },
  {
    title: 'Smart Road (Corporation)',
    count: 4,
    thumbnail: thumb3,
    images: [img3a, img3b, img3c, img3d],
  },
  {
    title: 'TSCCC Meeting',
    count: 1,
    thumbnail: thumb4,
    images: [img4a],
  },
  {
    title: 'Thampanoor MLCP Piling',
    count: 4,
    thumbnail: thumb5,
    images: [img5a, img5b, img5c, img5d],
  },
  {
    title: 'Discussions with TRIDA',
    count: 3,
    thumbnail: thumb6,
    images: [img6a, img6b, img6c],
  },
];

const PhotoGallery = () => {
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'album' or 'single'
  
  const openAlbum = (albumIndex) => {
    setActiveAlbum(albumIndex);
    setCurrentImageIndex(0);
    setViewMode('album');
  };
  
  const openImage = (imageIndex) => {
    setCurrentImageIndex(imageIndex);
    setViewMode('single');
  };
  
  const closeModal = () => {
    setViewMode('grid');
    setActiveAlbum(null);
  };
  
  const navigateImage = (direction) => {
    const album = photoGroups[activeAlbum];
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % album.images.length 
      : (currentImageIndex - 1 + album.images.length) % album.images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
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
            Photo Gallery
          </h1>
        </div>
      </div>

      {/* Main Gallery */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        
        {/* Album Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photoGroups.map((album, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              onClick={() => openAlbum(index)}
            >
              <div className="relative">
                <img 
                  src={album.thumbnail} 
                  alt={album.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white text-lg font-bold">{album.title}</h3>
                  <p className="text-gray-300 text-sm">{album.count} photos</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Album View Modal */}
      {viewMode === 'album' && activeAlbum !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto p-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {photoGroups[activeAlbum].title}
              </h2>
              <button 
                onClick={closeModal}
                className="text-white text-3xl hover:text-gray-300"
              >
                &times;
              </button>
            </div>
            
            {/* Image Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {photoGroups[activeAlbum].images.map((img, index) => (
                <div 
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => openImage(index)}
                >
                  <img 
                    src={img} 
                    alt={`${photoGroups[activeAlbum].title} ${index + 1}`} 
                    className="w-full h-40 object-cover rounded-lg shadow-md group-hover:opacity-75 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Single Image View Modal */}
      {viewMode === 'single' && activeAlbum !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-60 flex items-center justify-center"
          onClick={closeModal}
        >
          <button 
            className="absolute top-4 left-4 text-white text-2xl z-70 hover:text-gray-300"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <img
              src={photoGroups[activeAlbum].images[currentImageIndex]}
              alt={`${photoGroups[activeAlbum].title} ${currentImageIndex + 1}`}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm opacity-80">
              {currentImageIndex + 1} of {photoGroups[activeAlbum].images.length}
            </div>
          </div>
          
          <button 
            className="absolute top-4 right-4 text-white text-2xl z-70 hover:text-gray-300"
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <button 
            className="absolute top-4 right-16 text-white text-2xl z-70 hover:text-gray-300"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Gallery Stats */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6 border border-teal-200">
          <h3 className="text-xl font-bold text-center mb-4" style={{ color: '#1A759F' }}>
            Gallery Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold" style={{ color: '#1E6091' }}>{photoGroups.length}</div>
              <p className="text-gray-600">Albums</p>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: '#168AAD' }}>
                {photoGroups.reduce((total, album) => total + album.count, 0)}+
              </div>
              <p className="text-gray-600">Photos</p>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: '#34A0A4' }}>6+</div>
              <p className="text-gray-600">Categories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;