// Services.
import {
  AlphabetLetter, getAlphabet,
} from 'lib/services/dictionary'

// Components.
import Layout from 'components/Layout'
import SearchForm from 'components/SearchForm'

interface SearchPageProps{
  letters: AlphabetLetter[],
}

export async function getStaticProps() {
  const letters = getAlphabet()

  return {
    props: {
      letters,
    },
  }
}

export default function Search({ letters }: SearchPageProps) {
  return (
    <Layout type="page" letters={letters} noSearch={true} content={null}>
      <SearchForm />
    </Layout>
  )
}
