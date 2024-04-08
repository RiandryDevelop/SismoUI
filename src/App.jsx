import React, { useState, useEffect } from 'react';
import MagFilter from './components/MagFilter';
import ListFeatures from './components/ListFeatures';
import Pagination from './components/Pagination';

const App = () => {
  const [features, setFeatures] = useState([]);
  const [filteredMagType, setFilteredMagType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    fetchFeatures();
  }, [currentPage, perPage, filteredMagType]);

  const fetchFeatures = async () => {
    let url = `http://127.0.0.1:3000/api/features?page=${currentPage}&per_page=${perPage}`;
    if (filteredMagType) {
      url += `&mag_type[]=${filteredMagType}`;
    }

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/vnd.api+json',
        'Cache-Control': 'no-cache'
      }
    });
    const data = await response.json();
    console.log(data);
    setFeatures(data.data);
  };

  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sismo App</h1>
      {/* Filtro de tipo de magnitud */}
      <MagFilter filteredMagType={filteredMagType}
                 setFilteredMagType={setFilteredMagType}  
                 />
      {/* Lista de features */}
      <ListFeatures features={features}/>

      {/* Paginación */}
      <Pagination />
    </div>
  );
};

export default App;
