// Services.
import { getAlphabet, AlphabetLetter } from 'lib/services/dictionary'

// Components.
import Layout from 'components/Layout'
import ContentArea from 'components/ContentArea'
import { Abbreviation, getAllSorces } from 'lib/services/abbreviations'
import Abbreviations from 'components/Abbreviations'

interface SourcePageProps{
  letters: AlphabetLetter[],
  sources: Abbreviation[]
}

export async function getStaticProps() {
  const letters = getAlphabet()
  const sources = getAllSorces()

  return {
    props: {
      letters,
      sources,
    },
  }
}

export default function SourceList({ letters, sources }: SourcePageProps) {
  return (
    <Layout letters={letters} letter={false} type="page" content={null}>
       <ContentArea>
        <h1 className="h2">Sources list</h1>
        <p>Works and authors cited in &quot;<em>The Cleasby & Vigfusson Dictionary</em>&quot;
        of Old Norse / Old Icelandic.</p>

      </ContentArea>

      <Abbreviations abbreviations={{ works: sources, common: [] }} />
    </Layout>
  )
}
