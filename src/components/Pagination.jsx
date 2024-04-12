import propTypes from 'prop-types';

function Pagination({ setCurrentPage, totalPages, currentPage }) {
  
  const handleClick = (page) => {
    if(page <= 1){
      setCurrentPage(totalPages);
    }else{
      setCurrentPage(page);
    }
  };

  
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-base h-10">
        <li>
          <button onClick={() => handleClick(currentPage - 1)} className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
        </li>
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

Pagination.propTypes = {
  setCurrentPage: propTypes.func.isRequired,
  totalPages: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired
}

export default Pagination;
