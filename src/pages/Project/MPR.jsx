import React, { useState } from 'react';
import File1 from './MPRFolder/nov_2020.pdf';
import File2 from './MPRFolder/oct_2020.pdf';
import File3 from './MPRFolder/sept_2020.pdf';
import File4 from './MPRFolder/aug_2020.pdf';
import File5 from './MPRFolder/july_2020.pdf';
import File6 from './MPRFolder/june_2020.pdf';
import File7 from './MPRFolder/may_2020.pdf';
import File8 from './MPRFolder/april_2020.pdf';
import File9 from './MPRFolder/march_2020.pdf';
import File10 from './MPRFolder/feb_2020.pdf';
import File11 from './MPRFolder/jan_2020.pdf';
import File12 from './MPRFolder/dec_2019.pdf';
import File13 from './MPRFolder/nov_2019.pdf';
import PDFIcon from '../../assets/images/pdfFile.png';

const reports = [
  { month: 'November 2020', download: File1 },
  { month: 'October 2020', download: File2 },
  { month: 'September 2020', download: File3 },
  { month: 'August 2020', download: File4 },
  { month: 'July 2020', download: File5 },
  { month: 'June 2020', download: File6 },
  { month: 'May 2020', download: File7 },
  { month: 'April 2020', download: File8 },
  { month: 'March 2020', download: File9 },
  { month: 'February 2020', download: File10 },
  { month: 'January 2020', download: File11 },
  { month: 'December 2019', download: File12 },
  { month: 'November 2019', download: File13 },
];

const MPR = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('All');

  // Filter logic
  const filteredReports = reports.filter((report) => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    const reportLower = report.month.toLowerCase();

    const matchesSearch = reportLower.includes(lowerCaseSearch);
    const matchesYear = selectedYear === 'All' || report.month.includes(selectedYear);

    return matchesSearch && matchesYear;
  });

  const uniqueYears = [...new Set(reports.map(report => report.month.split(' ')[1]))];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#184E77] mb-4">
            Monthly Progress Reports
          </h1>
          <div className="w-24 h-1 bg-[#1E6091] mx-auto"></div>
          <p className="mt-6 text-gray-700 max-w-2xl mx-auto">
            Access detailed monthly progress reports documenting the development and achievements of our smart city initiatives.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Search by month or year..."
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1E6091]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1E6091]"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="All">All Years</option>
            {uniqueYears.map((year, index) => (
              <option key={index} value={year}>{year}</option>
            ))}
          </select>
        </div>

        {/* Table */}
        <div className="bg-white shadow-sm mb-12 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-center">
              <thead>
                <tr className="bg-[#1E6091] text-white">
                  <th className="p-4 font-semibold border-b border-[#184E77]">Month</th>
                  <th className="p-4 font-semibold border-b border-[#184E77]">Download Report</th>
                </tr>
              </thead>
              <tbody>
                {filteredReports.length > 0 ? (
                  filteredReports.map((report, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                    >
                      <td className="p-4 text-gray-800 font-medium">{report.month}</td>
                      <td className="p-4">
                        <a
                          href={report.download}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center text-[#1E6091] hover:text-[#184E77] transition"
                        >
                          <img className="w-6 h-6 mr-2" src={PDFIcon} alt="PDF" />
                          Download
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="p-8 text-center text-gray-500">
                      <div className="flex flex-col items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h3 className="text-lg font-medium text-gray-700 mb-2">No Reports Found</h3>
                        <p>Try adjusting your search or filter.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-white p-6 border border-gray-200 rounded-lg max-w-4xl mx-auto text-left">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1E6091]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-[#184E77] mb-2">About These Reports</h3>
              <p className="text-gray-700">
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
