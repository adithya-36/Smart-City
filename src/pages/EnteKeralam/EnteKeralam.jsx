import React from 'react'
import Award from '../../assets/images/Award.jpeg'
import RightArrow from '../../assets/images/rightArrowTail.png'
import Link from '../../assets/images/link.png'
const EnteKeralam = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-700 to-blue-900 text-white py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Latest News & Events</h1>
        <p className="max-w-3xl mx-auto px-4 text-teal-100">
          Stay updated with the latest achievements and developments from Smart City Thiruvananthapuram
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* YouTube Video Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="aspect-w-16 aspect-h-10">
                <iframe 
                  src="https://www.youtube.com/embed/jAynmfGCQsQ"
                  title="Achievements of Smartcity Trivandrum"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-80"
                ></iframe>
              </div>
            </div>
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Achievements of Smartcity Trivandrum</h2>
              <p className="text-gray-700 leading-relaxed">
                Thiruvananthapuram Smart city - setting pioneer standards with various projects, showcasing an integration of cutting-edge solutions, innovations, technology and urban perspectives. These advancements and ongoing constructions are ensuring urban management and ensuring a better & smarter quality of life for the society. Let's have a glimpse into some of these...
              </p>
              <a 
                href="https://www.linkedin.com/posts/smart-city-thiruvananthapuram-limited_sustainabledevelopment-smartcitythiruvananthapuram-activity-7335253795683086337-_mbB?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEeqzeIBPagoSa1qzTkGZSNbLeUlI2s80UU" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                View on LinkedIn
                <img className='w-5 mx-1' src={Link} alt="link" />
              </a>
            </div>
          </div>
        </div>

        {/* Award Section */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl shadow-lg overflow-hidden mb-12 border border-teal-200">
          <div className="md:flex">
            <div className="md:w-2/5 p-6 flex items-center">
              <img 
                src={Award} 
                alt="Global Award for Sustainable Development in Cities" 
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            </div>
            <div className="md:w-3/5 p-6">
              <div className="bg-gradient-to-r from-teal-600 to-blue-800 text-white px-4 py-1 rounded-full inline-block mb-4">
                <span className="font-bold">Global Recognition</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Thiruvananthapuram Smart City Honored with the Global Award for Sustainable Development in Cities (Shanghai Award)
              </h2>
              <p className="text-gray-700 mb-4">
                We are thrilled to announce that Thiruvananthapuram has been awarded the prestigious Global Award for Sustainable Development in Cities (Shanghai Award), a joint initiative by UN-Habitat (United Nations Human Settlements Programme) and the Shanghai Municipality.
              </p>
              <p className="text-gray-700 mb-4">
                This recognition acknowledges cities demonstrating outstanding achievements in advancing the 2030 Agenda and the New Urban Agenda, placing Thiruvananthapuram alongside other exemplary cities globally, like Melbourne in Australia, Doha in Qatar, Agadir in Morocco, and Iztapalapa of Mexico.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Projects Highlighted:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "🌍 Manaveeyam Cultural Street",
                    "🚍 Electric Bus Initiatives",
                    "💻 Integrated Command & Control Center (ICCC)",
                    "🛣️ Smart Roads",
                    "💡 Urban Basic Services and Resilience Projects",
                    "💙 Citizen-Centric Open Spaces",
                    "🌱 Solar Rooftop Projects"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="mr-2">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-700">
                  With immense pride, we witnessed Ms. Arya Rajendran, Honorable Mayor of Thiruvananthapuram and Rahul Krishna Sharma IAS, CEO, SCTL, receiving the award on behalf of our city, from Ms. Anacláudia Rossbach, Executive Director UN-Habitat, marking an incredible milestone in our journey towards a smarter, more sustainable future.
                </p>
                <p className="text-gray-700 mt-3">
                  The winners were recognized at the event's opening and will have further opportunities to showcase our innovative practices at the upcoming Twelfth Session of the World Urban Forum (WUF12) in Cairo from November 4-8, 2024.
                </p>
                <p className="text-gray-700 mt-3 font-medium">
                  We extend our gratitude to everyone who has contributed to this journey, helping us set a global example in sustainable urban development. Let's continue working towards a brighter, more resilient future for Thiruvananthapuram!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* LinkedIn Posts Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Recent Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Sustainable Development Milestones",
                description: "Thiruvananthapuram Smart city - showcasing an integration of cutting-edge solutions, innovations, technology and urban perspectives.",
                link: "https://www.linkedin.com/posts/smart-city-thiruvananthapuram-limited_sustainabledevelopment-smartcitythiruvananthapuram-activity-7335253795683086337-_mbB?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEeqzeIBPagoSa1qzTkGZSNbLeUlI2s80UU"
              },
              {
                title: "Urban Transformation Progress",
                description: "These advancements and ongoing constructions are ensuring urban management and a better quality of life for the society.",
                link: "https://www.linkedin.com/posts/smart-city-thiruvananthapuram-limited_sustainabledevelopment-smartcitythiruvananthapuram-activity-7335253795683086337-_mbB?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEeqzeIBPagoSa1qzTkGZSNbLeUlI2s80UU"
              }
            ].map((post, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.description}</p>
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read more on LinkedIn
                  <img className='w-5 h-6 mx-1' src={RightArrow} alt="" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-800 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Connected with Our Progress</h2>
          <p className="max-w-3xl mx-auto mb-6 text-teal-100">
            Follow us on social media for the latest updates, project milestones, and community initiatives
          </p>
          <button className="bg-white text-teal-700 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
            Follow Smart City Thiruvananthapuram
          </button>
        </div>
      </div>
    </div>
  )
}

export default EnteKeralam