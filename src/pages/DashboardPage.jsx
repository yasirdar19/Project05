import { useState } from "react";
import { toast } from "react-toastify";
import { useMovies } from "../hooks/useMovies";
import { filterMovies, sortMovies } from "../utils/filterSort";
import TopNav from "../components/TopNav";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieFilters from "../components/MovieFilters";
import MovieSort from "../components/MovieSort";
import MovieList from "../components/MovieList";

const defaultFilters = { ageGroup: "All", genre: "All", year: "All" };

const clearFilters = (setFilters) => () => setFilters(defaultFilters);

const DashboardPage = () => {
  const { movies, loading, error } = useMovies();
  const [view, setView] = useState("all");
  const [wishlist, setWishlist] = useState(() => new Set());
  const [watched, setWatched] = useState(() => new Set());
  const [reactions, setReactions] = useState(() => ({}));
  const [filters, setFilters] = useState(defaultFilters);
  const [sortBy, setSortBy] = useState("year");

  const setReaction = (title, value) => {
    setReactions((prev) => ({ ...prev, [title]: value }));
  };

  const toggleWishlist = (title) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  };

  const toggleWatched = (title) => {
    setWatched((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  };

  const downloadWishlist = () => {
    const wishlistMovies = movies.filter((m) => wishlist.has(m.title));
    if (wishlistMovies.length === 0) {
      toast.info("Wishlist is empty");
      return;
    }
    const headers = [
      "title",
      "director",
      "releasing_year",
      "genre",
      "age_group",
      "language",
      "runtime",
      "imdb_rating",
      "budget",
      "short_description",
    ];
    const row = (m) =>
      headers
        .map((h) => {
          const v = String(m[h] ?? "");
          return v.includes(",") || v.includes('"') ? `"${v.replace(/"/g, '""')}"` : v;
        })
        .join(",");
    const csv = [headers.join(","), ...wishlistMovies.map(row)].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "wishlist.csv";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Wishlist downloaded");
  };

  const genreOptions = [...new Set(movies.map((m) => m.genre).filter(Boolean))].sort();
  const ageGroupOptions = [...new Set(movies.map((m) => m.age_group).filter(Boolean))].sort();
  const yearOptions = [...new Set(movies.map((m) => m.releasing_year))].filter(Boolean).sort((a, b) => b - a);

  let displayMovies = movies;
  if (view === "wishlist") displayMovies = movies.filter((m) => wishlist.has(m.title));
  else if (view === "watched") displayMovies = movies.filter((m) => watched.has(m.title));
  displayMovies = filterMovies(displayMovies, filters);
  displayMovies = sortMovies(displayMovies, sortBy);

  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <TopNav />
      <Navbar
        view={view}
        onViewChange={setView}
        wishlistCount={wishlist.size}
        downloadWishlist={downloadWishlist}
      />
      <main className="flex-1 container mx-auto p-4">
        {loading && (
          <div className="flex justify-center items-center min-h-[200px]">
            <span className="loading loading-spinner loading-lg text-primary" aria-label="Loading" />
          </div>
        )}
        {error && (
          <div className="alert alert-error">
            <span>Failed to load movies.</span>
          </div>
        )}
        {!loading && !error && movies.length > 0 && (
          <>
            <MovieFilters
              filters={filters}
              onFilterChange={setFilters}
              genreOptions={genreOptions}
              ageGroupOptions={ageGroupOptions}
              yearOptions={yearOptions}
            />
            <MovieSort sortBy={sortBy} onSortChange={setSortBy} />
            <MovieList
              movies={displayMovies}
              wishlist={wishlist}
              watched={watched}
              reactions={reactions}
              onToggleWishlist={toggleWishlist}
              onToggleWatched={toggleWatched}
              onReaction={setReaction}
              onClearFilters={clearFilters(setFilters)}
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
