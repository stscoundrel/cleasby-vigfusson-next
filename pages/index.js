// Services.
import { getAllWords } from 'lib/services/dictionary'

import Link from 'next/link'

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
    <div>
      { words.map((word) => (
        <Link key={`link${word.slug}`} href={`/word/${word.slug}`}>
          <a key={`a-${word.slug}`}>
            <p>{word.word}</p>
          </a>
        </Link>
      )) }
    </div>
  )
}
