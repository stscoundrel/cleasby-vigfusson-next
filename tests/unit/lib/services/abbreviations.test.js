import {
  getAbbreviations,
} from 'lib/services/abbreviations'

// Test utils.
import { isObject, isArray } from 'volva'
import { hasProperty } from 'spyrjari'

describe('Abbreviations tests', () => {
  const simpleEntry = {
    word: 'hval-reið',
    definitions: [
      'f. = hvalreki, Lv. 58.',
    ],
    slug: 'hval-reid',
  }

  test('Gets object of abbreviations with expected keys', () => {
    const abbreviations = getAbbreviations(simpleEntry)

    expect(isObject(abbreviations)).toBeTruthy()
    expect(hasProperty(abbreviations, 'common')).toBeTruthy()
    expect(hasProperty(abbreviations, 'works')).toBeTruthy()
    expect(isArray(abbreviations.common)).toBeTruthy()
    expect(isArray(abbreviations.works)).toBeTruthy()
  })

  test('Abbreviations have expected content', () => {
    const { common, works } = getAbbreviations(simpleEntry)

    const expectedAbbrs = [
      {
        abbreviation: 'f.',
        explanation: 'feminine.',
      },
      {
        abbreviation: 'v.',
        explanation: 'vide.',
      },
    ]

    const expectedWorks = [
      {
        abbreviation: 'Lv.',
        explanation: 'Ljósvetninga Saga. (D. II.)',
      },
    ]

    expect(common).toEqual(expectedAbbrs)
    expect(works).toEqual(expectedWorks)
  })
})
