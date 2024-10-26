import { useRouter } from 'next/router'

// Services.
import type { Crosslink } from 'scandinavian-dictionary-crosslinker'
import {
  getWord, getAlphabet, type DictionaryEntry, type AlphabetLetter, getSimilarWords,
  getInitialWordsToBuild,
} from 'lib/services/dictionary'
import { type CombinedAbbreviations, getAbbreviations } from 'lib/services/abbreviations'

// Utils.
import { redirect404, type Redirect404ResponseSchema } from 'lib/utils/redirect-404'

// Components.
import Layout from 'components/Layout'
import WordDefinition from 'components/WordDefinition'
import Button from 'components/Button'
import { decodeLetter } from 'lib/utils/slugs'
import { getCrossLinks } from 'lib/services/crosslinks'
import { youngerFuthark } from 'riimut'

interface WordPageProps{
  entry: DictionaryEntry,
  similarEntries: DictionaryEntry[],
  letters: AlphabetLetter[],
  letter: AlphabetLetter,
  abbreviations: CombinedAbbreviations,
  crosslinks: Crosslink[],
  runes: string,
}

interface WordPageParams{
  params: {
      word: string
  }
}

interface WordPath{
  params: {
      word: string
  }
}

interface WordPageStaticPathsResponseSchema{
  paths: WordPath[]
  fallback: string | boolean
}

interface WordPageStaticPropsResponseSchema{
  props: WordPageProps
}

/**
 * There are too many word paths for Vercel to build.
 * It hits 16 000 file limit.
 *
 * Build around 5000 pages initially and rest as they are accessed
 * or remotely revalidated via API.
 */
export async function getStaticPaths(): Promise<WordPageStaticPathsResponseSchema> {
  const initialPages = getInitialWordsToBuild()

  return {
    paths: initialPages.map((slug) => ({
      params: { word: slug },
    })),
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
  const runes = youngerFuthark.lettersToRunes(entry.word)

  return {
    props: {
      entry,
      similarEntries,
      letter,
      letters,
      abbreviations,
      crosslinks,
      runes,
    },
  }
}

export default function Word({
  entry, similarEntries, letters, abbreviations, crosslinks, runes,
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
        runes={runes}
      />
      <Button text="Back" action={() => router.back()} />
    </Layout>
  )
}
