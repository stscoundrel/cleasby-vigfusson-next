import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './Search.module.scss'

export default function Search() {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    router.push(`/search/?query=${search}`)
  }

  return (
   <form className={styles.form} onSubmit={(e) => handleSearch(e)}>
      <input className={styles.input} aria-label="Search" type="search" name="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
      <button className="button button--secondary button--no-margs" name="submit" type="submit">Search</button>
    </form>
  )
}
