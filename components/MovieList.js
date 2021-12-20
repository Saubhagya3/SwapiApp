import Card from "./Card"
import styles from "../styles/Card.module.scss";
import Link from "next/link";

export default function MovieList(props) {
    return(
        <>
          { props.movies.result.map((movie) => {
            return(
              <Link href="/movie/[id]" as={`/movie/${movie.uid}`} key={movie.uid}>
                <div className={styles.card}>
                  <Card movie={movie} />
                  <button className={styles.favorite} onClick={(e) => props.handleFavouritesClicks(movie, e)}>
                    {/* {fav ? "Favourite" : "Un-Favorite"}  */}
                    Favourite
                  </button>
                </div>
              </Link>
            )
          })}
        </>
    )
}