// Services.
import { getAllWords, getAlphabet } from 'lib/services/dictionary'
import { searchDictionary } from 'lib/services/search'

import { useState } from 'react'

// Components.
import Layout from 'components/Layout'
import WordList from 'components/WordList'

export async function getStaticProps() {
  const words = getAllWords()
  const letters = getAlphabet()

  return {
    props: {
      words,
      letters,
    },
  }
}

export default function Search({ words, query = '', letters }) {
  const initialResults = query ? searchDictionary(query, words) : []
  const [search, setSearch] = useState(query)
  const [results, setResults] = useState(initialResults)

  const handleSearch = (e) => {
    e.preventDefault()
    setResults(searchDictionary(search, words))
  }

  if (!words) {
    return null
  }

  return (
    <Layout letters={letters} noSearch={true}>
      <form onSubmit={(e) => handleSearch(e)}>
        <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button type="submit">Search</button>
      </form>

      <WordList words={results} />
    </Layout>
  )
}
