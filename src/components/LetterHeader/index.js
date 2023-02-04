import styles from './LetterHeader.module.scss'

export default function LetterHeader({ letter, count }) {
  const getLetterPresentation = () => {
    if (letter === 'ö') {
      return 'ö / ǫ'.toUpperCase()
    }

    return letter.toUpperCase()
  }

  return (
   <header className={styles.section}>
    <h1 className={styles.title}>Letter {getLetterPresentation()}</h1>
    <small className={styles.subHeading}>
      Old Norse Dictionary - Letter {getLetterPresentation()}
    </small>
    <p>Old Norse words starting with letter {getLetterPresentation()}</p>

    {letter === 'ö'
        && <p>
          The Cleasby & Vigfusson book used letter <em>ö </em>
          to represent the original Old Norse vowel <em>ǫ</em>.
        </p>}

    <small className={styles.count}>Total of {count} words</small>
  </header>
  )
}
