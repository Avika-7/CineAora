import { useWatchlist } from "../../context/WatchlistContext";

function WatchlistButton({ movie, removeMode = false, className="" }) {
  const { isInWatchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();

  const added = isInWatchlist(movie.id);

  const handleClick = (e) => {
    e.preventDefault();

    if (removeMode) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie);
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {removeMode ? "⨯ Remove" : added ? "✓ Added" : "+ Watchlist"}
    </button>
  );
}

export default WatchlistButton;
