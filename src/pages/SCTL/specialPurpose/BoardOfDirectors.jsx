import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';
import axios from 'axios';

const BoardOfDirectors = () => {
  const [members, setMembers] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:8000/api/board-members/')
      .then(response => {
        setMembers(response.data);
      })
      .catch(error => {
        console.error("Error fetching board members:", error);
      });
  }, []);

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(members.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Users className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Board of Directors</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our distinguished board members who guide our organization with their expertise and vision
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
                    {members
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((member, index) => (
                        <div 
                          key={index}
                          className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                        >
                          <div className="relative overflow-hidden rounded-t-lg">
                            <img 
                              src={member.image} 
                              alt={member.name}
                              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>

                          <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                            <p className="text-blue-600 font-semibold text-sm mb-2">{member.position}</p>
                            {member.field && (
                              <p className="text-gray-600 text-sm mb-2">{member.field}</p>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 group"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 group"
            disabled={currentSlide === totalSlides - 1}
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardOfDirectors;
