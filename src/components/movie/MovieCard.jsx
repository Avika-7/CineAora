import { Link } from "react-router-dom";
import WatchlistButton from "../common/WatchlistButton";

function MovieCard({ movie, removeMode=false }) {

  return (
    <Link to={`/movie/${movie.id}`}>
      <div
        className="
        relative
        rounded-xl
        h-full
        flex
        flex-col
        overflow-hidden
        bg-white/5
        backdrop-blur-sm
        border
        border-white/10
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[#e0aaff]
        hover: shadow-sm
        group
        "
      >
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://placehold.co/500x750?text=No+Poster"
          }
          alt={movie.title}
          className="
          w-full
          aspect-2/3
          object-cover
          "
        />

        <div />
        <div className="px-4">
          <h3
            className="
            pt-3
            font-bold
            text-white
            line-clamp-2
            "
          >
            {movie.title}
          </h3>

          <p
            className="
          pb-4
          text-[#e0aaff]/70
          font-medium
          "
          >
            {movie.release_date?.slice(0, 4)}
          </p>

          <p
           className="
            absolute
            top-2
            right-2
        
            px-2.5
            py-1

            rounded-full

            bg-black/45
            backdrop-blur-lg

            border
            border-white/10

            text-[#ffcc00]
            text-xs
            font-semibold

            shadow-lg
            shadow-black/40
            "
          >
            ★ {movie.vote_average?.toFixed(1)}
          </p>

          <WatchlistButton movie={movie} 
            removeMode={removeMode}
            className="
            absolute
            bottom-0.5
            left-1/2
            -translate-x-1/2
            bg-[#f9a825]
            text-[#10002b]
            py-1.25
            w-11/12
            rounded-full
            text-sm
            font-semibold
            opacity-0
            group-hover:opacity-100
            group-hover: transition-opacity 
            group-hover:-translate-y-1
            duration-500
            hover:scale-105
            cursor-pointer
            "
            />

        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
