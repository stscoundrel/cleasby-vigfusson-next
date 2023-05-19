import Link from 'next/link'
import styles from './LetterLink.module.scss'

export default function LetterLink({ letter }) {
  return (
    <Link
      href={`/letter/${letter.slug}`}
      className={styles.link}
      prefetch={false}
    >
       {letter.letter}
     </Link>
  );
}
