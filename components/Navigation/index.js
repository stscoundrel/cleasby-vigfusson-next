// Components.
import LetterLink from 'components/LetterLink'
import Search from 'components/Search'

// Styles.
import styles from './Navigation.module.scss'

export default function Navigation({ letters, noSearch = false }) {
  return (
    <nav>
      <ul className={styles.list}>
        {letters.map((entry) => (
          <li className={styles.listItem} key={entry.slug}>
            <LetterLink letter={entry} />
          </li>
        ))}
      </ul>

      { !noSearch && <Search /> }
    </nav>
  )
}
