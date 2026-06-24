import {useEffect,useState} from "react";

import {getMovieDetails} from "../api/tmdb";


export default function useMovieDetails(id){

  const [movie,setMovie]=useState(null);
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      
      } catch (error) {
        console.error(error);
      
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [id]);
  
  return { movie, loading };
}