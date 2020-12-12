import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

// Services.
import { getAllWords, getAlphabet } from 'lib/services/dictionary'
import { searchDictionary } from 'lib/services/search'

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

export default function Search({ words, letters }) {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    if (search !== router.query.query) {
      setSearch(router.query.query)
      setResults(searchDictionary(router.query.query, words))
    }
  }, [router.query])

  const handleSearch = (e) => {
    e.preventDefault()
    const url = search !== '' ? `/search?query=${search}` : '/search'

    router.push(url, undefined, { shallow: true })
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

      { results.length === 0 && <p>No search results</p> }
    </Layout>
  )
}
