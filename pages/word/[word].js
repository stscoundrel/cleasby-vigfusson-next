// Services.
import { getAllWords, getWord } from 'lib/services/dictionary'

// Components.
import Layout from 'components/Layout'

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

  return {
    props: {
      entry,
    },
  }
}

export default function Word({ entry }) {
  if (!entry) {
    return null
  }

  return (
    <Layout type="word" content={entry}>
      <p>{entry.word} = {entry.definitions.join(' ')}</p>
    </Layout>
  )
}
