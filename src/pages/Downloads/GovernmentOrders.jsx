import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaFilePdf } from "react-icons/fa6";

const GovernmentOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/government-orders/")
      .then(response => setOrders(response.data))
      .catch(error => console.error("Error fetching government orders:", error));
  }, []);

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
            {orders.map((order, index) => (
              <tr key={order.id} className="border-b hover:bg-blue-50">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{order.title}</td>
                <td className="p-3">{order.date}</td>
                <td className="p-3">
                  <a href={order.pdf} target="_blank" rel="noopener noreferrer">
                    <FaFilePdf className="text-2xl m-2 text-red-600" />
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

export default GovernmentOrders;
