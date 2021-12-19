import { useState, useEffect } from 'react'
import Head from "next/head"
import MovieList from "../components/MovieList"
import Favourites from '../components/Favourites'
import styles from '../styles/Home.module.scss'
import SearchBar from '../components/SearchBar'

export default function Main({ allmovies }) {
  const [ movies, setMovies ] = useState([])
  const [ searchValue, setSearchValue ] = useState("")

  const searchFunction = async (searchVal) => {
      const data = await fetch(`https://www.swapi.tech/api/films/?search=${searchVal}`)
      const json = await data.json()
      
      console.log(json)
      setMovies(json)
  }

  useEffect(() => {
    searchFunction(searchValue)
  }, [searchValue])

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
              onChange={e => setSearchValue(e.target.value)}
              placeholder="Search movies..."
          />
        </div>
        <Favourites />
        <main className={styles.body}>
          {
            searchValue === "" ? 
            <MovieList movies={allmovies}/> :
            <MovieList movies={movies}/>
          }
        </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://www.swapi.tech/api/films/`)
  const allmovies = await res.json()

  return {props: { allmovies } }
}
