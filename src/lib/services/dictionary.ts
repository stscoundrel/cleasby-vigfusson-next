import { getDictionary, DictionaryEntry as RawDictionaryEntry } from 'cleasby-vigfusson-dictionary'
import { VALID_AS_FIRST } from 'old-norse-alphabet'
import { slugifyWord, slugifyLetter } from '../utils/slugs'

interface DictionaryEntry extends RawDictionaryEntry {
  slug: string,
}

interface AlphabetLetter {
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

export const getByLetter = (letter: string): DictionaryEntry[] => {
  const words = getAllWords()
  const byLetter = words.filter((entry) => (
    entry.word.charAt(0).toLowerCase() === letter.toLowerCase()))

  return byLetter
}

export const getWord = (slug: string): DictionaryEntry => (
  getAllWords().filter((entry) => entry.slug === slug)[0]
)

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
  getAlphabet,
}
