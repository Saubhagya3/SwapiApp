import styles from "../styles/Card.module.scss";

export default function Card(props) {
  return (
      <>
        <h3 className={styles.title}>{props.movie.properties.title}</h3>
        <h1 className={styles.divide}>. . .</h1>
        <h2 className={styles.subtitle}>
          Episode {props.movie.properties.episode_id}
        </h2>
        <h2 className={styles.subtitle}>Click to view more details...</h2>
      </>
  );
}
