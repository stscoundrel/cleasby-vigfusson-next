// Services.
import { getAllWords } from 'lib/services/dictionary'

// Components.
import Layout from 'components/Layout'
import WordList from 'components/WordList'

export async function getStaticProps() {
  const allWords = getAllWords()
  const words = allWords.slice(0, 100)

  return {
    props: {
      words,
    },
  }
}

export default function Index({ words }) {
  if (!words) {
    return null
  }

  return (
    <Layout>
      <WordList words={words} />
    </Layout>
  )
}
