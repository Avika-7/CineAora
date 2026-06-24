
import { useParams } from "react-router-dom";

import useMovieDetails from "../hooks/useMovieDetails";
import MovieInfo from "../components/movie/MovieInfo";

export default function MovieDetails() {
  const { id } = useParams();
  const { movie, loading } = useMovieDetails(id);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#10002b] text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-[#10002b] text-white flex items-center justify-center">
        Movie not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#10002b] text-white">
      {/* Hero Backdrop */}
      <div className="relative h-[70vh] ">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="w-full h-full object-cover"
        />

        {/* <div
          className="
          absolute
          inset-0
          bg-black/60
          "
        /> */}

        {/* Fade into page background */}
        <div
          className="
          absolute
          inset-x-0
          bottom-0
          h-48
          bg-linear-to-t
          from-[#10002b]
          to-transparent
          "
        />
      </div>

      <MovieInfo movie={movie} />
    </div>
  );
}
