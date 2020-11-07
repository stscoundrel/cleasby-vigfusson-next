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

/**
 * Accepts stream & streamtopromise as parameters.
 * This is usually not needed, but for reasons unknown Jest
 * fails if we require those libs here.
 */
export const formatSitemap = (content, SitemapStream, streamToPromise) => {
  const stream = new SitemapStream({ hostname: process.env.NEXT_PUBLIC_SITE_URL })
  content.forEach((entry) => stream.write(entry))
  stream.end()

  return streamToPromise(stream).then((data) => data.toString())
}

export const getSitemapContent = () => {
  const words = formatWords(getAllWords())
  const letters = formatLetters(getAlphabet())

  return [...words, ...letters]
}

export default {
  formatSitemap,
  getSitemapContent,
}
