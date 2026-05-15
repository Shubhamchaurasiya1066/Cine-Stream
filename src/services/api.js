import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

// Fetch Popular Movies
export const fetchPopularMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  );

  return response.data.results;
};

// Search Movies
export const searchMovies = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );

  return response.data.results;
};

// Fetch Movie Trailer
export const fetchMovieTrailer = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
  );

  // Find any YouTube video
  const trailer = response.data.results.find(
    (video) => video.site === "YouTube"
  );

  return trailer;
};