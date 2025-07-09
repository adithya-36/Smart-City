import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PdfFile from '../../assets/images/pdfFile.png'; // ✅ use same icon

const TenderDetail = () => {
  const { id } = useParams();
  const [tender, setTender] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/tenders/${id}/`)
      .then(res => setTender(res.data))
      .catch(err => console.error('Error fetching tender:', err));
  }, [id]);

  const formatDateTime = (isoDateString) => {
    return new Date(isoDateString).toLocaleString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata',
    });
  };

  if (!tender) {
    return <p className="p-6 text-gray-600">Loading tender details...</p>;
  }

  const isExpired = new Date(tender.last_date_to_submit) < new Date();

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6">
        <h1 className="text-3xl font-bold text-[#184E77] mb-6">{tender.title}</h1>

        <div className="space-y-4 text-gray-800 text-lg">
          <p><strong>Tender No:</strong> {tender.no}</p>
          <p>
            <strong>Status:</strong>{" "}
            <span className={`inline-block px-3 py-1 text-sm font-medium ${isExpired || tender.status === 'Closed'
              ? 'bg-gray-200 text-gray-800'
              : 'bg-green-100 text-green-800'
              }`}>
              {isExpired ? 'Closed' : tender.status}
            </span>
          </p>
          <p>
            <strong>Deadline:</strong> {formatDateTime(tender.last_date_to_submit)}
            {isExpired && (
              <span className="ml-2 text-red-600 text-sm font-semibold">(Expired)</span>
            )}
          </p>

          <div className="mt-4">
            <a
              href={tender.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#1E6091] hover:text-[#184E77] text-lg underline"
            >
              <img src={PdfFile} alt="PDF" className="w-6 h-6 mr-2" />
              Download Tender PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenderDetail;
