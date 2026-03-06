import { toast } from "react-toastify";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const MovieCard = ({
  movie,
  isWishlisted,
  isWatched,
  reaction,
  onToggleWishlist,
  onToggleWatched,
  onReaction,
}) => {
  const { title, director, releasing_year, short_description, genre, age_group, imdb_rating } = movie;

  const handleLike = () => {
    const next = reaction === "like" ? null : "like";
    onReaction(movie.title, next);
    toast.success(next ? "Liked" : "Like removed");
  };

  const handleDislike = () => {
    const next = reaction === "dislike" ? null : "dislike";
    onReaction(movie.title, next);
    toast.success(next ? "Disliked" : "Dislike removed");
  };

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
        <div className="card-actions justify-end mt-2 flex-wrap gap-1">
          <button
            type="button"
            className={`btn btn-sm btn-ghost ${reaction === "like" ? "btn-active" : ""}`}
            onClick={handleLike}
            aria-label="Like"
          >
            <FaThumbsUp />
          </button>
          <button
            type="button"
            className={`btn btn-sm btn-ghost ${reaction === "dislike" ? "btn-active" : ""}`}
            onClick={handleDislike}
            aria-label="Dislike"
          >
            <FaThumbsDown />
          </button>
          <button
            type="button"
            className={`btn btn-sm ${isWishlisted ? "btn-error" : "btn-ghost"}`}
            onClick={() => {
              onToggleWishlist(movie.title);
              toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist");
            }}
          >
            Wishlist
          </button>
          <button
            type="button"
            className={`btn btn-sm ${isWatched ? "btn-success" : "btn-ghost"}`}
            onClick={() => {
              onToggleWatched(movie.title);
              toast.success(isWatched ? "Removed from watched" : "Marked as watched");
            }}
          >
            Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
