/**
 * @param {Array<{ age_group: string, genre: string, releasing_year: number }>} movies
 * @param {{ ageGroup: string, genre: string, year: string }} filters
 */
export function filterMovies(movies, filters) {
  return movies.filter((m) => {
    if (filters.ageGroup && filters.ageGroup !== "All" && m.age_group !== filters.ageGroup)
      return false;
    if (filters.genre && filters.genre !== "All" && m.genre !== filters.genre) return false;
    if (filters.year && filters.year !== "All" && m.releasing_year !== Number(filters.year))
      return false;
    return true;
  });
}

/**
 * @param {Array<{ title: string, releasing_year: number, imdb_rating: number }>} movies
 * @param {'year'|'title'|'rating'} sortBy
 */
export function sortMovies(movies, sortBy) {
  const arr = [...movies];
  if (sortBy === "year") {
    arr.sort((a, b) => (b.releasing_year ?? 0) - (a.releasing_year ?? 0));
  } else if (sortBy === "title") {
    arr.sort((a, b) => (a.title ?? "").localeCompare(b.title ?? ""));
  } else if (sortBy === "rating") {
    arr.sort((a, b) => (b.imdb_rating ?? 0) - (a.imdb_rating ?? 0));
  }
  return arr;
}
