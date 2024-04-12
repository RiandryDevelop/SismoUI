import PropTypes from 'prop-types';
function MagFilter({ filteredMagType, setFilteredMagType }) {
  return (
    <div className="mb-4">
      <select
        value={filteredMagType}
        onChange={(e) => setFilteredMagType(e.target.value)}
        className="border border-gray-300 p-2 rounded"
      >
        <option value="">All Magnitude Types</option>
        <option value="md">MD</option>
        <option value="ml">ML</option>
        <option value="ms">MS</option>
        <option value="mw">MW</option>     
      </select>
    </div>
  );
}

MagFilter.propTypes = {
  filteredMagType: PropTypes.string.isRequired,
  setFilteredMagType: PropTypes.func.isRequired,
}

export default MagFilter;
