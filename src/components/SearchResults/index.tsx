import { SearchResult } from 'lib/services/search'
import SearchTeaser from './SearchTeaser'
import styles from './SearchResults.module.scss'

interface SearchResultProps {
  words: SearchResult[]
}

export default function SearchResults({ words }: SearchResultProps) {
  return (
    <>
      <p className="blue">{words.length}{words.length === 150 && '+'} results found</p>
      <ul className={styles.list}>
        { words.map((word) => (
          <li key={word.slug}>
            <SearchTeaser data={word} />
          </li>
        )) }
      </ul>
    </>
  )
}
