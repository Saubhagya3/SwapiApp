
import styles from '../styles/Home.module.scss'

export default function SearchBar(props) {
    return(
        <>
            <input
                className={styles.search}
                value={props.searchValue}
                onChange={e => props.setSearchValue(e.target.value)}
                placeholder="Search movies..."
            />
        </>
    )
}