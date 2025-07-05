import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Documents = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/documents/')
      .then(res => setDocuments(res.data))
      .catch(err => console.error('Failed to fetch documents', err));
  }, []);

  return (
    <div className="bg-white p-6">
      <h1 className="text-3xl font-bold text-[#184E77] mb-8 border-b border-gray-200 pb-4">Document</h1>
      
      <div className="mb-12">
        <ul className="space-y-3">
          {documents.map(doc => (
            <li key={doc.id}>
              <a
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E6091] hover:text-[#184E77] hover:underline transition-colors block py-2 border-b border-gray-100"
              >
                {doc.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Documents;
