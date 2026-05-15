import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import TrailerModal from "../components/TrailerModal";

import "./Home.css";

import {
  fetchPopularMovies,
  searchMovies,
  fetchMovieTrailer,
} from "../services/api";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  // Trailer State
  const [trailerKey, setTrailerKey] = useState(null);

  // Popular Movies Fetch
  const getPopularMovies = async () => {
    try {
      setLoading(true);

      const data = await fetchPopularMovies();

      setMovies(data);
    } catch (error) {
      console.log("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  // Search Movies
  const handleSearch = async () => {
    if (!search.trim()) {
      getPopularMovies();
      return;
    }

    try {
      setLoading(true);

      const data = await searchMovies(search);

      setMovies(data);
    } catch (error) {
      console.log("Search error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Play Trailer
  const playTrailer = async (movieId) => {
    try {
      const trailer = await fetchMovieTrailer(movieId);

      if (trailer) {
        setTrailerKey(trailer.key);
      } else {
        alert("Trailer not available");
      }
    } catch (error) {
      console.log("Trailer error:", error);
    }
  };

  // Initial Load
  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <div className="home">
      <Navbar />

      <div className="hero-section">
        <h1>Unlimited Movies, TV Shows & More</h1>

        <p>
          Discover trending entertainment from around the world.
        </p>

        <SearchBar
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
      </div>

      {loading ? (
        <h2 className="loading">Loading...</h2>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              playTrailer={playTrailer}
            />
          ))}
        </div>
      )}

      {/* Trailer Modal */}
      {trailerKey && (
        <TrailerModal
          trailerKey={trailerKey}
          closeModal={() => setTrailerKey(null)}
        />
      )}
    </div>
  );
};

export default Home;