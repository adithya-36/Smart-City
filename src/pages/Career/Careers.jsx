import React from 'react'
import Banner from '../../assets/banners/careerBanner.jpg'
import File1 from './CareerFolder/Ranklist1.pdf'
import File2 from './CareerFolder/Ranklist2.pdf'
import { FaFilePdf } from "react-icons/fa6";

const careers = [
  {
    no: '1',
    title: 'Result Published- for the post of MTS/Office Assistant in SCTL',
    status: 'Published',
    date: '06/06/2025',
    pdfLink: File1,
  },
  {
    no: '2',
    title: 'Result Published- for the post of IT Expert',
    status: 'Published',
    date: '26/05/2025',
    pdfLink: File2,
  },
];

const Careers = () => {
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
            Careers
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="overflow-x-auto shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1E6091] text-white">
                <th className="p-4 font-semibold border-b border-[#184E77]">No</th>
                <th className="p-4 font-semibold border-b border-[#184E77]">Title</th>
                <th className="p-4 font-semibold border-b border-[#184E77]">Status</th>
                <th className="p-4 font-semibold border-b border-[#184E77]">Date</th>
                <th className="p-4 font-semibold border-b border-[#184E77]">Documents</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {careers.map((career, index) => (
                <tr 
                  key={index} 
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4 text-gray-700">{career.no}</td>
                  <td className="p-4 text-gray-700 font-medium">{career.title}</td>
                  <td className="p-4 text-gray-700">
                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700">
                      {career.status}
                    </span>
                  </td>
                  <td className="p-4 text-gray-700">{career.date}</td>
                  <td className="p-4">
                    <a 
                      href={career.pdfLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#1A759F] hover:text-[#184E77]"
                    >
                      <FaFilePdf className='text-xl mx-2' />
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {careers.length === 0 && (
          <div className="bg-white p-8 text-center border-t-4 border-[#1E6091]">
            <p className="text-gray-600">No career opportunities available at this time.</p>
            <p className="text-gray-600 mt-2">Please check back later.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Careers