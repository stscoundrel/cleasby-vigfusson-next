// Services.
import { getWord, getAlphabet } from 'lib/services/dictionary'

// Utils.
import { redirect404 } from 'lib/utils/redirect-404'

// Components.
import Layout from 'components/Layout'
import WordDefinition from 'components/WordDefinition'

/**
 * There are too many word paths for Vercel to build.
 * It hits 16 000 file limit.
 *
 * Let's just build them as they are accessed.
 */
export async function getStaticPaths() {
  return {
    paths: [],
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
