import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Banner from '../../assets/banners/careerBanner.jpg';
import { FaFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Careers = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/careers/')
      .then(res => {
        setCareers(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching careers:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-gray-50" data-cy="careers-page">
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
            Careers
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : careers.length === 0 ? (
          <div className="bg-white p-8 text-center border-t-4 border-[#1E6091]">
            <p className="text-gray-600">No career opportunities available at this time.</p>
          </div>
        ) : (
          <div className="overflow-x-auto shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1E6091] text-white">
                  <th className="p-4 font-semibold border-b border-[#184E77]">No</th>
                  <th className="p-4 font-semibold border-b border-[#184E77]">Title</th>
                  <th className="p-4 font-semibold border-b border-[#184E77]">Status</th>
                  <th className="p-4 font-semibold border-b border-[#184E77]">Date</th>
                  <th className="p-4 font-semibold border-b border-[#184E77]">Documents</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {careers.map((career) => (
                  <tr key={career.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-gray-700">{career.no}</td>
                    <td className="p-4 text-gray-700 font-medium">
                      <Link
                        to={`/careers/${career.id}`}
                        className="text-[#1A759F] hover:text-[#184E77] hover:underline"
                      >
                        {career.title}
                      </Link>
                    </td>
                    <td className="p-4 text-gray-700">{career.status}</td>
                    <td className="p-4 text-gray-700">{career.posted_on}</td>
                    <td className="p-4">
                      <a
                        href={career.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#1A759F] hover:text-[#184E77]"
                      >
                        <FaFilePdf className="text-xl mx-2" />
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Careers;
