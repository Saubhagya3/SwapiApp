import Head from "next/head";
import MovieList from "../components/MovieList";
import Favourites from '../components/Favourites'
import styles from '../styles/Home.module.scss'

export default function Main({ movies }) {
  return (
    <div>
      <Head>
        <title>SWAPI APP</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Favourites />
      <main className={styles.body}>
        <MovieList movies={movies}/>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://www.swapi.tech/api/films/`)
  const movies = await res.json()

  return {props: { movies } }
}
