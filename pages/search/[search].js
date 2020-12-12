// Services.
import { getAllWords, getAlphabet } from 'lib/services/dictionary'

// Search layout.
import SearchPage from 'pages/search'

export async function getServerSideProps({ params }) {
  const { search } = params
  const words = getAllWords()
  const letters = getAlphabet()

  return {
    props: {
      words,
      query: search,
      letters,
    },
  }
}

export default function Search({ words, query, letters }) {
  return <SearchPage words={words} query={query} letters={letters} />
}
