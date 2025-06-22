import React, { useState } from 'react';
import PdfFile from '../../assets/images/pdfFile.png';
import File1 from './PDFfiles/electrical_work.pdf';
import File2 from './PDFfiles/tender2.pdf';
import File3 from './PDFfiles/tender3.pdf';
import File4 from './PDFfiles/Interactive Intelligent Panels.pdf';

const tenders = [
  {
    no: '2025_SCTLT_764512_2',
    title: 'Electrical works for supply, Installation, Testing and Commissioning of Street Lights near DPI Junction, Thiruvananthapuram',
    status: 'Open',
    date: '12/06/2025, 03.00 Pm',
    pdfLink: File1,
  },
  {
    no: '2025_SCTL_764512_1',
    title: 'Electrical works for supply,Installation,Testing and Commissioning of Street Lights near DPI Junction,Thiruvananthapuram',
    status: 'Open',
    date: '22/05/2025, 03.00 Pm',
    pdfLink: File2,
  },
  {
    no: '2025_SCTL_752849_2',
    title: '82.5 KVA 3ph Generator and Connected Electrical works at Model School Thiruvanathapuram',
    status: 'Open',
    date: '15/05/2025, 12.00 Pm',
    pdfLink: File3,
  },
  {
    no: 'GEM/2025/B/6017577',
    title: 'Interactive Intelligent Panels with CPU & UPS for development of Smart Classrooms in Model School',
    status: 'Closed',
    date: '15.03.2025 12.00 pm',
    pdfLink: File4,
  },
];

const TenderTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter tenders based on search term and status
  const filteredTenders = tenders.filter(tender => {
    const matchesSearch = 
      tender.no.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || tender.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTenders = filteredTenders.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTenders.length / itemsPerPage);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleStatusFilter = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1); // Reset to first page when filtering
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#184E77] py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Tenders</h1>
          <div className="w-20 h-1 bg-white"></div>
          <p className="mt-4 text-gray-200 max-w-3xl">
            Current and archived tenders for Smart City Thiruvananthapuram projects
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Search and Filter Bar */}
        <div className="mb-8 flex flex-col md:flex-row justify-between gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search tenders..."
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-[#1E6091]"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className="flex gap-2">
            <select 
              className="px-4 py-2 border border-gray-300 focus:outline-none focus:border-[#1E6091]"
              value={statusFilter}
              onChange={handleStatusFilter}
            >
              <option value="All">All Status</option>
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>

        {/* Tender Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#1E6091] text-white">
                <th className="p-4 text-left font-semibold border-b border-[#184E77]">Tender No.</th>
                <th className="p-4 text-left font-semibold border-b border-[#184E77]">Title</th>
                <th className="p-4 text-left font-semibold border-b border-[#184E77]">Status</th>
                <th className="p-4 text-left font-semibold border-b border-[#184E77]">Date</th>
                <th className="p-4 text-left font-semibold border-b border-[#184E77]">Documents</th>
              </tr>
            </thead>
            <tbody>
              {currentTenders.length > 0 ? (
                currentTenders.map((tender, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-gray-200 hover:bg-gray-100 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="p-4 font-medium text-gray-800">{tender.no}</td>
                    <td className="p-4 text-gray-700">{tender.title}</td>
                    <td className="p-4">
                      <span className={`inline-block px-3 py-1 text-sm font-medium ${
                        tender.status === 'Open' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-200 text-gray-800'
                      }`}>
                        {tender.status}
                      </span>
                    </td>
                    <td className="p-4 text-gray-600">{tender.date}</td>
                    <td className="p-4">
                      <a 
                        href={tender.pdfLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#1E6091] hover:text-[#184E77] transition-colors"
                      >
                        <img className="w-6 h-6 mr-2" src={PdfFile} alt="PDF" />
                        Download
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-4 text-center text-gray-500">
                    No tenders found matching your criteria
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {filteredTenders.length > itemsPerPage && (
          <div className="mt-8 flex justify-between items-center">
            <div className="text-sm text-gray-600">
              Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredTenders.length)} of {filteredTenders.length} entries
            </div>
            <div className="flex gap-1">
              <button 
                onClick={() => paginate(currentPage - 1)} 
                disabled={currentPage === 1}
                className={`px-3 py-1 border border-gray-300 ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-3 py-1 ${currentPage === number ? 'bg-[#1E6091] text-white' : 'border border-gray-300 text-gray-700 hover:bg-gray-100'}`}
                >
                  {number}
                </button>
              ))}
              
              <button 
                onClick={() => paginate(currentPage + 1)} 
                disabled={currentPage === totalPages}
                className={`px-3 py-1 border border-gray-300 ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TenderTable;