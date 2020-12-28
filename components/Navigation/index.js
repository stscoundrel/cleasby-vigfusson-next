import { useState } from 'react'

// Components.
import Hamburger from 'components/Hamburger'
import LetterLink from 'components/LetterLink'
import Search from 'components/Search'

// Styles.
import styles from './Navigation.module.scss'

export default function Navigation({ letters, noSearch = false }) {
  const [isOpen, setIsOpen] = useState(false)

  const openNav = () => {
    setIsOpen(!isOpen)
  }

  const getOpenClass = () => (isOpen ? styles.opened : null)

  return (
    <nav className={styles.section}>
      <div className={`${styles.topbar} container`}>
        <Hamburger action={openNav} />
      </div>
      <div className={`${styles.content} ${getOpenClass()} container`}>
        <ul className={styles.list}>
          {letters.map((entry) => (
            <li className={styles.listItem} key={entry.slug}>
              <LetterLink letter={entry} />
            </li>
          ))}
        </ul>
        { !noSearch && <Search /> }
      </div>
    </nav>
  )
}
