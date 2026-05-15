import "./MovieCard.css";

const MovieCard = ({ movie, playTrailer }) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://dummyimage.com/500x750/1a1a1a/ffffff&text=No+Image";

  return (
    <div
      className="movie-card"
      onClick={() => playTrailer(movie.id)}
    >
      <img src={imageUrl} alt={movie.title} />

      <div className="movie-info">
        <h3>{movie.title}</h3>

        <div className="movie-details">
          <span>{movie.release_date?.slice(0, 4)}</span>

          <span>
            ⭐ {movie.vote_average?.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;