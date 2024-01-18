import { useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import NumResults from "./NumResults";
import ListBox from "./ListBox"
import WatchedBox from "./WatchedBox"
import MainContainer from "./MainContainer";
import MovieList from "./MovieList"
import { tempMovieData } from "./utils";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <Navbar>
        <Search />
        <NumResults movies={movies} />
      </Navbar>
      <MainContainer>
        <ListBox>
          <MovieList movies={movies} />
        </ListBox>
        <WatchedBox />
      </MainContainer>
    </>
  );
}
