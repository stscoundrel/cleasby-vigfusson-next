import Link from 'next/link'
import { SearchResult } from 'lib/services/search';
import styles from './SearchTeaser.module.scss'

interface SearchTeaserProps {
  data: SearchResult
}

export default function SearchTeaser({ data }: SearchTeaserProps) {
  const { slug, word, foundIn } = data

  return (
    <div className={styles.result}>
      <Link key={`link${slug}`} href={`/word/${slug}`} className={styles.link} prefetch={false}>
        {word.toLowerCase()}
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
  );
}
