import { useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import NumResults from "./NumResults";
import Box from "./Box";
import MainContainer from "./MainContainer";
import MovieList from "./MovieList";
import WatchedSummary from "./WatchedSummary";
import WatchedMovieList from "./WatchedMovieList";
import { tempMovieData, tempWatchedData } from "./utils";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <Navbar>
        <Search />
        <NumResults movies={movies} />
      </Navbar>
      <MainContainer>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </Box>
      </MainContainer>
    </>
  );
}
