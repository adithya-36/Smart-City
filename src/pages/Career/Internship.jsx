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
    title: 'Opportunity for hands -on site training for fresh graduates in the Field of Engineering/Management in Thiruvananthapuram',
    status: 'Open',
    date: '',
    pdfLink: File2,
  },
  {
    post: 'Call for Interns',
    title: 'Oppotunity for hands -on job training for fresh graduates in the Field of Urban Planning,Civil Engineering, Electronice etc in Thiruvananthapuram',
    status: 'Closed',
    date: '10th June 2022(Civil) ,12th June 2022(Urban Planning) and 12th June 2022 (Electronics),5 PM',
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
  // Add more items here...
];
const Internship = () => {
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
            Internships
          </h1>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50 p-4 md:p-10">
        <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
          <table className="w-full text-left table-auto border-collapse">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="p-3">Post</th>
                <th className="p-3">Title</th>
                <th className="p-3">Status</th>
                <th className="p-3">Date</th>
                <th className="p-3">Documents</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {internships.map((internship, index) => (
                <tr key={index} className="border-b hover:bg-blue-50">
                  <td className="p-3">{internship.post}</td>
                  <td className="p-3">{internship.title}</td>
                  <td className="p-3">{internship.status}</td>
                  <td className="p-3">{internship.date}</td>
                  <td className="p-3">
                    <a href={internship.pdfLink} target="_blank" rel="noopener noreferrer">
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

export default Internship