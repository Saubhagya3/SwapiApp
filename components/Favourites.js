import styles from "../styles/Favourites.module.scss";
import Link from "next/link";

export default function Favourites(props) {
  return (
    <div className={styles.favourites}>
      <h1 className={styles.favouritesTitle}>Favourites &#8699;</h1>
      <main className={styles.favouritesBody}>
        {props.favs.length === 0 ? (
          <p>Your favourites list is empty.</p>
        ) : (
          props.favs.map((movie) => {
            return (
              <Link
                href="/movie/[id]"
                as={`/movie/${movie.uid}`}
                key={movie.uid}
              >
                <div className={styles.card}>
                  <h3 className={styles.title}>{movie.properties.title}</h3>
                  <h1 className={styles.divide}>. . .</h1>
                  <h2 className={styles.subtitle}>
                    Click to view more details...
                  </h2>
                  <button
                    className={styles.favorite}
                    onClick={(e) => props.handleFavouritesClicks(movie, e)}
                  >
                    Remove
                  </button>
                </div>
              </Link>
            );
          })
        )}
      </main>
    </div>
  );
}
