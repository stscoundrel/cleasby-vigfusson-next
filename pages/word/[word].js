// Services.
import { getAllWords, getWord } from 'lib/services/dictionary'

/**
 * Get list of all possible word pages.
 */
export async function getStaticPaths() {
  const words = getAllWords()

  const paths = words.map((word) => ({
    params: { word: word.slug },
  }))

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
    <div>
      <p>{entry.word} = {entry.definitions.join(' ')}</p>
    </div>
  )
}
