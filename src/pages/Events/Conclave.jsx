import React, { useState, useEffect } from 'react';
import Poster from '../../assets/images/conclave/poster.jpg';
import Speaker1 from '../../assets/images/conclave/durga-shanker-mishra.jpg';
import Speaker2 from '../../assets/images/conclave/vishwas-mehta.jpg';
import Speaker3 from '../../assets/images/conclave/sarada-g-muraleedharan.jpg';
import Speaker4 from '../../assets/images/conclave/biswanath-sinha.jpg';

const speakers = [
  {
    name: "Durga Shanker Mishra",
    designation: "Secretary, Ministry of Housing & Urban Affairs, Govt. of India",
    image: Speaker1
  },
  {
    name: "Vishwas Mehta",
    designation: "Chairman, Smart City Thiruvananthapuram Ltd, Chief Secretary, Govt. of Kerala",
    image: Speaker2
  },
  {
    name: "Sarada G. Muraleedharan",
    designation: "Additional Chief Secretary, LSG Department, Govt. of Kerala",
    image: Speaker3
  },
  {
    name: "Biswanath Sinha",
    designation: "LSG Department (Urban) Government of Kerala",
    image: Speaker4
  }
];

const Conclave = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Poster Header - Full screen with navbar overlap */}
      <div className="relative h-screen w-full">
        <img 
          src={Poster} 
          alt="APAC Conclave Poster" 
          className="w-full h-full "
        />
      </div>

      {/* Main Content */}
      <div id="content" className="px-14 py-12 bg-gray-100">
        {/* About Section */}
        <div className="mb-16 ">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 ">
              About the Conclave
            </h2>
            <div className="w-32 h-1 bg-[#184E77] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-gray-700">
              <p>
                To explore and showcase the culture of Innovation, Growth, Best Practice Smart City Thiruvananthapuram Ltd and APAC News Network will be organising a three-day 'APAC Smart & Sustainable City Virtual Conclave, Thiruvananthapuram' from February 16-17-18, 2021 on a virtual platform.
              </p>
              <p>
                The aim of the Conclave is to facilitate the exchange of knowledge and collaborations on smart city and urban development, IT and e-Governance and place the spotlight on the pro-people urban work that is being done in Thiruvananthapuram and rest of Kerala.
              </p>
              <p>
                The 'APAC Smart & Sustainable City Virtual Conclave, Thiruvananthapuram' will focus on key initiatives undertaken by Government of India aligned with the vision of Smart Cities Mission, especially the ICT initiatives, technology interventions, innovations in urban and IT sector, and best practices across the country.
              </p>
            </div>
            
            <div className="bg-gray-100 p-8 flex items-center justify-center">
              <div className="max-w-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Event Statistics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 text-center">
                    <div className="text-3xl font-bold text-[#184E77] mb-2">2500+</div>
                    <div className="text-gray-700">Delegates</div>
                  </div>
                  <div className="bg-white p-4 text-center">
                    <div className="text-3xl font-bold text-[#184E77] mb-2">7+</div>
                    <div className="text-gray-700">Countries</div>
                  </div>
                  <div className="bg-white p-4 text-center">
                    <div className="text-3xl font-bold text-[#184E77] mb-2">20+</div>
                    <div className="text-gray-700">States</div>
                  </div>
                  <div className="bg-white p-4 text-center">
                    <div className="text-3xl font-bold text-[#184E77] mb-2">15+</div>
                    <div className="text-gray-700">Sessions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Focus Areas - Centered without borders */}
        <div className="w-full p-2 bg-gray-100 mb-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Key Focus Areas
            </h2>
            <div className="w-32 h-1 bg-[#184E77] mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Smart Cities Ideas & Best Practices",
                "Role of IT and Emerging Technologies: Innovative Solutions",
                "Urban Mobility for Smarter Cities",
                "Citizen Engagement Technologies",
                "Tourism & Heritage",
                "Sustainable Urban Development",
                "Urban Innovations",
                "Waste & Water Management",
                "Safe, Secure & Connected Cities",
                "Smart, Clean & Green Energy"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-[#184E77] mr-3 mt-1">•</div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Recordings */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Event Recordings
            </h2>
            <div className="w-32 h-1 bg-[#184E77] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/h6x9i54APr4"
                  title="APAC Smart & Sustainable City Conclave - Day 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mt-4">Day 1: Opening & Keynote Sessions</h3>
              <p className="text-gray-600 mt-2">February 16, 2021</p>
            </div>
            
            <div>
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/tuGHKHRDcmA"
                  title="APAC Smart & Sustainable City Conclave - Day 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mt-4">Day 2: Technical Sessions & Workshops</h3>
              <p className="text-gray-600 mt-2">February 17, 2021</p>
            </div>
          </div>
        </div>
        
        {/* Speakers Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Speakers
            </h2>
            <div className="w-32 h-1 bg-[#184E77] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <div key={index} className="flex flex-col h-full">
                <div className="aspect-square overflow-hidden mb-4">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800">{speaker.name}</h3>
                  <p className="text-gray-600 mt-2">{speaker.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Event Highlights */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Event Highlights
            </h2>
            <div className="w-32 h-1 bg-[#184E77] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Global Participation", 
                desc: "2500+ delegates from 7+ countries and 20+ states sharing insights and best practices"
              },
              { 
                title: "Knowledge Exchange", 
                desc: "15+ sessions covering urban innovation, sustainability, and governance"
              },
              { 
                title: "Virtual Platform", 
                desc: "Cutting-edge virtual event platform enabling global participation and networking"
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conclave;