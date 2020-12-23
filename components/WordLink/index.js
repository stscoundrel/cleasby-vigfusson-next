import Link from 'next/link'
import styles from './WordLink.module.scss'

export default function WordLink({ data }) {
  const { slug, word } = data

  return (
   <Link key={`link${slug}`} href={`/word/${slug}`}>
      <a className={styles.link}>{word.toLowerCase()}</a>
    </Link>
  )
}
