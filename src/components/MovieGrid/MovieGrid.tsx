import type { Movie } from "../../types/movie";
import css from "./MovieGrid.module.css";

interface MovieProps {
  movies: Movie[];
  setMovie: (movie: Movie) => void;
  onOpen: () => void;
}

export function MovieGrid({ movies, setMovie, onOpen }: MovieProps) {
  const handleClick = (movie: Movie) => {
    if (movie) {
      setMovie(movie);
    }
  };

  return (
    <ul className={css.grid}>
      {movies.map((movie) => (
        <li key={movie.id} onClick={() => handleClick(movie)}>
          <div className={css.card} onClick={onOpen}>
            <img
              className={css.image}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              loading="lazy"
            />
            <h2 className={css.title}>{movie.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}
