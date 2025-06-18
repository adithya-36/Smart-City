import React from 'react';
import File1 from './MPRFolder/nov_2020.pdf';
import File2 from './MPRFolder/oct_2020.pdf';
import File3 from './MPRFolder/sept_2020.pdf';
import PDFIcon from '../../assets/images/pdfFile.png';

const reports = [
  {
    month: 'November 2020',
    download: File1,
  },
  {
    month: 'October 2020',
    download: File2,
  },
  {
    month: 'September 2020',
    download: File3,
  },
  // Add more items here...
];

const MPR = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Monthly Progress Reports
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Access detailed monthly progress reports documenting the development and achievements of our smart city initiatives.
          </p>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
                <tr>
                  <th className="text-center py-4 px-4 text-sm md:text-base font-semibold">
                    Month
                  </th>
                  <th className="text-center py-4 px-4 text-sm md:text-base font-semibold">
                    Download Report
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {reports.map((report, index) => (
                  <tr 
                    key={index} 
                    className="hover:bg-blue-50 transition-colors duration-150"
                  >
                    <td className="text-center py-5 px-4 text-gray-700 font-medium">
                      {report.month}
                    </td>
                    <td className="text-center py-5 px-4">
                      <a 
                        href={report.download} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                      >
                        <img className="w-6" src={PDFIcon} alt="PDF Icon" />
                        <span>Download</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty State */}
        {reports.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">No Reports Available</h3>
            <p className="text-gray-500">Check back later for updated monthly reports</p>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-10 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-blue-800 mb-1">About These Reports</h3>
              <p className="text-blue-700">
                Monthly Progress Reports (MPRs) provide detailed updates on project status, milestones achieved, challenges faced, and future plans. These documents are published regularly to ensure transparency in our smart city initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MPR;