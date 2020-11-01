import slugify from 'slugify'
import { capitalize, removeHTML } from './strings'

const getDefinedTermSetData = (content) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  const letter = content[0].word.charAt(0)
  const slug = slugify(letter)

  return {
    '@context': 'https://schema.org/',
    '@type': 'DefinedTermSet',
    '@id': `${siteUrl}/letter/${slug}`,
    name: removeHTML(`Cleasby & Vigfusson Dictionary - ${letter.toUpperCase()}`),
    description: removeHTML(`Old Norse words starting with letter ${letter.toUpperCase()}`),
  }
}

const getDefinedTermData = (content) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  return {
    '@context': 'https://schema.org/',
    '@type': 'DefinedTerm',
    '@id': `${siteUrl}/word/${content.slug}`,
    name: removeHTML(`Cleasby & Vigfusson Dictionary - ${capitalize(content.word)}`),
    description: removeHTML(content.definitions[0]),
    inDefinedTermSet: siteUrl,
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
export const getSchema = (content, type) => {
  if (type === 'word') {
    const data = getDefinedTermData(content)

    return JSON.stringify(data)
  }

  if (type === 'letter') {
    const termSet = getDefinedTermSetData(content)
    const terms = content.map((word) => getDefinedTermData(word))

    const data = [termSet, ...terms]
    return JSON.stringify(data)
  }

  const data = getDefault()
  return JSON.stringify(data)
}

export default getSchema
