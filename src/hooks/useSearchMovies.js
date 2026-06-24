import { useEffect, useState } from "react";
import { searchMovies } from "../api/tmdb";

export default function useSearchMovies(debouncedSearchTerm, trendingMovies) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // Runs when debouncedSearchTerm change
  useEffect(() => {

    async function fetchMovies() {

      // EMPTY SEARCH → TRENDING
      if (!debouncedSearchTerm.trim()) {
        setMovies(trendingMovies);
        return;
      }

      // SEARCH
      try {
        setLoading(true);
        const data = await searchMovies(debouncedSearchTerm);
        setMovies(data);

      } catch (error) {
        console.error("Error in fetching movies!", error);

      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [debouncedSearchTerm]);

  useEffect(()=>{

    if(!searchTerm.trim()){

      setMovies(trendingMovies);

    }

  },[trendingMovies]);

  return { movies, loading };
  
}
