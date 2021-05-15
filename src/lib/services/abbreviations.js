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

export default {
  getAbbreviations,
}
