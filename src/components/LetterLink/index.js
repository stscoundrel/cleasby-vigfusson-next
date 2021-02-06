import Link from 'next/link'
import styles from './LetterLink.module.scss'

export default function LetterLink({ letter }) {
  return (
   <Link href={`/letter/${letter.slug}`}>
      <a className={styles.link}>{letter.letter}</a>
    </Link>
  )
}
