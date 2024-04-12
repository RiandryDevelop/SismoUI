import propTypes from 'prop-types';

function PerPageFilter({ perPage, setPerPage }) {
  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setPerPage(value);
  };

  return (
    <div className='flex gap-2'>
      <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">Per Page:</label>
      <div className="relative mt-2">
        <select
          id="perPage"
          value={perPage}
          onChange={handleChange}
          className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
          aria-labelledby="listbox-label"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
    </div>
  );
}

PerPageFilter.propTypes = {
  perPage: propTypes.number.isRequired,
  setPerPage: propTypes.func.isRequired
}

export default PerPageFilter;
