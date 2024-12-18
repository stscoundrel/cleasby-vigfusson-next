import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

// Services.
import { SearchResult } from 'lib/services/search'

// Components.
import LoadingSpinner from 'components/LoadingSpinner'
import SearchResults from 'components/SearchResults'

import styles from './SearchForm.module.scss'

export default function SearchForm() {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [selectedCriteria, setSelectedCriteria] = useState('all')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const getCriteria = (value: string): string => {
    if (!value || value === 'all') {
      return 'headword,definitions'
    }

    return value
  }

  const changeCriteria = (e) => {
    const value = e.target.name ?? 'all'
    setSelectedCriteria(value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setIsLoading(true)
    const url = search !== '' ? `/search?query=${search}&criteria=${selectedCriteria}` : '/search'

    router.push(url, undefined, { shallow: false })
  }

  const showSpinner = () => {
    setIsLoading(true)
  }

  const hideSpinner = () => {
    setIsLoading(false)
  }

  useEffect(() => {
    if (router.query.query) {
      const fetchSearchResults = async () => {
        showSpinner()
        setSearch(String(router.query.query))
        setSelectedCriteria(router.query.criteria as string ?? 'all')

        const formattedCriteria = getCriteria(router.query.criteria as string)
        const apiSearchResponse = await fetch(`/api/search?${new URLSearchParams({
          search: String(router.query.query),
          criteria: formattedCriteria,
        })}`)
        const apiSearchResult = await apiSearchResponse.json()

        setResults(apiSearchResult)
        hideSpinner()
      }

      fetchSearchResults()
    }
  }, [router.query])

  return (
    <>
      <form className={styles.form} onSubmit={(e) => handleSearch(e)}>
        <h1 className="h3">Search</h1>
        <input className={styles.input} type="search" name="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
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

      {isLoading && <LoadingSpinner /> }
      {!isLoading && <SearchResults words={results} /> }

      { results.length === 0 && <p>No search results</p> }
    </>
  )
}
