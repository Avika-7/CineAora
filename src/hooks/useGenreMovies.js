import { useEffect, useState } from "react";
import { getMoviesByGenre } from "../api/tmdb";
import { genres } from "../utils/genres";

export default function useGenreMovies() {
  const [genreMovies, setGenreMovies] = useState({});

  useEffect(() => {
    async function fetchGenres() {
      try {
        const data = {};

        for (const genre of genres) {
          const movies = await getMoviesByGenre(genre.id);

          data[genre.name] = movies;
        }

        setGenreMovies(data);
      } catch (error) {
        console.error("Genre fetch failed:", error);
      }
    }

    fetchGenres();
  }, []);

  return genreMovies;
}
