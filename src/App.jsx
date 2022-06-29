import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?apikey=c032e2d7";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(movies);
    // console.log(data.Search);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const findHandler = () => {
    console.log("cek");
    searchMovies(search);
    setSearch("");
  };

  useEffect(() => {
    searchMovies("avengers");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={search}
          onChange={searchHandler}
        />
        <img src={SearchIcon} alt="search-ic" onClick={findHandler} />
      </div>

      <div className="container">
        {movies?.length > 0 ? (
          movies.map((movie, index) => {
            return <MovieCard key={index} movies={movie} />;
          })
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
