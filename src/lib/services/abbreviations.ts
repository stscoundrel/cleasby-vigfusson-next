import abbreviationsService from 'cleasby-vigfusson-abbreviations'
import { abbreviate } from 'abbreviatrix'
import { DictionaryEntry } from 'lib/services/dictionary'

const { findAbbreviations, findWorksAndAuthors, getWorksAndAuthorsMapping } = abbreviationsService

export interface Abbreviation{
  abbreviation: string,
  explanation: string
}

export interface CombinedAbbreviations {
  common: Abbreviation[],
  works: Abbreviation[],
}

/**
 * Combine abbreviations from definitions array.
 * Accepts finder method to use.
 */
const combineAbbreviations = (
  { definitions }: DictionaryEntry,
  abbreviationFinder: (s: string) => Map<string, string>,
): Abbreviation[] => {
  const combinedAbbreviations: Abbreviation[] = []
  const abbreviationSet = new Set()

  definitions.forEach((definition) => {
    const abbreviations = abbreviationFinder(definition)
    abbreviations.forEach((explanation, abbreviation) => {
      if (!abbreviationSet.has(abbreviation)) {
        abbreviationSet.add(abbreviation)
        combinedAbbreviations.push({ abbreviation, explanation })
      }
    })
  })

  return combinedAbbreviations;
}

export const getAbbreviations = (entry: DictionaryEntry): CombinedAbbreviations => ({
  common: combineAbbreviations(entry, findAbbreviations),
  works: combineAbbreviations(entry, findWorksAndAuthors),
})

export const getAllSorces = (): Abbreviation[] => {
  const abbrs = getWorksAndAuthorsMapping()
  return Array
    .from(abbrs, ([abbreviation, explanation]) => ({ explanation, abbreviation }))
    .sort((a, b) => a.abbreviation.localeCompare(b.abbreviation))
}

/**
 * Add abbr tags to content with explanations.
 */
export const addAbbreviationsToContent = (
  content: string,
  abbreviations: CombinedAbbreviations,
): string => {
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
