// Services.
import { getAllWords } from 'lib/services/dictionary'
import { searchDictionary } from 'lib/services/search'

import { useState } from 'react'

import Link from 'next/link'

export async function getStaticProps() {
  const words = getAllWords()

  return {
    props: {
      words,
    },
  }
}

export default function Search({ words, query = '' }) {
  const [search, setSearch] = useState(query)
  const [results, setResults] = useState([])

  const handleSearch = (e) => {
    e.preventDefault()
    setResults(searchDictionary(search, words))
  }

  if (!words) {
    return null
  }

  if (query) {
    setResults(searchDictionary(search, words))
  }

  return (
    <div>
      <form onSubmit={(e) => handleSearch(e)}>
        <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button type="submit">Search</button>
      </form>

      {
        results.map((word) => (
          <Link key={word.slug} href={`/word/${word.slug}`}>
            <a key={word.word}>
              <p>{word.word}</p>
            </a>
          </Link>
        ))
      }
    </div>
  )
}
