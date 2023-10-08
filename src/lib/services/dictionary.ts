import { getDictionary, DictionaryEntry as RawDictionaryEntry } from 'cleasby-vigfusson-dictionary'
import { VALID_AS_FIRST } from 'old-norse-alphabet'
import { oldNorseSort } from 'old-norse-alphabet-sort'
import { slugifyWord, slugifyLetter } from '../utils/slugs'

export interface DictionaryEntry extends RawDictionaryEntry {
  slug: string,
}

export interface DictionaryEntryDTO {
  word: string,
  slug: string
}

export interface AlphabetLetter {
  letter: string,
  slug: string
}

let cachedDictionary: DictionaryEntry[] | null = null

const addSlugs = (words: RawDictionaryEntry[]): DictionaryEntry[] => {
  const existingSlugs = {}

  const formattedWords = words.map((word) => {
    let slug = slugifyWord(word.word).toLowerCase()

    if (slug.charAt(0) === '-') {
      slug = slug.substring(1)
    }

    if (existingSlugs[slug]) {
      // Double slug, make unique.
      existingSlugs[slug] += 1
      slug = `${slug}-${existingSlugs[slug]}`
    } else {
      existingSlugs[slug] = 1
    }

    return {
      ...word,
      slug,
    }
  })

  return formattedWords
}

export const getAllWords = (): DictionaryEntry[] => {
  if (cachedDictionary) return cachedDictionary

  const words = getDictionary()

  /**
   * Add URL safe slugs.
   */
  const formattedWords = addSlugs(words)

  /**
   * Ensure headwords are lowercased.
   * Original source has some in all caps.
   * That is true to the layout of the book,
   * but makes little sense in website.
   */
  const dictionary = formattedWords.map((entry) => ({ ...entry, word: entry.word.toLowerCase() }))

  cachedDictionary = dictionary

  return dictionary
}

export const getByLetter = (letter: string): DictionaryEntryDTO[] => {
  const words = getAllWords()
  const byLetter = words
    .filter((entry) => (
      entry.word.charAt(0).toLowerCase() === letter.toLowerCase()))
    .map((entry) => {
      // Simpler DTO dictionary entry.
      const { word, slug } = entry
      return { word, slug }
    })
    .sort((a, b) => oldNorseSort(a.word, b.word))

  return byLetter
}

export const getWord = (slug: string): DictionaryEntry => (
  getAllWords().filter((entry) => entry.slug === slug)[0]
)

export const getRandomEntries = (): DictionaryEntry[] => (
  // Return entries fit to be randomized "teasers"
  // Therefore, content should be short, but not too short.
  getAllWords()
    .sort(() => Math.random() - 0.5)
    .filter((entry) => entry.definitions[0].length < 50 && entry.definitions[0].length > 15)
    .slice(0, 36)
    .sort((a, b) => oldNorseSort(a.word, b.word))
)

export const getSimilarWords = (entry: DictionaryEntry) : DictionaryEntry[] => getAllWords()
  .filter((dEntry) => dEntry.word.toLocaleLowerCase() === entry.word.toLocaleLowerCase()
  && dEntry.slug !== entry.slug)

export const getAlphabet = (): AlphabetLetter[] => {
  const letters = [...VALID_AS_FIRST.filter((letter) => letter !== 'ǫ' && letter !== 'ø'), 'ö']

  const formattedLetters = letters.map((letter) => ({
    letter,
    slug: slugifyLetter(letter),
  }))

  return formattedLetters
}

export default {
  getAllWords,
  getByLetter,
  getWord,
  getRandomEntries,
  getAlphabet,
}
