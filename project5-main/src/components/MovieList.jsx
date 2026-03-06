import MovieCard from "./MovieCard";

const MovieList = ({ movies, wishlist, watched, reactions, onToggleWishlist, onToggleWatched, onReaction, onClearFilters }) => {
  if (movies.length === 0) {
    return (
      <div className="alert alert-info">
        <span>No movie found. Try other filters or view.</span>
        {onClearFilters && (
          <button type="button" className="btn btn-sm" onClick={onClearFilters}>Clear filters</button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.map((movie, i) => (
        <MovieCard
          key={`${movie.title}-${movie.releasing_year}-${i}`}
          movie={movie}
          isWishlisted={wishlist.has(movie.title)}
          isWatched={watched.has(movie.title)}
          reaction={reactions?.[movie.title]}
          onToggleWishlist={onToggleWishlist}
          onToggleWatched={onToggleWatched}
          onReaction={onReaction}
        />
      ))}
    </div>
  );
};

export default MovieList;
