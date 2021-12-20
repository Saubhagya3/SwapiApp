import { useState, useEffect } from "react";
import Head from "next/head";
import MovieList from "../components/MovieList";
import Favourites from "../components/Favourites";
import styles from "../styles/Home.module.scss";

export default function Main({ allmovies }) {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

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

    setFavourites(movieFavourites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem(
      "swapi-app-favourites-saubhagya3",
      JSON.stringify(items)
    );
  };

  const addFavouriteMovie = (movies, e) => {
    e.stopPropagation();
    const newFavouriteList = [...favourites, movies];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movies, e) => {
    e.stopPropagation();
    const newFavouriteList = favourites.filter((fav) => fav.uid != movies.uid);

    setFavourites(newFavouriteList);
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
      <Favourites
        favs={favourites}
        handleFavouritesClicks={removeFavouriteMovie}
      />
      <main className={styles.body}>
        {searchValue === "" ? (
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

  return { props: { allmovies } };
};
