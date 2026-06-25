// only TMDB communication, no React

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",

  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
  },
});

// SEARCH MOVIES
export const searchMovies = async (query) => {
  const response = await api.get("/search/movie", {
    params: {
      query,
    },
  });

  return response.data.results || [];
};

// TRENDING MOVIES
export const getTrendingMovies = async () => {
  const response = await api.get("/trending/movie/week");

  return response.data.results || [];
};

// MOVIE DETAILS
export const getMovieDetails = async (id) => {
  const response = await api.get(`/movie/${id}`);

  return response.data;
};

// GENRE MOVIES
export const getMoviesByGenre = async (id) => {
  const response = await api.get("/discover/movie", {
    params: {
      with_genres: id,
    },
  });

  return response.data.results || [];
};
// //only TMDB communication, no react

// import axios from "axios";

// const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// const api = axios.create({
//   baseURL: "https://api.themoviedb.org/3",
// });

// //SEARCH MOVIES BASED ON QUERY
// export const searchMovies = async (query) => {
//   const response = await api.get(
//     `/search/movie?api_key=${API_KEY}&query=${query}`,
//   );

//   return response.data.results || [];
// };

// //GET TRENDING MOVIES FOR HERO SECTION AND EMPTY SEARCH
// export const getTrendingMovies = async () => {
//   const response = await api.get(`/trending/movie/week?api_key=${API_KEY}`);

//   return response.data.results || [];
// };

// //GET MOVIE DETAILS FOR EACH MOVIE ACCORDING TO ITS ID
// export const getMovieDetails = async (id) => {
//   const response = await api.get(`/movie/${id}?api_key=${API_KEY}`);

//   return response.data;
// };

// // MOVIES BY GENRE
// // MOVIES BY GENRE
// export async function getMoviesByGenre(id) {

//   const response = await api.get("/discover/movie", {
//     params: {
//       api_key: API_KEY,
//       with_genres: id,
//     },
//   });

//   return response.data.results || [];
// }
