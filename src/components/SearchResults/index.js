import SearchTeaser from './SearchTeaser'
import styles from './SearchResults.module.scss'

export default function SearchResults({ words }) {
  return (
    <ul className={styles.list}>
      { words.map((word) => (
        <li key={word.slug}>
          <SearchTeaser data={word} />
        </li>
      )) }
    </ul>
  )
}
