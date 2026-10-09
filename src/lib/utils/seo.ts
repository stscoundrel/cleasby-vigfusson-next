import type { DictionaryEntryDTO } from 'lib/services/dictionary'
import { joinWithConj } from 'teljari'
import { capitalize } from 'lib/utils/strings'

interface SeoMetadata {
  title: string
  description: string
}

type Headword = Pick<DictionaryEntryDTO, 'word'>

/**
 * Get meta tags by type.
 */
export const getSeo = (
  content: Headword | Headword[] | null = null,
  type: 'word' | 'letter' | 'page' | null = null,
): SeoMetadata => {
  if (type === 'word') {
    const entry = content as Headword
    return {
      title: `Old Norse Dictionary - ${capitalize(entry.word)}`,
      description: `Meaning of Old Norse word "${entry.word.toLowerCase()}"`,
    }
  }

  if (type === 'letter') {
    const firstWords = (content as Headword[])
      .slice(0, 4)
      .map((word) => word.word.toLowerCase())
    return {
      title: `Old Norse words starting with letter ${firstWords[0].charAt(0).toUpperCase()}`,
      description: `Meanings of Old Norse words starting with "${firstWords[0].charAt(0).toUpperCase()}", such as ${joinWithConj(firstWords)}`,
    }
  }

  // Default tags.
  return {
    title: 'Old Norse Dictionary - Old Norse to English',
    description: 'Over 35 000 Old Norse words with dictionary definitions',
  }
}

export default getSeo
