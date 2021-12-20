import Header from "./Header";
import styles from "../styles/Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        Created by&nbsp;<strong>Saubhagya</strong>
      </footer>
    </div>
  );
}
