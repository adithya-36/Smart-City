import React from 'react'
import Banner from '../../assets/banners/careerBanner.jpg'
import File1 from './CareerFolder/Ranklist1.pdf'
import File2 from './CareerFolder/Ranklist2.pdf'
import PdfFile from '../../assets/images/pdfFile.png'
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
  // Add more items here...
];
const Careers = () => {
  return (
    <div className="font-sans">
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
            Careers
          </h1>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50 p-4 md:p-10">
        <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
          <table className="w-full text-left table-auto border-collapse">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="p-3">No</th>
                <th className="p-3">Title</th>
                <th className="p-3">Status</th>
                <th className="p-3">Date</th>
                <th className="p-3">Documents</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {careers.map((career, index) => (
                <tr key={index} className="border-b hover:bg-blue-50">
                  <td className="p-3">{career.no}</td>
                  <td className="p-3">{career.title}</td>
                  <td className="p-3">{career.status}</td>
                  <td className="p-3">{career.date}</td>
                  <td className="p-3">
                    <a href={career.pdfLink} target="_blank" rel="noopener noreferrer">
                      <img className='w-8' src={PdfFile} alt="Pdf File" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default Careers