import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

// Services.
import { searchDictionary } from 'lib/services/search'

// Components.
import WordList from 'components/WordList'

import styles from './SearchForm.module.scss'

export default function SearchForm({ words }) {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [selectedCriteria, setSelectedCriteria] = useState('all')
  const [results, setResults] = useState([])

  const getCriteria = (value) => {
    if (value === 'all') {
      return ['headword', 'definitions']
    }

    return [value]
  }

  const changeCriteria = (e) => {
    const value = e.target.name
    setSelectedCriteria(value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const url = search !== '' ? `/search?query=${search}&criteria=${selectedCriteria}` : '/search'

    router.push(url, undefined, { shallow: true })
  }

  useEffect(() => {
    if (router.query.query) {
      setSearch(router.query.query)
      setSelectedCriteria(router.query.criteria)

      const formattedCriteria = getCriteria(router.query.criteria)
      setResults(searchDictionary(router.query.query, words, formattedCriteria))
    }
  }, [router.query])

  return (
    <>
      <form className={styles.form} onSubmit={(e) => handleSearch(e)}>
        <h1 className="h3">Search</h1>
        <input className={styles.input} type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <ul className={styles.list}>
          <p>Search from:</p>
          <li className={styles.listItem}>
            <input type="radio" value="criteria" name="all" checked={selectedCriteria === 'all'} onChange={(e) => changeCriteria(e)} /> Everything
          </li>
          <li className={styles.listItem}>
            <input type="radio" value="criteria" name="headword" checked={selectedCriteria === 'headword'} onChange={(e) => changeCriteria(e)} /> Headwords
          </li>
          <li className={styles.listItem}>
            <input type="radio" value="criteria" name="definitions" checked={selectedCriteria === 'definitions'} onChange={(e) => changeCriteria(e)} /> Definitions
          </li>
        </ul>
        <button className="button" type="submit">Search</button>
      </form>

      <WordList words={results} />

      { results.length === 0 && <p>No search results</p> }
    </>
  )
}
