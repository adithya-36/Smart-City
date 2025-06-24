import React, { useState } from 'react';
import Banner from '../../assets/banners/photoBanner.jpg';
import { HiOutlineSearch } from 'react-icons/hi';
import { HiOutlineX } from 'react-icons/hi';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
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
import img3e from '../../assets/images/smart road/image5.jpg';
import img3f from '../../assets/images/smart road/img6.jpg';

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
    thumbnail: thumb1,
    images: [img1a, img1b, img1c, img1d, img1e, img1f, img1g, img1h, img1i, img1j, img1k, img1l],
  },
  {
    title: 'Sreechithra Park Redevelopment',
    thumbnail: thumb2,
    images: [img2a, img2b, img2c, img2d],
  },
  {
    title: 'Smart Road (Corporation)',
    thumbnail: thumb3,
    images: [img3e, img3f,img3a, img3b, img3c, img3d],
  },
  {
    title: 'TSCCC Meeting',
    thumbnail: thumb4,
    images: [img4a],
  },
  {
    title: 'Thampanoor MLCP',
    thumbnail: thumb5,
    images: [img5a, img5b, img5c, img5d],
  },
  {
    title: 'Discussions with TRIDA',
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
    if (viewMode === 'single') {
      setViewMode('album');
    } else {
      setViewMode('grid');
      setActiveAlbum(null);
    }
  };
  
  const navigateImage = (direction) => {
    const album = photoGroups[activeAlbum];
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % album.images.length 
      : (currentImageIndex - 1 + album.images.length) % album.images.length;
    setCurrentImageIndex(newIndex);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (viewMode === 'single') {
        if (e.key === 'ArrowRight') {
          navigateImage('next');
        } else if (e.key === 'ArrowLeft') {
          navigateImage('prev');
        } else if (e.key === 'Escape') {
          closeModal();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, currentImageIndex, activeAlbum]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Banner */}
      <div className="relative h-48 md:h-64 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(24, 78, 119, 0.9), rgba(30, 96, 145, 0.8)), url(${Banner})`,
          }}
        ></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4">
            Photo Gallery
          </h1>
        </div>
      </div>

      {/* Main Gallery */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Album Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photoGroups.map((album, index) => (
            <div 
              key={index}
              className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
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
                  <p className="text-gray-300 text-sm">{album.images.length} photos</p>
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
                    className="w-full h-40 object-cover group-hover:opacity-75 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all">
                    <HiOutlineSearch className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />

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
            className="absolute top-4 right-4 text-white text-2xl z-70 hover:text-gray-300"
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
          >
            <HiOutlineX className="h-8 w-8" />

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
          
          {/* Navigation Arrows */}
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-70 hover:text-gray-300"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
          >
            <IoIosArrowBack />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-70 hover:text-gray-300"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
          >
            <IoIosArrowForward />
          </button>
        </div>
      )}

      {/* Gallery Stats */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white shadow-md p-6">
          <h3 className="text-xl font-bold text-center mb-4 text-[#1E6091]">
            Gallery Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-[#1E6091]">{photoGroups.length}</div>
              <p className="text-gray-600">Albums</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1E6091]">
                {photoGroups.reduce((total, album) => total + album.images.length, 0)}
              </div>
              <p className="text-gray-600">Photos</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1E6091]">{photoGroups.length}</div>
              <p className="text-gray-600">Categories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;