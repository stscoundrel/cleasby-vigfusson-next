// Services.
import { getAlphabet, getByLetter } from 'lib/services/dictionary'

// Components.
import Layout from 'components/Layout'
import WordList from 'components/WordList'

/**
 * Get list of possible letter pages
 */
export async function getStaticPaths() {
  const letters = getAlphabet()
  const paths = letters.map((letter) => ({
    params: { letter },
  }))

  return {
    paths,
    fallback: false,
  }
}

/**
 * Get words by letter.
 */
export async function getStaticProps({ params }) {
  const { letter } = params
  const words = getByLetter(letter)
  const letters = getAlphabet()

  return {
    props: {
      words,
      letters,
    },
  }
}

export default function Letter({ words, letters }) {
  if (!words) {
    return null
  }

  return (
     <Layout type="letter" content={words} letters={letters}>
      <WordList words={words} />
    </Layout>
  )
}
