import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Search() {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    router.push(`/search/${search}`)
  }

  return (
   <form onSubmit={(e) => handleSearch(e)}>
      <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
      <button type="submit">Search</button>
    </form>
  )
}
