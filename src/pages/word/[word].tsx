import { useRouter } from 'next/router'

// Services.
import {
  getWord, getAlphabet, DictionaryEntry, AlphabetLetter, getSimilarWords,
} from 'lib/services/dictionary'
import { CombinedAbbreviations, getAbbreviations } from 'lib/services/abbreviations'

// Utils.
import { redirect404, Redirect404ResponseSchema } from 'lib/utils/redirect-404'

// Components.
import Layout from 'components/Layout'
import WordDefinition from 'components/WordDefinition'
import Button from 'components/Button'
import { Crosslink } from 'scandinavian-dictionary-crosslinker'
import { decodeLetter } from 'lib/utils/slugs'
import { getCrossLinks } from 'lib/services/crosslinks'

interface WordPageProps{
  entry: DictionaryEntry,
  similarEntries: DictionaryEntry[],
  letters: AlphabetLetter[],
  letter: AlphabetLetter,
  abbreviations: CombinedAbbreviations,
  crosslinks: Crosslink[],
}

interface WordPageParams{
  params: {
      word: string
  }
}

interface WordPageStaticPathsResponseSchema{
  paths: string[]
  fallback: string | boolean
}

interface WordPageStaticPropsResponseSchema{
  props: WordPageProps
}

/**
 * There are too many word paths for Vercel to build.
 * It hits 16 000 file limit.
 *
 * Let's just build them as they are accessed.
 */
export async function getStaticPaths(): Promise<WordPageStaticPathsResponseSchema> {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

/**
 * Get word by slug.
 */
export async function getStaticProps(
  { params }: WordPageParams,
): Promise<WordPageStaticPropsResponseSchema | Redirect404ResponseSchema> {
  const { word } = params
  const entry = getWord(word)

  if (!entry) {
    return redirect404()
  }

  const similarEntries = getSimilarWords(entry)
  const letters = getAlphabet()
  const letter = letters.filter(
    (alphabetLetter) => alphabetLetter.letter === decodeLetter(
      entry.word.charAt(0).toLocaleLowerCase(),
    ),
  )[0]
  const abbreviations = getAbbreviations(entry)
  const crosslinks = getCrossLinks(entry)

  return {
    props: {
      entry,
      similarEntries,
      letter,
      letters,
      abbreviations,
      crosslinks,
    },
  }
}

export default function Word({
  entry, similarEntries, letters, abbreviations, crosslinks,
}) {
  const router = useRouter()

  if (!entry) {
    return null
  }

  return (
    <Layout type="word" content={entry} letters={letters}>
      <WordDefinition
        entry={entry}
        similarEntries={similarEntries}
        abbreviations={abbreviations}
        crosslinks={crosslinks}
      />
      <Button text="Back" action={() => router.back()} />
    </Layout>
  )
}
