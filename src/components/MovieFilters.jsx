const MovieFilters = ({ filters, onFilterChange, genreOptions, ageGroupOptions, yearOptions }) => {
  return (
    <div className="flex flex-wrap gap-3 items-end mb-4">
      <div className="form-control w-28">
        <label className="label py-0"><span className="label-text text-xs">Age</span></label>
        <select
          className="select select-bordered select-sm w-full"
          value={filters.ageGroup}
          onChange={(e) => onFilterChange({ ...filters, ageGroup: e.target.value })}
        >
          <option value="All">All</option>
          {ageGroupOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>
      <div className="form-control w-32">
        <label className="label py-0"><span className="label-text text-xs">Genre</span></label>
        <select
          className="select select-bordered select-sm w-full"
          value={filters.genre}
          onChange={(e) => onFilterChange({ ...filters, genre: e.target.value })}
        >
          <option value="All">All</option>
          {genreOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>
      <div className="form-control w-24">
        <label className="label py-0"><span className="label-text text-xs">Year</span></label>
        <select
          className="select select-bordered select-sm w-full"
          value={filters.year}
          onChange={(e) => onFilterChange({ ...filters, year: e.target.value })}
        >
          <option value="All">All</option>
          {yearOptions.map((y) => <option key={y} value={y}>{y}</option>)}
        </select>
      </div>
    </div>
  );
};

export default MovieFilters;
