// Services.
import { getAllWords, getAlphabet } from 'lib/services/dictionary'

// Components.
import Layout from 'components/Layout'
import ContentArea from 'components/ContentArea'
import Link from 'next/link'
import WordList from 'components/WordList'
import { oldNorseSort } from 'old-norse-alphabet-sort'

export async function getStaticProps() {
  const allWords = getAllWords()
  const letters = getAlphabet()
  const words = allWords
    .sort(() => Math.random() - 0.5)
    .slice(0, 100)
    .sort((a, b) => oldNorseSort(a.word, b.word))

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

        <p>It is the largest Old Norse to English dictionary.
          Containing over 35 000 entries with English definitions,
          it is one of the most important resources for the norse language.</p>

        <Link href="/search" className="button">
         Search the dictionary
        </Link>
      </ContentArea>

      <ContentArea>
        <h2 className="h3">What is Old Norse?</h2>
        <p>Old Norse is a dead language, that was the father of modern languages
        like Icelandic, Swedish, Norwegian, Danish, Faroese and Elfdalian.</p>
        <p>It was spoken by Scandinavians during the Viking Age,
          making it the &quot;language of vikings&quot;.
        </p>
      </ContentArea>

      <h3>Random entries from the dictionary:</h3>
      <WordList words={words} />
    </Layout>
  );
}
