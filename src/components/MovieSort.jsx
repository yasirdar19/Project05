const MovieSort = ({ sortBy, onSortChange }) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="label-text text-xs">Sort:</span>
      <select
        className="select select-bordered select-sm w-44"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="year">Year (newest)</option>
        <option value="title">Title A–Z</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default MovieSort;
