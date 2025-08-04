import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const GovernmentOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/government-orders/")
      .then(response => setOrders(response.data))
      .catch(error => console.error("Error fetching government orders:", error));
  }, []);
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB'); // dd/mm/yyyy
  };
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10" data-cy="government-orders-page">
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-200">
          <thead className="bg-[#184E77] text-white">
            <tr>
              <th className="p-3 border-b border-gray-300">No</th>
              <th className="p-3 border-b border-gray-300">Title</th>
              <th className="p-3 border-b border-gray-300">Date</th>
              <th className="p-3 border-b border-gray-300">Documents</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {orders.map((order, index) => (
              <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="p-3 break-words">
                  <Link to={`/government-orders/${order.id}`} className="text-blue-600 hover:underline">
                    {order.title}
                  </Link>
                </td>
                <td className="p-3 whitespace-nowrap">{formatDate(order.date)}</td>
                <td className="p-3 text-center">
                  <a
                    href={order.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1E6091] hover:text-[#184E77]"
                  >
                    <FaFilePdf className="text-xl inline-block" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 text-center">
        <a
          href="https://go.lsgkerala.gov.in/pages/query.php?txtgo=SCTL%2CSmart+city+thiruvananthapuram&sbmtsearch=Search&select=tag&Start=23&Index=2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1E6091] hover:text-[#184E77] hover:underline"
        >
          View more government orders
        </a>
      </div>
    </div>
  );
};
export default GovernmentOrders;