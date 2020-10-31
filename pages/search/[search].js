// Services.
import { getAllWords } from 'lib/services/dictionary'

// Search layout.
import SearchPage from 'pages/search'

export async function getServerSideProps({ params }) {
  const { search } = params
  const words = getAllWords()

  return {
    props: {
      words,
      query: search,
    },
  }
}

export default function Search({ words, query }) {
  return <SearchPage words={words} query={query} />
}
