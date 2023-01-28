// Services.
import { getAlphabet, getByLetter } from 'lib/services/dictionary'
import { decodeLetter } from 'lib/utils/slugs'

// Components.
import Layout from 'components/Layout'
import LetterHeader from 'components/LetterHeader'
import WordList from 'components/WordList'

/**
 * Get list of possible letter pages
 */
export async function getStaticPaths() {
  const letters = getAlphabet()
  const paths = letters.map((letter) => ({
    params: { letter: letter.slug },
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
  const letters = getAlphabet()
  const decodedLetter = letters.filter(
    (alphabetLetter) => alphabetLetter.letter === decodeLetter(letter),
  )[0]
  const words = getByLetter(decodedLetter.letter)

  return {
    props: {
      words,
      letters,
      letter: decodedLetter,
    },
  }
}

export default function Letter({ words, letter, letters }) {
  if (!words) {
    return null
  }

  return (
     <Layout type="letter" content={words} letter={letter} letters={letters}>
      <LetterHeader letter={letter.letter} count={words.length} />
      <WordList words={words} />
    </Layout>
  )
}
