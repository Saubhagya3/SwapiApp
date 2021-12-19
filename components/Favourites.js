import styles from '../styles/Home.module.scss'

export default function Favourites () {
    return(
        <div className={styles.favourites}>
            <h1 className={styles.favouritesTitle}>Favourites</h1>
            <main className={styles.favouritesBody}>
                Your favourites list is empty.
            </main>
        </div>
        
    )
}