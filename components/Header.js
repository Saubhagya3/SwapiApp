import styles from "../styles/Header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <h1 className={styles.title}>Star Wars Movies</h1>
      </Link>
    </nav>
  );
}
