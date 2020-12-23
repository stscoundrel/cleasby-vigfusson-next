// Services.
import { getAllWords, getAlphabet } from 'lib/services/dictionary'

// Components.
import Layout from 'components/Layout'
import ContentArea from 'components/ContentArea'
import Link from 'next/link'
import WordList from 'components/WordList'

export async function getStaticProps() {
  const allWords = getAllWords()
  const letters = getAlphabet()
  const words = allWords.sort(() => Math.random() - 0.5).slice(0, 100)

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
    <Layout letters={letters} type='page'>
      <ContentArea>
        <h1 className="h2">Cleasby & Vigfusson Old Norse dictionary</h1>
        <p>Online version of the classic Old Norse / Old Icelandic
        dictionary by Richard Cleasby & Gudbrand Vigfusson, originally published in 1874</p>

        <p>The dictionary contains over 35 000 Old Norse
        words with English language definitions.</p>

        <Link href="/search">
         <a className="button">Search the dictionary</a>
        </Link>
      </ContentArea>

      <ContentArea>
        <h2 className="h3">What is Old Norse?</h2>
        <p>Old Norse is a dead language, that was the father of modern languages
        like Icelandic, Swedish, Norwegian, Danish, Faroese and Elfdalian.
        Popularly known as the language that vikings spoke.</p>
      </ContentArea>

      <h3>Random entries from the dictionary:</h3>
      <WordList words={words} />
    </Layout>
  )
}
