import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Search() {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    router.push(`/search/?query=${search}`)
  }

  return (
   <form onSubmit={(e) => handleSearch(e)}>
      <input aria-label="Search" type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
      <button name="submit" type="submit">Search</button>
    </form>
  )
}
