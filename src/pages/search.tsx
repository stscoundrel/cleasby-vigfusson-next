// Services.
import {
  AlphabetLetter, DictionaryEntry, getAllWords, getAlphabet,
} from 'lib/services/dictionary'

// Components.
import Layout from 'components/Layout'
import SearchForm from 'components/SearchForm'

interface SearchPageProps{
  words: DictionaryEntry[],
  letters: AlphabetLetter[],
}

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

export default function Search({ words, letters }: SearchPageProps) {
  return (
    <Layout type="page" letters={letters} noSearch={true} content={null}>
      <SearchForm words={words} />
    </Layout>
  )
}
