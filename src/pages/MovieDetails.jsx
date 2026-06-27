import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import useMovieDetails from "../hooks/useMovieDetails";
import useMovieTrailer from "../hooks/useMovieTrailer";

import MovieInfo from "../components/movie/MovieInfo";
import TrailerModal from "../components/movie/TrailerModal";

export default function MovieDetails() {
  const { id } = useParams();
  const { movie, loading } = useMovieDetails(id);
  const [showTrailer, setShowTrailer] = useState(false);

  const movieId = movie?.id;

  const { trailerKey } = useMovieTrailer(movieId);

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
      <div
        className="relative  
        h-[60vh]
        sm:h-[75vh]
        lg:h-[90vh]
        overflow-hidden"
        >
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="w-full h-full object-cover object-top"
        />

        <div
          className="
          absolute
          inset-0
          bg-black/60
          "
        />

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

      <MovieInfo movie={movie} onTrailerClick={() => setShowTrailer(true)} />

      <TrailerModal
        isOpen={showTrailer}
        onClose={() => setShowTrailer(false)}
        trailerKey={trailerKey}
      />
      
    </div>
  );
}
