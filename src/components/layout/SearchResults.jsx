import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchResults = () => {
  const query = useQuery().get('query');
  const [results, setResults] = useState({
    news: [],
    tenders: [],
    media: [],
    events: [],
  });

  const [loading, setLoading] = useState(false);  // ✅ Fix here
  const [error, setError] = useState(null);       // ✅ Fix here

  useEffect(() => {
    if (query) {
      setLoading(true);
      axios.get(`http://127.0.0.1:8000/api/search/?query=${query}`)
        .then(res => {
          setResults(res.data);
          setError(null);
          console.log("Search API Response:", res.data);
        })
        .catch(err => {
          console.error(err);
          setError('Failed to load results.');
        })
        .finally(() => setLoading(false));
    }
  }, [query]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-[#184E77]">Search Results for: <span className="text-black">{query}</span></h2>

      {loading && <p className="text-blue-600">Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {/* News */}
      {results.news?.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mb-2 text-blue-800">News</h3>
          <ul className="mb-6">
            {results.news.map(item => (
              <li key={item.id} className="mb-2">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{item.title}</a>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Tenders */}
      {results.tenders?.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mb-2 text-blue-800">Tenders</h3>
          <ul className="mb-6">
            {results.tenders.map(item => (
              <li key={item.id}>
                <span className="font-medium">{item.title}</span> – {item.status}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Media */}
      {results.media?.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mb-2 text-blue-800">Media</h3>
          <ul className="mb-6">
            {results.media.map(item => (
              <li key={item.id}>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Events */}
      {results.events?.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mb-2 text-blue-800">Events</h3>
          <ul className="mb-6">
            {results.events.map(item => (
              <li key={item.id}>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* No Results */}
      {!loading && !error && Object.values(results).every(arr => arr.length === 0) && (
        <p className="text-gray-600">No matching results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
