import { findAbbreviations, findWorksAndAuthors } from 'cleasby-vigfusson-abbreviations'

/**
 * Combine abbreviations from definitions array.
 * Accepts finder method to use.
 */
const combineAbbreviations = ({ definitions }, find) => {
  const combinedAbbreviations = []
  const abbreviationSet = new Set()

  definitions.forEach((definition) => {
    const abbreviations = find(definition)
    abbreviations.forEach((explanation, abbreviation) => {
      if (!abbreviationSet.has(abbreviation)) {
        abbreviationSet.add(abbreviation)
        combinedAbbreviations.push({ abbreviation, explanation })
      }
    })
  })

  return combinedAbbreviations;
}

export const getAbbreviations = (entry) => ({
  common: combineAbbreviations(entry, findAbbreviations),
  works: combineAbbreviations(entry, findWorksAndAuthors),
})

export default {
  getAbbreviations,
}
