import  { useState, useEffect } from 'react';
import MagFilter from './components/MagFilter';
import FeaturesList from './components/FeaturesList';
import Pagination from './components/Pagination';
import PerPageFilter from './components/PerPageFilter';


const App = () => {
  const [features, setFeatures] = useState([]);
  const [filteredMagType, setFilteredMagType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1); 

  const API = import.meta.env.VITE_FEATURE_API_URL;

  useEffect(() => {
    fetchFeatures();
  }, [currentPage, perPage, filteredMagType]);


  useEffect(() => {
    setTotalPages(Math.ceil(features.length / perPage));
  }, [features, perPage]);

  const fetchFeatures = async () => {
    let urlFeatures = `${API}features?page=${currentPage}&per_page=${perPage}`;
    const responseFeatures = await fetch(urlFeatures, {
      headers: {
        'Content-Type': 'application/vnd.api+json',
        'Cache-Control': 'no-cache'
      }
    });

    const dataFeatures = await responseFeatures.json();
    setFeatures(dataFeatures.data);

    const totalItems = dataFeatures.pagination.total;
    const itemsPerPage = dataFeatures.pagination.per_page;
    const totalPagesFromAPI = Math.ceil(totalItems / itemsPerPage);
    setTotalPages(totalPagesFromAPI);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sismo App</h1>
      <h1>Current Page: {currentPage}</h1>
      <div className="flex gap-8 ">
      <MagFilter filteredMagType={filteredMagType} setFilteredMagType={setFilteredMagType} />
      <PerPageFilter perPage={perPage} setPerPage={setPerPage} />
      </div>
      <FeaturesList features={features} filteredMagType={filteredMagType}/>
      <Pagination setCurrentPage={setCurrentPage}  totalPages={totalPages} currentPage={currentPage}/>
    </div>
  );
};

export default App;
