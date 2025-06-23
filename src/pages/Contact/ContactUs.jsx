import React from 'react'
import Banner from '../../assets/banners/contactusBanner.jpg'
import { FaAddressCard } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import { MdGroups } from "react-icons/md";
const ContactUs = () => {
  return (
    <div className="bg-gray-50">
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
            Contact Us
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Address Card */}
            <div className="bg-white shadow-md  p-6">
              <div className="flex items-start mb-4">
                <FaAddressCard className='text-xl mr-2 my-1 text-[#184E77]'/>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: '#184E77' }}>Address</h3>
                  <div className="mt-2 space-y-1 text-gray-700">
                    <p>4th Floor, Felicity Square Building,</p>
                    <p>Opp AG Office, Statue,</p>
                    <p>Thiruvananthapuram.</p>
                    <p>Pincode: 695001</p>
                  </div>
                  <div className="mt-4 space-y-1">
                    <p className="flex items-center">
                      <MdEmail className='text-lg mx-1 my-1 text-[#184E77]'/>
                      <span>Email: <a href="mailto:info@smartcitytvm.in" className="text-[#1E6091] hover:underline ml-1">info@smartcitytvm.in</a></span>
                    </p>
                    <p className="flex items-center">
                      <FaPhone className='text-md mx-1 my-1 text-[#184E77]'/>
                      <span>Phone: <a href="tel:+9104714010374" className="text-[#1E6091] hover:underline ml-1">+91-0471-4010374</a></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-white shadow-md border-t-4 border-[#168AAD] p-6">
              <div className="flex items-center mb-4">
                <FaLocationDot className='text-xl mr-2 my-1 text-[#184E77]'/>
                <h3 className="text-xl font-bold" style={{ color: '#1E6091' }}>Location</h3>
              </div>
              <div className="aspect-w-16 aspect-h-9 h-64 md:h-72">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.5429336821355!2d76.9481307756858!3d8.486602691508522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb0a5a9b7b0f%3A0x1e5f3b5a5a5b5b5b!2sSmart%20City%20Thiruvananthapuram%20Limited!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 'none' }}
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
                  className="inline-flex items-center text-[#1E6091] hover:text-[#184E77] font-medium"
                >
                  Open in Google Maps
                  <IoIosLink className='text-xl ml-2 text-[#184E77]'/>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form and Table */}
          <div className="space-y-8">
            {/* Contact Personnel Table */}
            <div className="bg-white shadow-md border-t-4 border-[#1A759F] p-6">
              <div className="flex items-center mb-4">
                <MdGroups className='text-3xl text-[#184E77] mr-2'/>
                <h3 className="text-xl font-bold" style={{ color: '#1E6091' }}>Key Personnel</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                  <thead>
                    <tr style={{ backgroundColor: '#1E6091' }}>
                      <th className="px-4 py-3 text-left text-white font-medium">Name</th>
                      <th className="px-4 py-3 text-left text-white font-medium">Designation</th>
                      <th className="px-4 py-3 text-left text-white font-medium">E-mail</th>
                      <th className="px-4 py-3 text-left text-white font-medium">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 border-b border-gray-200">Rahul Krishna Sharma IAS</td>
                      <td className="px-4 py-3 border-b border-gray-200">CEO, SCTL</td>
                      <td className="px-4 py-3 border-b border-gray-200">
                        <a href="mailto:ceo@smartcitytvm.in" className="text-[#1A759F] hover:underline">ceo@smartcitytvm.in</a>
                      </td>
                      <td className="px-4 py-3 border-b border-gray-200">Appellate Authority</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3">Krishna kumar S</td>
                      <td className="px-4 py-3">GM, SCTL</td>
                      <td className="px-4 py-3">
                        <a href="mailto:gm@smartcitytvm.in" className="text-[#1A759F] hover:underline">gm@smartcitytvm.in</a>
                      </td>
                      <td className="px-4 py-3">Nodal Officer</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white shadow-md border-t-4 border-[#34A0A4] p-6">
              <div className="flex items-center mb-4">
                <MdEmail className='text-3xl mr-2 my-1 text-[#184E77]'/>
                <h3 className="text-xl font-bold" style={{ color: '#1E6091' }}>Send Us a Message</h3>
              </div>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-[#1A759F] focus:border-[#1A759F]"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-[#1A759F] focus:border-[#1A759F]"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-[#1A759F] focus:border-[#1A759F]"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-[#1A759F] focus:border-[#1A759F]"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-3 px-4 bg-[#1E6091] hover:bg-[#184E77] text-white font-bold shadow-sm transition duration-300"
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
        <div className="bg-gradient-to-r from-[#1E6091] to-[#184E77] p-6 text-center text-white">
          <h3 className="text-xl font-bold mb-3">Office Hours</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <p>Monday to Friday: 9:00 AM - 5:30 PM</p>
            <p>Saturday: 10:00 AM - 1:00 PM</p>
            <p>Closed on Sundays and Public Holidays</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs