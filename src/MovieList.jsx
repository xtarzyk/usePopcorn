import { useState } from "react";
import { tempMovieData } from "./utils";
import Movie from "./Movie";

function MovieList() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <ul className="list">
          {movies?.map((movie) => (
            <Movie movie={movie} key={movie.imdbID} />
          ))}
        </ul>
  )
}

export default MovieList
