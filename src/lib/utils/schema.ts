import type {
  DictionaryEntry,
  DictionaryEntryDTO,
} from 'lib/services/dictionary'
import type { Breadcrumb } from './breadcrumbs'
import { capitalize, removeHTML } from 'lib/utils/strings'
import { slugifyLetter } from 'lib/utils/slugs'
import { getWordLink, getLetterLink } from 'lib/utils/links'

type DefinedTerm = Pick<DictionaryEntry, 'word' | 'slug' | 'definitions'>

const getDefinedTermSetData = (content: DictionaryEntryDTO[]) => {
  const letter = {
    letter: content[0].word.charAt(0),
    slug: slugifyLetter(content[0].word.charAt(0)),
  }

  return {
    '@context': 'https://schema.org/',
    '@type': 'DefinedTermSet',
    '@id': getLetterLink(letter),
    name: removeHTML(
      `Cleasby & Vigfusson Dictionary - Letter ${letter.letter.toUpperCase()}`,
    ),
    description: removeHTML(
      `Old Norse words starting with letter ${letter.letter.toUpperCase()}`,
    ),
  }
}

const getDefinedTermData = (content: DefinedTerm) => ({
  '@context': 'https://schema.org/',
  '@type': 'DefinedTerm',
  '@id': getWordLink(content),
  name: removeHTML(
    `Cleasby & Vigfusson Dictionary - ${capitalize(content.word)}`,
  ),
  description: removeHTML(content.definitions[0]),
  inDefinedTermSet: process.env.NEXT_PUBLIC_SITE_URL,
})

const getBreadcrumbListData = (content: Breadcrumb[]) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  const listItems = content.map(({ label, url }, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: label,
    item: siteUrl + url,
  }))

  return {
    '@context': 'https://schema.org/',
    '@type': 'BreadcrumbList',
    itemListElement: listItems,
  }
}

const getDefault = () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  return {
    '@context': 'https://schema.org/',
    '@type': 'DefinedTermSet',
    '@id': `${siteUrl}`,
    name: 'Cleasby & Vigfusson Dictionary',
    description: 'Old Norse words with English definitions',
  }
}

/**
 * Get schema.org JSON-LD by type.
 */
export const getSchema = (
  content: DefinedTerm | DictionaryEntryDTO[] | Breadcrumb[] | null = null,
  type: 'word' | 'letter' | 'breadcrumbs' | 'page' | null = null,
): string => {
  if (type === 'word') {
    const data = getDefinedTermData(content as DefinedTerm)

    return JSON.stringify(data)
  }

  if (type === 'letter') {
    const termSet = getDefinedTermSetData(content as DictionaryEntryDTO[])
    return JSON.stringify(termSet)
  }

  if (type === 'breadcrumbs') {
    const data = getBreadcrumbListData(content as Breadcrumb[])

    return JSON.stringify(data)
  }

  const data = getDefault()
  return JSON.stringify(data)
}

export default getSchema
