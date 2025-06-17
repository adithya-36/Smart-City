import React from 'react';
import PdfFile from '../../assets/images/pdfFile.png'
import File1 from './PDFfiles/electrical_work.pdf'
import File2 from './PDFfiles/tender2.pdf'
import File3 from './PDFfiles/tender3.pdf'
import File4 from './PDFfiles/Interactive Intelligent Panels.pdf'
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
  // Add more items here...
];

const TenderTable = () => {
  return (
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
            {tenders.map((tender, index) => (
              <tr key={index} className="border-b hover:bg-blue-50">
                <td className="p-3">{tender.no}</td>
                <td className="p-3">{tender.title}</td>
                <td className="p-3">{tender.status}</td>
                <td className="p-3">{tender.date}</td>
                <td className="p-3">
                  <a href={tender.pdfLink} target="_blank" rel="noopener noreferrer">
                    <img className='w-8' src={PdfFile} alt="Pdf File" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TenderTable;
