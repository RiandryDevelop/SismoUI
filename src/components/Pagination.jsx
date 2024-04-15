import PropTypes from 'prop-types';

function Pagination({ setCurrentPage, totalPages, currentPage }) {
  
  const handleClick = (page) => {
    if (currentPage < 1 && currentPage === 0) {
      setCurrentPage(totalPages);
    } else if (currentPage > totalPages) {
     setCurrentPage(1) 
    }
    else {
      setCurrentPage(page);
    }
  };

  const pages = Array.from({ length: totalPages > 5 ? 5 : totalPages }, (_, index) => index + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-base h-10">
        <li>
          <button onClick={() => handleClick(--currentPage)} className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <button onClick={() => handleClick(page)} className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 ${currentPage === page ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`}>{page}</button>
          </li>
        ))}
        <li>
          <button onClick={() => handleClick(++currentPage)} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
        </li>
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
}

export default Pagination;
