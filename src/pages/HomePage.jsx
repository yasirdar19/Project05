import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useMovies } from "../hooks/useMovies";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";

// Read-only card shown to guest users — no interaction buttons
const GuestMovieCard = ({ movie }) => {
  const { title, director, releasing_year, short_description, genre, age_group, imdb_rating } = movie;
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body p-4">
        <div className="flex gap-2 flex-wrap">
          <span className="badge badge-primary badge-sm">{genre}</span>
          <span className="badge badge-outline badge-sm">{age_group}</span>
          <span className="badge badge-ghost badge-sm">{releasing_year}</span>
        </div>
        <h2 className="card-title text-base">{title}</h2>
        <p className="text-sm opacity-80">{director}</p>
        <p className="text-sm">{short_description}</p>
        <p className="text-xs opacity-70">IMDB: {imdb_rating}</p>
        <div className="card-actions justify-end mt-2">
          <span className="text-xs opacity-50 italic">Sign in to interact</span>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const { user } = useAuth();
  const { movies, loading } = useMovies();

  // Show only the first 6 movies as a preview for guests
  const featured = movies.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <TopNav />

      <main className="flex-1">
        {/* Featured movies preview */}
        <section className="py-8 px-4 container mx-auto">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <h2 className="text-2xl font-bold">Featured Movies</h2>
            {!user && (
              <span className="badge badge-warning">
                Guest preview — sign up for full access
              </span>
            )}
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <span className="loading loading-spinner loading-lg text-primary" aria-label="Loading" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featured.map((movie, i) => (
                <GuestMovieCard key={`${movie.title}-${i}`} movie={movie} />
              ))}
            </div>
          )}

          {!user && !loading && (
            <div className="text-center mt-8">
              <p className="text-sm opacity-70 mb-3">
                Showing 6 of {movies.length} movies
              </p>
              <Link to="/signup" className="btn btn-primary">
                Sign Up to See All {movies.length} Movies
              </Link>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
