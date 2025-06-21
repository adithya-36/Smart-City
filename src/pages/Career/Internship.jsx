import React from 'react'
import Banner from '../../assets/banners/internshipBanner.jpg'
import File1 from './InternshipFolder/AICTE_Internship_Enterprise_Portal_-_Learning_by_doing_1_Crore_Internships_by_2025_legal.pdf'
import File2 from './InternshipFolder/AICTE_Internship_Enterprise_Portal_-_Learning_by_doing_1_Crore_Internships_by_2025.pdf'
import File3 from './InternshipFolder/Internship-AD-malayalam.jpg'
import File4 from './InternshipFolder/Internship-SMCT.pdf'
import PdfFile from '../../assets/images/pdfFile.png'

const internships = [
  {
    post: 'Call for Interns-Legal Assistant',
    title: 'Opportunity for paid internship -Law graduates',
    status: 'Open',
    date: 'last date: 09.06.2025,5 PM',
    pdfLink: File1,
  },
  {
    post: 'Call for Interns-Student Interns : Management Trainees/Site Engineers',
    title: 'Opportunity for hands-on site training for fresh graduates in the Field of Engineering/Management in Thiruvananthapuram',
    status: 'Open',
    date: '',
    pdfLink: File2,
  },
  {
    post: 'Call for Interns',
    title: 'Opportunity for hands-on job training for fresh graduates in the Field of Urban Planning,Civil Engineering, Electronics etc in Thiruvananthapuram',
    status: 'Closed',
    date: '10th June 2022(Civil), 12th June 2022(Urban Planning) and 12th June 2022 (Electronics),5 PM',
    pdfLink: 'https://internship.aicte-india.org/',
  },
  {
    post: 'Internship for MPI EOL',
    title: 'Data Collection and Analysis for Municipal Performance (MP) Index and Cases of Living(EOL)',
    status: 'Closed',
    date: '',
    pdfLink: File3,
  },
  {
    post: 'Internship _IT',
    title: 'Application invited for internship for Data analysis, Website management, Project Scheduling etc',
    status: 'Closed',
    date: '15th June 2020, 5 PM',
    pdfLink: File4,
  },
];

const Internship = () => {
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
            Internships
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="overflow-x-auto shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1E6091] text-white">
                <th className="p-4 font-semibold border-b border-[#184E77]">Post</th>
                <th className="p-4 font-semibold border-b border-[#184E77]">Title</th>
                <th className="p-4 font-semibold border-b border-[#184E77]">Status</th>
                <th className="p-4 font-semibold border-b border-[#184E77]">Date</th>
                <th className="p-4 font-semibold border-b border-[#184E77]">Documents</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {internships.map((internship, index) => (
                <tr 
                  key={index} 
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4 text-gray-700 font-medium">{internship.post}</td>
                  <td className="p-4 text-gray-700">{internship.title}</td>
                  <td className="p-4">
                    <span className={`inline-block px-3 py-1 ${
                      internship.status === 'Open' 
                        ? 'bg-[#D9ED92] text-[#1E6091]' 
                        : 'bg-gray-200 text-gray-700'
                    }`}>
                      {internship.status}
                    </span>
                  </td>
                  <td className="p-4 text-gray-700">{internship.date}</td>
                  <td className="p-4">
                    {internship.pdfLink.startsWith('http') ? (
                      <a 
                        href={internship.pdfLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#1A759F] hover:text-[#184E77]"
                      >
                        <span className="mr-1">View Link</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <a 
                        href={internship.pdfLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#1A759F] hover:text-[#184E77]"
                      >
                        <img className="w-6 mr-2" src={PdfFile} alt="PDF icon" />
                        <span>View</span>
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {internships.length === 0 && (
          <div className="bg-white p-8 text-center border-t-4 border-[#1E6091]">
            <p className="text-gray-600">No internship opportunities available at this time.</p>
            <p className="text-gray-600 mt-2">Please check back later.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Internship