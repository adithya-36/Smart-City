import React, { useState } from 'react';
import Banner from '../../assets/banners/complaintBanner.jpg';
import { GrStatusGood } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { LuMessageSquareText } from "react-icons/lu";
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
const RegisterComplaint = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    complaint: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Complaint submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
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
            Register A Complaint
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {submitted ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <GrStatusGood className='text-5xl text-[#184E77]'/>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Complaint Submitted Successfully!</h2>
            <p className="text-gray-600 max-w-md mx-auto mb-6">
              Thank you for bringing this to our attention. Your complaint has been registered and our team will address it shortly.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-4 bg-[#184E77] hover:bg-[#1E6091] text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
            >
              Submit Another Complaint
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Report an Issue
              </h2>
              <p className="text-gray-600">
                Help us improve by reporting any problems or concerns you've encountered
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaRegUser className='text-gray-400 text-md'/>
                    </div>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your full name"
                    />
                  </div>
                </div>
                
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MdOutlineEmail className='text-gray-400 text-lg'/>
                    </div>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>
              
              {/* Project Field */}
              <div>
                <label htmlFor="project" className="block text-gray-700 font-medium mb-2">
                  Project / Service Concerned <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaRegBuilding className='text-gray-400 text-lg'/>
                  </div>
                  <input 
                    type="text" 
                    id="project" 
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Which project/service is this about?"
                  />
                </div>
              </div>
              
              {/* Complaint Field */}
              <div>
                <label htmlFor="complaint" className="block text-gray-700 font-medium mb-2">
                  Complaint Details <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3">
                    <LuMessageSquareText className='text-gray-400 text-lg'/>
                  </div>
                  <textarea 
                    id="complaint" 
                    name="complaint"
                    value={formData.complaint}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Please describe your complaint in detail..."
                  ></textarea>
                </div>
                <p className="text-sm text-gray-500 mt-1">Please provide as much detail as possible</p>
              </div>
              
              {/* File Upload */}
              <div>
                <label htmlFor="attachment" className="block text-gray-700 font-medium mb-2">
                  Attach Supporting Documents (Optional)
                </label>
                <div className="flex items-center justify-center w-full">
                  <label htmlFor="attachment" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <IoCloudUploadOutline className='text-xl text-gray-600'/>
                      <p className="text-sm text-gray-500 mt-2">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                    </div>
                    <input id="attachment" type="file" className="hidden" />
                  </label>
                </div>
              </div>
              
              <div className="flex items-center">
                <input id="terms" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" required />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  I confirm that the information provided is accurate to the best of my knowledge
                </label>
              </div>
              
              <div className="text-center pt-4">
                <button 
                  type="submit"
                  className="py-3 px-8 bg-[#184E77] hover:bg-[#1E6091]  text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
                >
                  Submit Complaint
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Contact Information */}
        {!submitted && (
          <div className="mt-8 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6 border border-teal-200">
            <h3 className="text-xl font-bold mb-3 text-center" style={{ color: '#1A759F' }}>
              Need Immediate Assistance?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-2">
                  <IoCallOutline className='text-2xl text-[#184E77]'/>
                </div>
                <p className="font-medium">Call Us</p>
                <a href="tel:+9104714010374" className="text-[#1E6091] hover:underline">+91 - 0471 - 4010374</a>
              </div>
              
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-2">
                  <MdMailOutline className='text-2xl text-[#184E77]'/>
                </div>
                <p className="font-medium">Email Us</p>
                <a href="mailto:info@smartcitytvm.in" className="text-[#1E6091] hover:underline">info@smartcitytvm.in</a>
              </div>
              
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-2">
                  <IoLocationOutline className='text-3xl text-[#184E77]'/>
                </div>
                <p className="font-medium">Visit Us</p>
                <p className="text-sm">4th Floor, Felicity Square Building, Statue</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterComplaint;