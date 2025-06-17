import React from 'react'
import Banner from '../../assets/banners/contactusBanner.jpg'
import Mail from '../../assets/images/mail.png' 
import Location from '../../assets/images/location.png' 
import Personal from '../../assets/images/group.png' 
import Map from '../../assets/images/destination.png'
import MailBlack from '../../assets/images/mail_black.png' 
import PhoneBlack from '../../assets/images/phone_black.png' 
import Link from '../../assets/images/link.png'
const ContactUs = () => {
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
            Contact Us
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Info */}
          <div>
            {/* Address Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border-l-4" style={{ borderColor: '#1E6091' }}>
              <h3 className="text-xl font-bold mb-4 flex items-center" style={{ color: '#1A759F' }}>
                <img className='w-6 mr-1' src={Location} alt="" />
                Address
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>4th Floor, Felicity Square Building,</p>
                <p>Opp AG Office, Statue,</p>
                <p>Thiruvananthapuram.</p>
                <p>Pincode: 695001</p>
                <p className="mt-4 flex items-center">
                  <img className='w-4 mr-2' src={MailBlack} alt="" />
                  Email: <a href="mailto:info@smartcitytvm.in" className="text-blue-600 hover:underline ml-1">info@smartcitytvm.in</a>
                </p>
                <p className="flex items-center">
                  <img className='w-4 mr-2' src={PhoneBlack} alt="" />
                  Phone: <a href="tel:+9104714010374" className="text-blue-600 hover:underline ml-1">+91 - 0471 - 4010374</a>
                </p>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4" style={{ borderColor: '#168AAD' }}>
              <h3 className="text-xl font-bold mb-4 flex items-center" style={{ color: '#1A759F' }}>
                <img className='w-7 mr-2' src={Map} alt="" />
                Location
              </h3>
              <div className="aspect-w-16 aspect-h-9 md:h-72 rounded-lg overflow-hidden shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.5429336821355!2d76.9481307756858!3d8.486602691508522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb0a5a9b7b0f%3A0x1e5f3b5a5a5b5b5b!2sSmart%20City%20Thiruvananthapuram%20Limited!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Smart City Thiruvananthapuram Location"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <a 
                  href="https://maps.app.goo.gl/5YiwpFLcikhju2Vb8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Open in Google Maps
                  <img className='w-5 m-2' src={Link} alt="" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form and Table */}
          <div>
            {/* Contact Personnel Table */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border-l-4" style={{ borderColor: '#1A759F' }}>
              <h3 className="text-xl font-bold mb-4 flex items-center" style={{ color: '#1A759F' }}>
                <img className='w-6 h-7 mr-2' src={Personal} alt="" />
                Key Personnel
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-lg">
                  <thead style={{ backgroundColor: '#1E6091' }}>
                    <tr>
                      <th className="px-4 py-3 text-left text-white font-semibold">Name</th>
                      <th className="px-4 py-3 text-left text-white font-semibold">Designation</th>
                      <th className="px-4 py-3 text-left text-white font-semibold">E-mail</th>
                      <th className="px-4 py-3 text-left text-white font-semibold">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="px-4 py-3 border-b border-gray-200">Rahul Krishna Sharma IAS</td>
                      <td className="px-4 py-3 border-b border-gray-200">CEO, SCTL</td>
                      <td className="px-4 py-3 border-b border-gray-200">
                        <a href="mailto:ceo@smartcitytvm.in" className="text-blue-600 hover:underline">ceo@smartcitytvm.in</a>
                      </td>
                      <td className="px-4 py-3 border-b border-gray-200">Appellate Authority</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3">Krishna kumar S</td>
                      <td className="px-4 py-3">GM, SCTL</td>
                      <td className="px-4 py-3">
                        <a href="mailto:gm@smartcitytvm.in" className="text-blue-600 hover:underline">gm@smartcitytvm.in</a>
                      </td>
                      <td className="px-4 py-3">Nodal Officer</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4" style={{ borderColor: '#34A0A4' }}>
              <h3 className="text-xl font-bold mb-4 flex items-center" style={{ color: '#1A759F' }}>
                <img className='w-6 mr-2 mt-0.5' src={Mail} alt="" />
                Send Us a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-teal-600 to-blue-800 hover:from-teal-700 hover:to-blue-900 text-white font-bold rounded-lg shadow-md transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Hours */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-teal-100 to-blue-100 rounded-xl p-6 border border-teal-300 text-center">
          <h3 className="text-xl font-bold mb-2" style={{ color: '#1A759F' }}>Office Hours</h3>
          <p className="text-gray-700">Monday to Friday: 9:00 AM - 5:30 PM</p>
          <p className="text-gray-700">Saturday: 10:00 AM - 1:00 PM</p>
          <p className="text-gray-700 mt-2">Closed on Sundays and Public Holidays</p>
        </div>
      </div>
    </div>
  )
}

export default ContactUs