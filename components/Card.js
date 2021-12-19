import styles from "../styles/Card.module.scss";
import { useState } from "react";
import Link from "next/link";

export default function Card({ movie }) {
  const [fav, setFav] = useState(true);

  function handleClick(event) {
    event.stopPropagation();
    setFav(!fav);
  }

  return (
    <Link href="/movie/[id]" as={`/movie/${movie.uid}`}>
      <div className={styles.card}>
          <h3 className={styles.title}>{movie.properties.title}</h3>
          <h1 className={styles.divide}>. . .</h1>
          <h2 className={styles.subtitle}>
            Episode {movie.properties.episode_id}
          </h2>
        <button className={styles.favorite} onClick={handleClick}>
          {fav ? "Favourite" : "Un-Favorite"}
        </button>
      </div>
    </Link>
  );
}
