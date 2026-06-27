import { useEffect, useState } from "react";
import { getMovieTrailer } from "../api/tmdb";

export default function useMovieTrailer(movieId) {
  const [trailerKey, setTrailerKey] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Don't make an API call until we have a movie ID
    if (!movieId) return;

    async function fetchTrailer() {
      try {
        setLoading(true);

        const trailer = await getMovieTrailer(movieId);

        if (trailer) {
          setTrailerKey(trailer.key);
        } else {
          setTrailerKey(null);
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTrailer();
  }, [movieId]);

  return { trailerKey, loading };
}