import React, { useState, useEffect } from 'react';
import Poster from '../../assets/images/conclave/poster.jpg';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Conclave = () => {
  const [scrolled, setScrolled] = useState(false);
  const [speakers, setSpeakers] = useState([]);
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/api/conclave-speakers/')
      .then(res => {
        const updatedSpeakers = res.data.map(speaker => ({
          ...speaker,
          image: speaker.image.startsWith('http') ? speaker.image : `http://localhost:8000${speaker.image}`
        }));
        setSpeakers(updatedSpeakers);
      })
      .catch(err => console.error("Failed to load speakers", err));

    axios.get('http://localhost:8000/api/conclave-recordings/')
      .then(res => setRecordings(res.data))
      .catch(err => console.error("Failed to load recordings", err));
  }, []);

  return (
    <div className="min-h-screen">
      {/* Poster */}
      <div className="relative h-screen w-full" data-aos="fade-in">
        <img src={Poster} alt="APAC Conclave Poster" className="w-full h-full" />
      </div>

      <div id="content" className="px-14 py-12 bg-gray-100">

        {/* About Section */}
        <div className="mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About the Conclave</h2>
            <div className="w-32 h-1 bg-[#184E77] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-gray-700">
              <p>To explore and showcase the culture of Innovation, Growth, Best Practice Smart City Thiruvananthapuram Ltd and APAC News Network will be organising a three-day 'APAC Smart & Sustainable City Virtual Conclave, Thiruvananthapuram' from February 16-17-18, 2021 on a virtual platform.</p>
              <p>The aim of the Conclave is to facilitate the exchange of knowledge and collaborations on smart city and urban development, IT and e-Governance and place the spotlight on the pro-people urban work that is being done in Thiruvananthapuram and rest of Kerala.</p>
              <p>The 'APAC Smart & Sustainable City Virtual Conclave, Thiruvananthapuram' will focus on key initiatives undertaken by Government of India aligned with the vision of Smart Cities Mission, especially the ICT initiatives, technology interventions, innovations in urban and IT sector, and best practices across the country.</p>
            </div>

            <div className="bg-gray-100 p-8 flex items-center justify-center" data-aos="zoom-in">
              <div className="max-w-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Event Statistics</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ['2500+', 'Delegates'],
                    ['7+', 'Countries'],
                    ['20+', 'States'],
                    ['15+', 'Sessions']
                  ].map(([count, label], idx) => (
                    <div key={idx} className="bg-white p-4 text-center" data-aos="fade-up" data-aos-delay={idx * 100}>
                      <div className="text-3xl font-bold text-[#184E77] mb-2">{count}</div>
                      <div className="text-gray-700">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Focus Areas */}
        <div className="w-full p-2 bg-gray-100 mb-10" data-aos="fade-up">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Key Focus Areas</h2>
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
                <div key={index} className="flex items-start" data-aos="fade-right" data-aos-delay={index * 50}>
                  <div className="text-[#184E77] mr-3 mt-1">•</div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Event Recordings */}
        <div className="mb-16" data-aos="fade-up">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Event Recordings</h2>
            <div className="w-32 h-1 bg-[#184E77] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {recordings.map((rec, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative pb-[56.25%] h-0 overflow-hidden">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={rec.youtube_link}
                    title={rec.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mt-4">{rec.title}</h3>
                <p className="text-gray-600 mt-2">{rec.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Speakers */}
        <div className="mb-16" data-aos="fade-up">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Speakers</h2>
            <div className="w-32 h-1 bg-[#184E77] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <div key={index} className="flex flex-col h-full" data-aos="zoom-in" data-aos-delay={index * 100}>
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

        {/* Event Highlights */}
        <div className="py-16 bg-gray-100" data-aos="fade-up">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Event Highlights</h2>
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
                <div key={index} className="text-center p-6" data-aos="fade-up" data-aos-delay={index * 100}>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conclave;
