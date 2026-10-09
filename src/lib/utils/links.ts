import type {
  AlphabetLetter,
  DictionaryEntryDTO,
} from 'lib/services/dictionary'

type SlugEntry = Pick<DictionaryEntryDTO, 'slug'>

export const getWordLink = (word: SlugEntry): string =>
  `${process.env.NEXT_PUBLIC_SITE_URL}/word/${word.slug}`

export const getLetterLink = (letter: Pick<AlphabetLetter, 'slug'>): string =>
  `${process.env.NEXT_PUBLIC_SITE_URL}/letter/${letter.slug}`

export const getWordPath = (word: SlugEntry): string => `/word/${word.slug}`

export const getMainUrl = (): string | undefined =>
  process.env.NEXT_PUBLIC_SITE_URL

export const getCanonicalUrl = (
  content: SlugEntry | DictionaryEntryDTO[] | null,
  type: 'word' | 'letter' | 'page' | 'main',
  letter: AlphabetLetter | false = false,
): string | undefined => {
  if (type === 'word') {
    return getWordLink(content as SlugEntry)
  }

  if (type === 'letter') {
    return getLetterLink(letter as AlphabetLetter)
  }

  return getMainUrl()
}
