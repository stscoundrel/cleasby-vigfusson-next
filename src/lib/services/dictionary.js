const { getDictionary } = require('cleasby-vigfusson-dictionary')
const { VALID_AS_FIRST } = require('old-norse-alphabet')
const { slugifyWord, slugifyLetter } = require('../utils/slugs')

let cachedDictionary = null

const addSlugs = (words) => {
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

export const getAllWords = () => {
  if (cachedDictionary) return cachedDictionary

  const words = getDictionary()

  /**
   * Add URL safe slugs.
   */
  const formattedWords = addSlugs(words)

  cachedDictionary = formattedWords

  return formattedWords
}

export const getByLetter = (letter) => {
  const words = getAllWords()
  const byLetter = words.filter((entry) => (
    entry.word.charAt(0).toLowerCase() === letter.toLowerCase()))

  return byLetter
}

export const getWord = (word) => getAllWords().filter((entry) => entry.slug === word)[0]

export const getAlphabet = () => {
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
