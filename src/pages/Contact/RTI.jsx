import React from 'react'
import Banner from '../../assets/banners/rtiBanner.jpg'
import RTIAct from './PDFFile/RTI2005Act.pdf'
import RTIForm from './PDFFile/RTIApplication.pdf'
import RTIGuideline from './PDFFile/Guidelines.pdf'
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa6";

const RTI = () => {
  const officers = [
    {
      title: "Appellate Authority",
      name: "Rahul Krishna Sharma IAS",
      designation: "CEO, SCTL",
      email: "ceo@smartcitytvm.in"
    },
    {
      title: "Public Information Officer",
      name: "Krishna Kumar S",
      designation: "General Manager (Operations)",
      email: "gm@smartcitytvm.in"
    },
    {
      title: "Assistant Public Information Officer",
      name: "Anitha R",
      designation: "Manager (Administration)",
      email: "admin@smartcitytvm.in"
    }
  ];

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
            Right to Information Act
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Information Officers Section */}
        <div className=" shadow-md p-6 md:p-8 mb-8 ">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1E6091]">
            Information Officers of Smart City Thiruvananthapuram Limited
          </h2>
          <p className="text-gray-700 mb-8">
            As per the Right to Information Act, 2005, the following officers are designated as the Information Officers of Smart City Thiruvananthapuram Limited.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {officers.map((officer, index) => (
              <div
                key={index}
                className="border p-5 shadow-sm hover:shadow-md transition-shadow"
                style={{
                  borderColor: index === 0 ? '#1E6091' :
                    index === 1 ? '#184E77' : '#1A759F'
                }}
              >
                <h3
                  className="font-bold text-lg mb-3 pb-2 border-b border-gray-200"
                  style={{
                    color: index === 0 ? '#1E6091' :
                      index === 1 ? '#184E77' : '#1A759F'
                  }}
                >
                  {officer.title}
                </h3>
                <p className="font-medium text-gray-800">{officer.name}</p>
                <p className="text-gray-600 mb-3">{officer.designation}</p>
                <a
                  href={`mailto:${officer.email}`}
                  className="text-[#184E77] hover:text-[#1E6091] flex items-start"
                >
                  <MdOutlineEmail className='text-xl mt-1 mr-2 text-[#184E77]'/>
                  {officer.email}
                </a>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-6 ">
            <h3 className="text-xl font-bold mb-4 text-[#1E6091]">Office Address</h3>
            <div className="space-y-2 text-gray-700">
              <p>4th Floor, Felicity Square Building,</p>
              <p>Opp AG Office, Statue,</p>
              <p>Thiruvananthapuram.</p>
              <p>Pincode: 695001</p>
              <div className="flex flex-wrap gap-6 mt-4">
                <div className="flex items-center">
                  <MdOutlineEmail className='text-gray-500 text-lg mr-1'/>
                  <span>
                    Email: <a href="mailto:info@smartcitytvm.in" className="text-[#1A759F] hover:text-[#184E77]">info@smartcitytvm.in</a>
                  </span>
                </div>
                <div className="flex items-center">
                  <MdOutlinePhone className='text-gray-500 text-xl mr-1'/>
                  <span>
                    Phone: <a href="tel:+9104714010374" className="text-[#1A759F] hover:text-[#184E77]">+91 - 0471 - 4010374</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About RTI Section */}
        <div className="bg-white shadow-md p-6 md:p-8 ">
          <h2 className="text-2xl font-bold mb-6 text-[#1E6091]">About the Right to Information Act</h2>

          <div className="space-y-6 text-gray-700">
            <p>
              The Right to Information Act, 2005 (RTI Act) empowers citizens to seek information from public authorities to promote transparency and accountability in the working of every public authority.
            </p>

            <div className="bg-gray-50 p-4 ">
              <h3 className="font-bold mb-3 text-[#1E6091]">Key Provisions:</h3>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Citizens can request information from any public authority</li>
                <li>Authorities must respond within 30 days</li>
                <li>Information should be provided in the requested format</li>
                <li>Minimal fees may apply for information requests</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className=" p-4" style={{ borderColor: '#1A759F' }}>
                <h3 className="font-bold mb-4 text-[#1E6091]">How to File an RTI Request</h3>
                <ol className="list-decimal list-inside space-y-2 pl-2">
                  <li>Submit a written request in English or Malayalam</li>
                  <li>Include your contact information</li>
                  <li>Clearly specify the information sought</li>
                  <li>Pay the applicable fee (if any)</li>
                  <li>Submit to the Public Information Officer</li>
                </ol>
              </div>

              <div className=" p-4" style={{ borderColor: '#184E77' }}>
                <h3 className="font-bold mb-4 text-[#1E6091]">RTI Fee Structure</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between border-b border-gray-200 pb-2">
                    <span>Application Fee:</span>
                    <span>₹10</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-200 pb-2">
                    <span>Per Page (A4/A3):</span>
                    <span>₹2</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-200 pb-2">
                    <span>Inspection of Records:</span>
                    <span>No fee for first hour</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Diskette or Floppy:</span>
                    <span>₹50</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-6 text-[#1E6091]">Download RTI Forms & Resources</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={RTIForm}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-300 text-[#1E6091] font-medium py-2 px-4 shadow-sm hover:bg-gray-50 transition flex items-center"
            >
              <FaFilePdf className='text-lg mr-1'/>
              RTI Application Form
            </a>
            <a
              href={RTIAct}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-300 text-[#1E6091] font-medium py-2 px-4 shadow-sm hover:bg-gray-50 transition flex items-center"
            >
              <FaFilePdf className='text-lg mr-1'/>
              RTI Act, 2005 (Full Text)
            </a>
            <a
              href={RTIGuideline}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-300 text-[#1E6091] font-medium py-2 px-4 shadow-sm hover:bg-gray-50 transition flex items-center"
            >
              <FaFilePdf className='text-lg mr-1'/>
              RTI Guidelines
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RTI