// Services.
import { getAllWords, getAlphabet } from 'lib/services/dictionary'

// Components.
import Layout from 'components/Layout'
import WordList from 'components/WordList'

export async function getStaticProps() {
  const allWords = getAllWords()
  const letters = getAlphabet()
  const words = allWords.slice(0, 100)

  return {
    props: {
      words,
      letters,
    },
  }
}

export default function Index({ words, letters }) {
  if (!words) {
    return null
  }

  return (
    <Layout letters={letters}>
      <WordList words={words} />
    </Layout>
  )
}
