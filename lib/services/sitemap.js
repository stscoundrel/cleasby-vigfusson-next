import { getAllWords, getAlphabet } from 'lib/services/dictionary'
import { getWordLink, getLetterLink } from 'lib/utils/links'

const formatWords = (words) => words.map((word) => ({
  url: getWordLink(word),
  changefreq: 'monthly',
  priority: 0.5,
}))

const formatLetters = (letters) => letters.map((letter) => ({
  url: getLetterLink(letter),
  changefreq: 'monthly',
  priority: 0.5,
}))

export const getSitemap = () => {

}

export const getContent = () => {
  const words = formatWords(getAllWords())
  const letters = formatLetters(getAlphabet())

  return [...words, ...letters]
}

export default {
  getSitemap,
  getContent,
}
