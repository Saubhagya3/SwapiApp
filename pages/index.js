import { useState, useEffect } from "react";
import Head from "next/head";
import MovieList from "../components/MovieList";
import Favourites from "../components/Favourites";
import styles from "../styles/Home.module.scss";

export default function Main({ allmovies }) {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favies, setFavies] = useState([]);

  const searchFunction = async (searchVal) => {
    const data = await fetch(
      `https://www.swapi.tech/api/films/?search=${searchVal}`
    );
    const json = await data.json();

    setMovies(json);
  };

  useEffect(() => {
    searchFunction(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("swapi-app-favourites-saubhagya3")
    );
    movieFavourites !== null ? setFavies(movieFavourites) : setFavies([]);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem(
      "swapi-app-favourites-saubhagya3",
      JSON.stringify(items)
    );
  };

  const addFavouriteMovie = (movies, e) => {
    e.stopPropagation();
    console.log("Index movies", movies);
    let found = favies.some((item) => item.uid === movies.uid);
    console.log(found);
    if (found) {
      alert(
        "Oops! This movie is already in your favourites. Please select another movie."
      );
    } else {
      const newFavouriteList = [...favies, movies];
      setFavies(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
    }
  };

  const removeFavouriteMovie = (movies, e) => {
    e.stopPropagation();
    const newFavouriteList = favies.filter((fav) => fav.uid != movies.uid);

    setFavies(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div>
      <Head>
        <title>SWAPI APP</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.searchbox}>
        <input
          className={styles.search}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search movies..."
        />
      </div>
      <Favourites favs={favies} handleFavouritesClicks={removeFavouriteMovie} />
      <main className={styles.body}>
        {searchValue === "" || searchValue === null ? (
          <MovieList
            movies={allmovies}
            handleFavouritesClicks={addFavouriteMovie}
          />
        ) : (
          <MovieList
            movies={movies}
            handleFavouritesClicks={addFavouriteMovie}
          />
        )}
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://www.swapi.tech/api/films/`);
  const allmovies = await res.json();

  return { props: 
              { 
                allmovies: allmovies
              } 
          };
};
