import React from 'react';
import PdfFile from '../../assets/images/pdfFile.png'
import File1 from './govtOrders/GO2.pdf'
const GovtOrders = [
  {
    no: '1',
    title: 'Additional Charge to IAS Officers – Chief Executive Officer – Shri. P. Bala Kiran IAS',
    date: '20/12/2018',
    pdfLink: File1,
  },
  // Add more items here...
];
const GovernmentOrders = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10">
          <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
            <table className="w-full text-left table-auto border-collapse">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="p-3">No</th>
                  <th className="p-3">Title</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Documents</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {GovtOrders.map((GovtOrder, index) => (
                  <tr key={index} className="border-b hover:bg-blue-50">
                    <td className="p-3">{GovtOrder.no}</td>
                    <td className="p-3">{GovtOrder.title}</td>
                    <td className="p-3">{GovtOrder.date}</td>
                    <td className="p-3">
                      <a href={GovtOrder.pdfLink} target="_blank" rel="noopener noreferrer">
                        <img className='w-8' src={PdfFile} alt="Pdf File" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
  )
}

export default GovernmentOrders