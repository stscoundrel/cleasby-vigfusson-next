import styles from './LetterHeader.module.scss'

export default function LetterLink({ letter, count }) {
  return (
   <header className={styles.section}>
    <h1 className={styles.title}>Letter {letter.toUpperCase()}</h1>
    <small className={styles.count}>Total of {count} words</small>
    <p>Old Norse words starting with letter {letter.toUpperCase()}</p>
  </header>
  )
}