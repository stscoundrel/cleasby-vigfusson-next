import { useState } from 'react'
import styles from './Hamburger.module.scss'

export default function Hamburger({ action }) {
  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => {
    setIsOpen(!isOpen)
    action()
  }

  const getHamburgerClass = () => {
    if (isOpen) {
      return `${styles.hamburger} ${styles.open}`
    }

    return styles.hamburger
  }

  return (
    <div role="button" aria-label="Open menu" className={getHamburgerClass()} onClick={() => openMenu()}>
        <span className={styles.part} />
        <span className={styles.part} />
        <span className={styles.part} />
    </div>
  )
}
