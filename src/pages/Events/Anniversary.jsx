import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoIosClose } from "react-icons/io";

const Anniversary = () => {
  const [images, setImages] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/anniversary-images/')
      .then(response => setImages(response.data))
      .catch(error => console.error("Error fetching anniversary images:", error));
  }, []);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };

    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [lightboxOpen]);

  return (
    <div className="min-h-screen py-8 px-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-[#184E77] mb-4 transform -rotate-2">
          Celebrating <span className="text-[#184E77]">8 Years</span> of Excellence
        </h1>
        <div className="w-32 h-2 bg-gradient-to-r from-[#184E77] to-[#184E77] mx-auto mb-6"></div>
        <p className="text-lg md:text-xl text-[#184E77] max-w-3xl mx-auto">
          Journey through our milestone moments, cherished memories, and the people who made it all possible.
        </p>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
              onClick={() => openLightbox(image)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.image}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <p className="text-sm opacity-90">Click to view</p>
                </div>
              </div>
              <div className="absolute top-4 -right-10 w-40 bg-[#184E77] text-white text-center py-1 transform rotate-45 font-bold text-sm shadow-lg">
                8 Years
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Celebration message */}
      <div className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-r shadow-2xl text-center text-[#184E77]">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">A Journey to Remember</h2>
        <p className="text-lg md:text-xl mb-6">
          Over the past eight years, we've grown, innovated, and created lasting memories together. 
          This gallery captures just a glimpse of our incredible journey.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-white/20 backdrop-blur-sm px-6 py-2 font-bold">X Projects</div>
          <div className="bg-white/20 backdrop-blur-sm px-6 py-2 font-bold">X Team Members</div>
          <div className="bg-white/20 backdrop-blur-sm px-6 py-2 font-bold">X Awards</div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 text-white hover:text-[#1E6091] transition-colors"
              onClick={closeLightbox}
            >
              <IoIosClose className='text-5xl' />
            </button>

            <div className="bg-white overflow-hidden shadow-2xl">
              <img
                src={selectedImage.image}
                alt={selectedImage.alt}
                className="w-full max-h-[70vh] object-contain"
              />
              <div className="p-4 bg-[#184E77] text-white">
                <p className="text-sm opacity-90">{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Anniversary;
