export const getWordLink = (word) => `${process.env.NEXT_PUBLIC_SITE_URL}/word/${word.slug}`

export const getLetterLink = (letter) => `${process.env.NEXT_PUBLIC_SITE_URL}/letter/${letter.slug}`

export const getWordPath = (word) => `/word/${word.slug}`

export const getMainUrl = () => process.env.NEXT_PUBLIC_SITE_URL

export const getCanonicalUrl = (content, type, letter = false) => {
  if (type === 'word') {
    return getWordLink(content)
  }

  if (type === 'letter') {
    return getLetterLink(letter)
  }

  return getMainUrl()
}
