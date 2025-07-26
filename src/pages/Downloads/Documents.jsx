import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Documents = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/documents/')
      .then(res => setDocuments(res.data))
      .catch(err => console.error('Failed to fetch documents', err));
  }, []);

  return (
    <div className="bg-white p-6" data-cy="documents-page">
      <h1 className="text-3xl font-bold text-[#184E77] mb-8 border-b border-gray-200 pb-4">Documents</h1>
      
      <div className="mb-12">
        <ul className="space-y-3">
          {documents.map(doc => (
            <li key={doc.id}>
              <Link
                to={`/downloads/${doc.id}`}
                className="text-[#1E6091] hover:text-[#184E77] hover:underline transition-colors block py-2 border-b border-gray-100"
              >
                {doc.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Documents;
