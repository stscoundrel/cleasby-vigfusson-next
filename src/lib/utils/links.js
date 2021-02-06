export const getWordLink = (word) => `${process.env.NEXT_PUBLIC_SITE_URL}/word/${word.slug}`

export const getLetterLink = (letter) => `${process.env.NEXT_PUBLIC_SITE_URL}/letter/${letter.slug}`
