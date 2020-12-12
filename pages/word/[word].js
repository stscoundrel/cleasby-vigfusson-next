// Services.
import { getAllWords, getWord, getAlphabet } from 'lib/services/dictionary'

// Components.
import Layout from 'components/Layout'
import WordDefinition from 'components/WordDefinition'

/**
 * Get list of all possible word pages.
 */
export async function getStaticPaths() {
  const words = getAllWords()

  const paths = words.map((word) => ({
    params: { word: word.slug },
  }))

  // Saves a lot of build time for testing.
  // return {
  //   paths: [],
  //   fallback: 'blocking',
  // }

  return {
    paths,
    fallback: false,
  }
}

/**
 * Get word by slug.
 */
export async function getStaticProps({ params }) {
  const { word } = params
  const entry = getWord(word)
  const letters = getAlphabet()

  return {
    props: {
      entry,
      letters,
    },
  }
}

export default function Word({ entry, letters }) {
  if (!entry) {
    return null
  }

  return (
    <Layout type="word" content={entry} letters={letters}>
      <WordDefinition data={entry} />
    </Layout>
  )
}
