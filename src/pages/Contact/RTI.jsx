import React from 'react'
import Banner from '../../assets/banners/rtiBanner.jpg'
import MailBlack from '../../assets/images/mail_black.png'
import PhoneBlack from '../../assets/images/phone_black.png'
import RTIAct from './PDFFile/RTI2005Act.pdf'
import RTIForm from './PDFFile/RTIApplication.pdf'
import RTIGuideline from './PDFFile/Guidelines.pdf'
import PDFIcon from '../../assets/images/pdfFile.png'
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
            Right to Information Act
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4" style={{ color: '#1A759F' }}>
            Information Officers of Smart City Thiruvananthapuram Limited
          </h2>
          <p className="text-gray-700 mb-6">
            As per the Right to Information Act, 2005, the following officers are designated as the Information Officers of Smart City Thiruvananthapuram Limited.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {officers.map((officer, index) => (
              <div
                key={index}
                className="border rounded-lg p-5 hover:shadow-md transition-shadow"
                style={{
                  borderColor: index === 0 ? '#1E6091' :
                    index === 1 ? '#168AAD' : '#34A0A4'
                }}
              >
                <h3
                  className="font-bold text-lg mb-3 pb-2 border-b"
                  style={{
                    color: index === 0 ? '#1E6091' :
                      index === 1 ? '#168AAD' : '#34A0A4'
                  }}
                >
                  {officer.title}
                </h3>
                <p className="font-medium text-gray-800">{officer.name}</p>
                <p className="text-gray-600 mb-3">{officer.designation}</p>
                <a
                  href={`mailto:${officer.email}`}
                  className="text-blue-600 hover:underline flex items-start"
                >
                  <img src={MailBlack} alt="Email" className="w-4 h-4 mr-2 mt-1" />
                  {officer.email}
                </a>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#1A759F' }}>Office Address</h3>
            <div className="space-y-2 text-gray-700">
              <p>4th Floor, Felicity Square Building,</p>
              <p>Opp AG Office, Statue,</p>
              <p>Thiruvananthapuram.</p>
              <p>Pincode: 695001</p>
              <div className="flex flex-wrap gap-6 mt-4">
                <div className="flex items-center">
                  <img src={MailBlack} alt="Email" className="w-5 h-5 mr-2" />
                  <span>
                    Email: <a href="mailto:info@smartcitytvm.in" className="text-blue-600 hover:underline">info@smartcitytvm.in</a>
                  </span>
                </div>
                <div className="flex items-center">
                  <img src={PhoneBlack} alt="Phone" className="w-5 h-5 mr-2" />
                  <span>
                    Phone: <a href="tel:+9104714010374" className="text-blue-600 hover:underline">+91 - 0471 - 4010374</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#1A759F' }}>About the Right to Information Act</h2>

          <div className="space-y-4 text-gray-700">
            <p>
              The Right to Information Act, 2005 (RTI Act) empowers citizens to seek information from public authorities to promote transparency and accountability in the working of every public authority.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg border-l-4" style={{ borderColor: '#52B69A' }}>
              <h3 className="font-bold mb-2">Key Provisions:</h3>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Citizens can request information from any public authority</li>
                <li>Authorities must respond within 30 days</li>
                <li>Information should be provided in the requested format</li>
                <li>Minimal fees may apply for information requests</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="border rounded-lg p-4" style={{ borderColor: '#76C893' }}>
                <h3 className="font-bold mb-3" style={{ color: '#168AAD' }}>How to File an RTI Request</h3>
                <ol className="list-decimal list-inside space-y-2 pl-2">
                  <li>Submit a written request in English or Malayalam</li>
                  <li>Include your contact information</li>
                  <li>Clearly specify the information sought</li>
                  <li>Pay the applicable fee (if any)</li>
                  <li>Submit to the Public Information Officer</li>
                </ol>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: '#99D98C' }}>
                <h3 className="font-bold mb-3" style={{ color: '#1A759F' }}>RTI Fee Structure</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between border-b pb-2">
                    <span>Application Fee:</span>
                    <span>₹10</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span>Per Page (A4/A3):</span>
                    <span>₹2</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
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

        {/* Resources */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold mb-4" style={{ color: '#1A759F' }}>Download RTI Forms & Resources</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={RTIForm}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-blue-300 text-blue-700 font-medium py-2 px-4 rounded-lg shadow hover:bg-blue-50 transition flex items-center"
            >
              <img className='w-5 mx-2' src={PDFIcon} alt="" />
              RTI Application Form
            </a>
            <a
              href={RTIAct}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-blue-300 text-blue-700 font-medium py-2 px-4 rounded-lg shadow hover:bg-blue-50 transition flex items-center"
            >
              <img className='w-5 mx-2' src={PDFIcon} alt="" />
              RTI Act, 2005 (Full Text)
            </a>
            <a
              href={RTIGuideline}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-blue-300 text-blue-700 font-medium py-2 px-4 rounded-lg shadow hover:bg-blue-50 transition flex items-center"
            >
              <img className='w-5 mx-2' src={PDFIcon} alt="" />
              RTI Guidelines
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RTI