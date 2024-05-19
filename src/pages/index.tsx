// Services.
import Link from 'next/link'
import {
  getRandomEntries, getAlphabet, DictionaryEntry, AlphabetLetter,
} from 'lib/services/dictionary'

// Components.
import Layout from 'components/Layout'
import ContentArea from 'components/ContentArea'
import WordList from 'components/WordList'
import SampleText from 'components/SampleText'

interface IndexProps{
  words: DictionaryEntry[],
  letters: AlphabetLetter[],
}

export async function getStaticProps() {
  const letters = getAlphabet()
  const randomEntries = getRandomEntries()

  return {
    props: {
      words: randomEntries,
      letters,
    },
  }
}

export default function Index({ words, letters }: IndexProps) {
  if (!words) {
    return null
  }

  return (
    <Layout letters={letters} type='page' content={null}>
      <ContentArea>
        <h1 className="h2">Cleasby & Vigfusson Old Norse dictionary</h1>
        <p>Online version of the classic Old Norse / Old Icelandic
        dictionary by Richard Cleasby & Gudbrand Vigfusson, originally published in 1874</p>

        <p>It is the largest Old Norse to English dictionary.
          Containing over 35 000 entries with English definitions,
          it is one of the most important resources for the norse language.</p>

        <Link href="/search" className="button" prefetch={false}>
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

        <SampleText />
      </ContentArea>

      <ContentArea>
        <h2 className="h3">Written language of the dictionary</h2>
        <p>The dictionary was published in the late 1800&apos;s, making the language
          of the definitions a bit old fashioned. The author also seemed to prefer cognates,
          meaning that definition may use lesser known English word that happens to have more
          similar root to the Old Norse word. For example, <em>spyrja</em> is not simply
          &quot;to ask&quot;, but instead &quot;to speer&quot;,
          which is an older English word meaning the same thing.
        </p>

       <p>
        The Cleasby & Vigfusson book also used modern Icelandic practice of using letter <em>ö </em>
        to represent the original Old Norse vowel <em>ǫ</em>.
        Whenever this letter appears in a headword, an automatic alternative form is also provided.
       </p>

       <p>For example, <em>völlr</em> would become <em>vǫllr</em>.</p>

      </ContentArea>

      <h3>Random entries from the dictionary:</h3>
      <WordList words={words} showDefinition={true}/>
    </Layout>
  );
}
