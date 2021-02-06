// Services.
import { getAllWords, getAlphabet } from 'lib/services/dictionary'

// Components.
import Layout from 'components/Layout'
import SearchForm from 'components/SearchForm'

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
  return (
    <Layout type="page" letters={letters} noSearch={true}>
      <SearchForm words={words} />
    </Layout>
  )
}
