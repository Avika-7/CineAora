
import MovieCard from "../components/movie/MovieCard";
import { useWatchlist } from "../context/WatchlistContext";
import WatchlistButton from "../components/common/WatchlistButton";

export default function Watchlist() {
  const { watchlist } = useWatchlist();

  return (
    <div
      className="
      min-h-screen
      bg-linear-to-br
      from-[#10002b]
      to-[#3c096c]
      text-white
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1
          className="
          text-5xl
          font-bold
          text-[#e0aaff]
          mb-8
          "
        >
          My Watchlist
        </h1>

        {watchlist.length === 0 ? (
          <p className="text-gray-300">No movies added yet.</p>
        ) : (
          <div
            className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            xl:grid-cols-6
            gap-6
            "
          >
            {watchlist.map((movie) => (
              <MovieCard key={movie.id} movie={movie} removeMode={true} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
