import Link from 'next/link'
import styles from './WordLink.module.scss'

export default function WordLink({ data, useLowerCase = true }) {
  const { slug, word } = data

  return (
    <Link key={`link${slug}`} href={`/word/${slug}`} className={styles.link}>
       {useLowerCase ? word.toLowerCase() : word}
     </Link>
  );
}
