import React, { useState } from 'react';

function Pagination({ setCurrentPage, totalPages }) {
  const [currentPage, setCurrentPageLocal] = useState(1);

  const handleClick = (page) => {
    setCurrentPageLocal(page);
    setCurrentPage(page);
  };

  // Genera un array de números desde 1 hasta totalPages
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-base h-10">
        <li>
          <button onClick={() => handleClick(currentPage - 1)} className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
        </li>
        {/* Renderizar los botones de paginación */}
        {pages.map((page) => (
          <li key={page}>
            <button onClick={() => handleClick(page)} className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 ${currentPage === page ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`}>{page}</button>
          </li>
        ))}
        <li>
          <button onClick={() => handleClick(currentPage + 1)} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
