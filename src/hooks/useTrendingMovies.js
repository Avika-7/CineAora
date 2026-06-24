
import { useEffect, useState } from "react";
import { getTrendingMovies } from "../api/tmdb";


export default function useTrendingMovies(){
  
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Runs only on first render
  useEffect(() => {

    async function fetchTrendingMovies() {
      try {
        const data = await getTrendingMovies();
        setTrendingMovies(data);

      } catch (error) {
        console.error("Error fetching trending movies!", error);

      } finally {
        setLoading(false);
      }
    }

    fetchTrendingMovies();
  }, []);

  return { trendingMovies, loading };

}