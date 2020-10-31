import { joinWithConj } from 'teljari'
import { capitalize } from 'lib/utils/strings'

/**
 * Get meta tags by type.
 */
export const getSeo = (content = null, type = null) => {
  if (type === 'word') {
    return {
      title: `Cleasby & Vigfusson Dictionary - ${capitalize(content.word)}`,
      description: `Meaning of Old Norse word "${content.word.toLowerCase()}"`,
    }
  }

  if (type === 'letter') {
    const firstWords = content.slice(0, 4).map((word) => word.word.toLowerCase())
    return {
      title: `Cleasby & Vigfusson Dictionary - words starting with letter ${firstWords[0].charAt(0).toUpperCase()}`,
      description: `Meanings of Old Norse words starting with "${firstWords[0].charAt(0).toUpperCase()}", such as ${joinWithConj(firstWords)}`,
    }
  }

  // Default tags.
  return {
    title: 'Cleasby & Vigfusson Dictionary - Old Norse to English',
    description: 'Over 35 000 Old Norse words with dictionary definitions',
  }
}

export default getSeo
