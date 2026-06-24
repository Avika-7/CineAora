import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div
        className="
        relative
        rounded-xl
        overflow-hidden
        bg-white/5
        backdrop-blur-sm
        border
        border-white/10
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-xl
        hover:border-[#e0aaff]/40
        hover:pb-4
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
          aspect-3/4
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
          text-[#ffcc00]/70
          font-medium
          "
          >
            {movie.release_date?.slice(0, 4)}
          </p>

          <p
            className="
          absolute
          top-1
          right-1
          bg-[#10002b]/70
          backdrop-blur-sm
          px-1
          py-1
          rounded-full
          text-xs
          font-semibold
          text-[#ffcc00]
          border
          border-[#ffcc00]/30
          "
          >
            ⭐ {movie.vote_average?.toFixed(1)}
          </p>

          <button
            className="
            absolute
            bottom-1
            left-1/2
            -translate-x-1/2
            bg-[#f9a825]
            text-[#10002b]
            mt-10
            px-2
            py-1
            w-11/12
            rounded-3xl
            text-sm
            font-semibold
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-300
            hover:scale-105
            cursor-pointer
            "
            onClick={(e) => {
              e.preventDefault();
              console.log(movie);
            }}
          >
            + My List
          </button>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
