import { findAbbreviations, findWorksAndAuthors } from 'cleasby-vigfusson-abbreviations'

/**
 * Combine abbreviations from definitions array.
 * Accepts finder method to use.
 */
const combineAbbreviations = ({ definitions }, find) => {
  const combinedAbbreviations = new Map()

  definitions.forEach((definition) => {
    const abbreviations = find(definition)
    abbreviations.forEach((explanation, abbreviation) => {
      combinedAbbreviations.set(abbreviation, explanation)
    })
  })

  return combinedAbbreviations
}

export const getAbbreviations = (entry) => ({
  common: combineAbbreviations(entry, findAbbreviations),
  works: combineAbbreviations(entry, findWorksAndAuthors),
})

/**
 * Get serializable version of abbreviations.
 * Next.js needs to make JSON of these if returned from server-side / build time.
 */
export const getSerializableAbbreviations = (entry) => {
  const { common, works } = getAbbreviations(entry)

  return {
    common: Object.fromEntries(common),
    works: Object.fromEntries(works),
  }
}

/**
 * Parse serialized abbreviations back to Maps.
 */
export const getMapFromSerializedAbbreviations = ({ common, works }) => ({
  common: new Map(Object.entries(common)),
  works: new Map(Object.entries(works)),
})

export default {
  getAbbreviations,
  getSerializableAbbreviations,
}
