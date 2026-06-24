//only TMDB communication, no react

import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});


//SEARCH MOVIES BASED ON QUERY
export const searchMovies = async (query) => {
  const response = await api.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`,
  );

  return response.data.results || [];
};


//GET TRENDING MOVIES FOR HERO SECTION AND EMPTY SEARCH
export const getTrendingMovies = async () => {
  const response = await api.get(`/trending/movie/week?api_key=${API_KEY}`);

  return response.data.results || [];
};


//GET MOVIE DETAILS FOR EACH MOVIE ACCORDING TO ITS ID
export const getMovieDetails = async (id) => {
  const response = await api.get(`/movie/${id}?api_key=${API_KEY}`);

  return response.data;
};

