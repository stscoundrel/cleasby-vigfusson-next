import Link from 'next/link'
import styles from './SearchTeaser.module.scss'

export default function SearchTeaser({ data }) {
  const { slug, word, foundIn } = data

  return (
    <div className={styles.result}>
      <Link key={`link${slug}`} href={`/word/${slug}`}>
        <a className={styles.link}>{word.toLowerCase()}</a>
      </Link>
      <ul>
        { foundIn.map((searchResult, index) => (
          <li
            className={styles.foundIn}
            key={`${data.slug}-search-${index}`}
            dangerouslySetInnerHTML={ { __html: searchResult } }
          />
        )) }
      </ul>
    </div>
  )
}
