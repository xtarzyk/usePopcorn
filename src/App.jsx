import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import NumResults from "./NumResults";
import Box from "./Box";
import MainContainer from "./MainContainer";
import MovieList from "./MovieList";
import WatchedSummary from "./WatchedSummary";
import WatchedMovieList from "./WatchedMovieList";
import { tempMovieData, tempWatchedData, KEY } from "./utils";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true)
        setError("")
        const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`)
        if(!res.ok) throw new Error("Something went wrong with fetching movies!")
        
        const data = await res.json()
        if (data.Response === 'False') throw new Error("Movie not found.")
  
        setMovies(data.Search)
      } catch (err) {
        console.error(err.message)
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    if(query.length < 3) {
      setMovies([])
      setError("")
      return
    }

    fetchMovies()
  }, [query])
  

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>

      <MainContainer>
        <Box>
          {/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} />}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </Box>
      </MainContainer>
    </>
  );
}
