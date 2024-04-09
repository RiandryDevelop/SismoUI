import React, { useState, useEffect } from 'react';
import MagFilter from './components/MagFilter';
import ListFeatures from './components/ListFeatures';
import Pagination from './components/Pagination';


const App = () => {
  const [features, setFeatures] = useState([]);
  const [filteredMagType, setFilteredMagType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
const FeatureAPI = import.meta.env.VITE_FEATURE_API_URL;
  useEffect(() => {
    fetchFeatures();
  }, [currentPage, perPage, filteredMagType]);

  const fetchFeatures = async () => {
    let url = `${FeatureAPI}?page=${currentPage}&per_page=${perPage}`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/vnd.api+json',
        'Cache-Control': 'no-cache'
      }
    });
    const data = await response.json();
    setFeatures(data.data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sismo App</h1>
      <MagFilter filteredMagType={filteredMagType} setFilteredMagType={setFilteredMagType} />
      <ListFeatures features={features} filteredMagType={filteredMagType} />
      <Pagination />
    </div>
  );
};

export default App;
