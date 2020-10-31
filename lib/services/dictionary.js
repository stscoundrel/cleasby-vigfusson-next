const { getDictionary } = require('cleasby-vigfusson-dictionary')
const { VALID_AS_FIRST } = require('old-norse-alphabet')
const slugify = require('slugify')

const addSlugs = (words) => {
  const existingSlugs = {}

  const formattedWords = words.map((word) => {
    let slug = slugify(word.word).toLowerCase()

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
  const words = getDictionary()

  /**
   * Add URL safe slugs.
   */
  const formattedWords = addSlugs(words)

  return formattedWords
}

export const getByLetter = (letter) => {
  const words = getAllWords()
  const byLetter = words.filter((entry) => entry.word.charAt(0) === letter)

  return byLetter
}

export const getWord = (word) => getAllWords().filter((entry) => entry.slug === word)[0]

export const getAlphabet = () => VALID_AS_FIRST

export default {
  getAllWords,
  getByLetter,
  getWord,
  getAlphabet,
}
