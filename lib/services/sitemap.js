import { getAllWords, getAlphabet } from 'lib/services/dictionary'
import slugify from 'slugify'

const formatWords = (words) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  return words.map((word) => ({
    url: `${siteUrl}/word/${word.slug}`,
    changefreq: 'monthly',
    priority: 0.5,
  }))
}

const formatLetters = (letters) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  return letters.map((letter) => ({
    url: `${siteUrl}/letter/${slugify(letter)}`,
    changefreq: 'monthly',
    priority: 0.5,
  }))
}

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
