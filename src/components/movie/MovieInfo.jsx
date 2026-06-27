
import WatchlistButton from "../common/WatchlistButton";
import { useWatchlist } from "../../context/WatchlistContext";
import TrailerButton from "./TrailerButton";

export default function MovieInfo({
    movie,
    onTrailerClick,
}) {
  const { isInWatchlist, addToWatchlist } = useWatchlist();
  const added = isInWatchlist(movie.id);

  return (
    <>
      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 -mt-45 relative z-10">
        <div className="flex flex-row flex-wrap gap-8">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="
            w-50
            sm:w-80
            h-full
            aspect-2/3
            rounded-xl
            shadow-2xl

            "
          />

          <div className="flex-1">
            <h1
              className="
              text-5xl
              font-bold
              text-[#e0aaff]
              mb-4
              "
            >
              {movie.title}
            </h1>

            <div className="flex flex-wrap gap-4 mb-6">
              <span className="text-[#ffcc00]">
                ⭐ {movie.vote_average?.toFixed(1)}
              </span>

              <span>{movie.release_date}</span>

              <span>{movie.runtime} min</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {movie.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="
                  px-3
                  py-1
                  rounded-full
                  bg-[#3c096c]
                  text-sm
                  "
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <h2
              className="
              text-2xl
              font-semibold
              text-[#ffcc00]
              mb-3
              "
            >
              Overview
            </h2>

            <p className="text-gray-300 leading-relaxed">{movie.overview}</p>

            <div className="my-4">
              <WatchlistButton movie={movie} className="m-1 px-6 py-3 rounded-full  bg-[#f9a825] text-[#10002b] font-semibold hover:scale-105 transition cursor-pointer"/>
            <TrailerButton
                onClick={onTrailerClick}
            />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
