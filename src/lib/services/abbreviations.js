import { findAbbreviations, findWorksAndAuthors } from 'cleasby-vigfusson-abbreviations'
import { abbreviate } from 'abbreviatrix'

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

/**
 * Add abbr tags to content with explanations.
 */
export const addAbbreviationsToContent = (content, abbreviations) => {
  const combinedAbbrs = [...abbreviations.common, ...abbreviations.works]
  let result = content

  combinedAbbrs.forEach(({ abbreviation, explanation }) => {
    result = abbreviate(abbreviation, explanation, result)
  })

  return result
}

export default {
  getAbbreviations,
  addAbbreviationsToContent,
}
