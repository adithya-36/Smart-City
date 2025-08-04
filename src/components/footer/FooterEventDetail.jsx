// src/components/footer/FooterEventDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const FooterEventDetail = () => {
  const { id } = useParams();
  const [eventItem, setEventItem] = useState(null);
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/events/${id}/`)
      .then(res => setEventItem(res.data))
      .catch(err => console.error("Error loading event item:", err));
  }, [id]);
  if (!eventItem) return <div className="p-6">Loading...</div>;
  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{eventItem.title}</h1>
      {eventItem.image && (
        <img
          src={eventItem.image}
          alt={eventItem.title}
          className="w-full h-auto rounded shadow mb-6"
        />
      )}
      <p className="text-gray-600 mb-2">📅 {eventItem.date}</p>
      <p className="text-gray-700">This event does not yet have a full description field. You can update the model to include it.</p>
    </div>
  );
};
export default FooterEventDetail;