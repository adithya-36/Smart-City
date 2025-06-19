import React from 'react';
import Officials1 from '../../assets/images/officials1.jpg';
import Officials2 from '../../assets/images/officials2.jpg';
import Officials3 from '../../assets/images/officials3.jpg';
import Officials4 from '../../assets/images/officials4.jpg';
import Officials5 from '../../assets/images/officials5.jpg';
import LinkedInIcon from '../../assets/images/linkedin.png';
import ProfileIcon from '../../assets/images/profileIcon.png';

const officials = [
  {
    name: 'Shri. Rahul Krishna Sharma IAS',
    title: 'Chief Executive Officer',
    image: Officials1,
    linkedin: 'https://www.linkedin.com/in/rahulkrishnasharma/',
  },
  {
    name: 'Shri. Rahul Kapoor IRAS',
    title: 'Mission Director',
    description: 'Smart Cities Mission',
    image: Officials2,
    linkedin: '#',
  },
  {
    name: 'Ms. Arya Rajendran',
    title: "Hon'ble Mayor",
    description: "Thiruvananthapuram",
    image: Officials3,
    linkedin: '#',
  },
  {
    name: 'Shri M.B Rajesh',
    title: "Hon'ble Minister of LSGD",
    description: "Govt of Kerala",
    image: Officials4,
    linkedin: '#',
  },
  {
    name: 'Dr. A. Jayathilak IAS',
    title: 'Chief Executive Officer',
    image: Officials5,
    linkedin: '#',
  },
];

const HomeItem3 = () => {
  return (
    <div className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Officials</h2>
          <div className="w-20 h-1 bg-[#184E77] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated leadership team guiding Thiruvananthapuram's transformation into a Smart City
          </p>
        </div>

        {/* Horizontal scroll container for mobile, grid for desktop */}
        <div className="flex overflow-x-auto pb-8 space-x-6 sm:space-x-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:gap-8 sm:overflow-visible hide-scrollbar">
          {officials.map((official, index) => (
            <div
              key={index}
              className="bg-white shadow-lg min-w-[280px] sm:min-w-0 flex flex-col flex-shrink-0"
            >
              {/* Official Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={official.image}
                  alt={official.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Official Info */}
              <div className="p-6 flex-1 border-t-4 border-[#184E77] flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{official.name}</h3>
                <p className="text-[#184E77] font-medium mb-1">{official.title}</p>
                {official.description && (
                  <p className="text-gray-600 mb-6">{official.description}</p>
                )}
                
                {/* Action Buttons */}
                <div className="mt-auto flex space-x-4 pt-4">
                  <a 
                    href={official.linkedin} 
                    className="flex items-center justify-center flex-1 bg-[#184E77] hover:bg-[#1E6091] text-white py-2 transition-colors"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <img 
                      src={LinkedInIcon} 
                      alt="LinkedIn" 
                      className="w-5 h-5"
                    />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All button */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-8 py-3 border border-[#184E77] text-lg font-medium text-[#184E77] bg-white hover:bg-blue-50">
            View All Officials
            <svg className="ml-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Custom scrollbar hide */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default HomeItem3;