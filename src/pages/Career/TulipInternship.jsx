import React from 'react'
import Banner from '../../assets/banners/tulipintershipBanner.jpg'
import Poster from '../../assets/images/tulipPoster.jpg'
import InternAnjusha from '../../assets/images/internAnjusha.jpg'
import InternAnju from '../../assets/images/internAnju.jpg'
import InternAbhijith from '../../assets/images/internAbhijith.jpg'
import InternGayu from '../../assets/images/internGayu.jpg'

const TulipInternship = () => {
  const interns = [
    {
      name: "Anju",
      image: InternAnju,
      quote: "In my position as an intern (Electrical Engineering) each day is an opportunity to learn and observe various processes",
      bgColor: "#D9ED92",
      field: "Electrical Engineering"
    },
    {
      name: "Abhijith D V",
      image: InternAbhijith,
      quote: "This internship has provided me with invaluable hands-on experience in civil engineering projects",
      bgColor: "#B5E48C",
      field: "Civil Engineering"
    },
    {
      name: "Gayatri",
      image: InternGayu,
      quote: "Working with the smart city team has given me practical insights into urban planning and development",
      bgColor: "#99D98C",
      field: "Urban Planning"
    },
    {
      name: "Anjusha",
      image: InternAnjusha,
      quote: "As a computer science intern, I'm thrilled to contribute to digital solutions that improve citizens' lives",
      bgColor: "#76C893",
      field: "Computer Science"
    }
  ];

  return (
    <div className="font-sans bg-gradient-to-b from-gray-50 to-gray-100">
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
            Tulip Internships
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Event Section */}
        <div className="mb-16">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: '#1A759F' }}>
            Internship Event Launch Ceremony
          </h1>
          
          {/* Video Section */}
          <div className="mb-10">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.youtube.com/embed/h50Ebi0WRrQ"
                title="Tulip Internship Launch Ceremony"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full md:h-96"
              ></iframe>
            </div>
          </div>
          
          {/* Poster Section */}
          <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
            <h2 className="text-xl font-bold mb-4 text-center" style={{ color: '#1A759F' }}>
              Event Poster
            </h2>
            <img 
              src={Poster} 
              alt="Tulip Internship Launch Event Poster" 
              className="w-full h-auto rounded-lg shadow-sm border-2 border-gray-200"
            />
          </div>
        </div>

        {/* Intern Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ color: '#1A759F' }}>
            Meet Our Talented Interns
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interns.map((intern, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ borderTop: `6px solid ${intern.bgColor}` }}
              >
                <div className="p-5">
                  <div className="flex justify-center -mt-16 ">
                    <div className="relative">
                      <img 
                        src={intern.image} 
                        alt={intern.name} 
                        className="w-54 h-54 object-cover rounded-full border-4 border-white shadow-lg"
                      />
                      <div 
                        className="absolute bottom-0 right-0 w-8 h-8 rounded-full flex items-center justify-center text-white"
                        style={{ backgroundColor: intern.bgColor }}
                      >
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-center mt-4 mb-2" style={{ color: '#1E6091' }}>
                    {intern.name}
                  </h3>
                  
                  <p className="text-gray-700 text-center italic">
                    "{intern.quote}"
                  </p>
                  
                  <div className="mt-5 text-center">
                    <div 
                      className="inline-block px-4 py-1 rounded-full text-sm font-medium"
                      style={{ backgroundColor: `${intern.bgColor}50`, color: '#1E6091' }}
                    >
                      {intern.field}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Details */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-8 shadow-lg border border-teal-200 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6" style={{ color: '#1A759F' }}>
            About the Tulip Internship Program
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#168AAD' }}>Program Highlights</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Hands-on experience in smart city projects</li>
                <li>Mentorship from industry experts</li>
                <li>Exposure to cutting-edge urban technologies</li>
                <li>Networking opportunities with government officials</li>
                <li>Stipend and certification upon completion</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#168AAD' }}>Eligibility</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Currently enrolled in engineering or urban planning programs</li>
                <li>Minimum GPA of 7.0</li>
                <li>Strong interest in smart city development</li>
                <li>Duration: 3-6 months</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#1A759F' }}>Application Process</h3>
              <div className="space-y-4">
                {[
                  { step: 1, text: "Submit online application form" },
                  { step: 2, text: "Screening of applications" },
                  { step: 3, text: "Technical interview" },
                  { step: 4, text: "Final selection and onboarding" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div 
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white mr-3 mt-1"
                      style={{ backgroundColor: '#52B69A' }}
                    >
                      {item.step}
                    </div>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                ))}
                
                <div className="mt-8 text-center">
                  <button 
                    className="py-3 px-8 bg-gradient-to-r from-teal-600 to-blue-800 hover:from-teal-700 hover:to-blue-900 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  >
                    Apply Now for Next Batch
                  </button>
                  <p className="text-sm text-gray-600 mt-3">
                    Applications open until August 30, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Highlights */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1A759F' }}>
            Why Our Interns Love the Program
          </h2>
          <div className="max-w-3xl mx-auto text-gray-700 italic text-lg bg-white p-6 rounded-lg shadow-sm">
            "The Tulip Internship provided me with real-world experience that bridged the gap between academic learning and professional practice. The mentorship I received was invaluable to my career development."
          </div>
          <div className="mt-4 text-gray-600">
            - Previous Intern, now Project Engineer at Smart City TVM
          </div>
        </div>
      </div>
    </div>
  )
}

export default TulipInternship