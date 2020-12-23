// Services.
import { getAllWords, getWord, getAlphabet } from 'lib/services/dictionary'

// Utils.
import { redirect404 } from 'lib/utils/redirect-404'

// Components.
import Layout from 'components/Layout'
import WordDefinition from 'components/WordDefinition'

/**
 * Get list of all possible word pages.
 *
 * Handles first 5000 on build time,
 * rest as they are accessed.
 */
export async function getStaticPaths() {
  const words = getAllWords()

  const paths = words.slice(0, 5000).map((word) => ({
    params: { word: word.slug },
  }))

  console.log(paths.length)

  // Saves a lot of build time for testing.
  // return {
  //   paths: [],
  //   fallback: 'blocking',
  // }

  return {
    paths,
    fallback: 'blocking',
  }
}

/**
 * Get word by slug.
 */
export async function getStaticProps({ params }) {
  const { word } = params
  const entry = getWord(word)

  if (!entry) {
    return redirect404()
  }

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
