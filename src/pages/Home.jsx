import { useState, useEffect } from 'react';
import EventFeaturesList from '../components/events/EventFeaturesList';
import Pagination from '../components/events/Pagination';
import MagnitudeFilter from '../components/events/MagnitudeFilter';

const Home = () => {
  const [features, setFeatures] = useState([]);
  const [filteredMagType, setFilteredMagType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage,] = useState(20);
  const [totalPages, setTotalPages] = useState(1); 

  const API = import.meta.env.VITE_FEATURE_API_URL;

  useEffect(() => {
    fetchFeatures();
  }, [currentPage, perPage, filteredMagType]);

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

    const totalItems =  dataFeatures.pagination.total;
    const itemsPerPage = dataFeatures.pagination.per_page;
    const totalPagesFromAPI = Math.ceil(totalItems / itemsPerPage);
    setTotalPages(totalPagesFromAPI);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-8 ">
        <MagnitudeFilter filteredMagType={filteredMagType} setFilteredMagType={setFilteredMagType} />
      </div>
      <Pagination setCurrentPage={setCurrentPage}  totalPages={totalPages} currentPage={currentPage}/>
      <EventFeaturesList features={features} filteredMagType={filteredMagType}/>
      <Pagination setCurrentPage={setCurrentPage}  totalPages={totalPages} currentPage={currentPage}/>
      <h1>Current Page: {currentPage}</h1>
    </div>
  );
};

export default Home;
