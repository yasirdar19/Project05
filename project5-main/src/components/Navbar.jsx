const Navbar = ({ view, onViewChange, wishlistCount, downloadWishlist }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 gap-2 flex-wrap">
      <span className="text-sm font-medium opacity-80">View:</span>
      <div className="join">
        <button
          type="button"
          className={`join-item btn btn-sm ${view === "all" ? "btn-active" : ""}`}
          onClick={() => onViewChange("all")}
        >
          All
        </button>
        <button
          type="button"
          className={`join-item btn btn-sm ${view === "wishlist" ? "btn-active" : ""}`}
          onClick={() => onViewChange("wishlist")}
        >
          Wishlist {wishlistCount > 0 && `(${wishlistCount})`}
        </button>
        <button
          type="button"
          className={`join-item btn btn-sm ${view === "watched" ? "btn-active" : ""}`}
          onClick={() => onViewChange("watched")}
        >
          Watched
        </button>
      </div>
      <button
        type="button"
        className="btn btn-sm btn-outline ml-auto"
        disabled={wishlistCount === 0}
        onClick={downloadWishlist}
      >
        Download CSV
      </button>
    </div>
  );
};

export default Navbar;
