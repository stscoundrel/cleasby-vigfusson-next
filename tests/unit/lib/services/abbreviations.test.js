import {
  getAbbreviations,
  getSerializableAbbreviations,
  getMapFromSerializedAbbreviations,
} from 'lib/services/abbreviations'

// Test utils.
import { isObject } from 'volva'
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
    expect(abbreviations.common instanceof Map).toBeTruthy()
    expect(abbreviations.works instanceof Map).toBeTruthy()
  })

  test('Abbreviations have expected content', () => {
    const { common, works } = getAbbreviations(simpleEntry)

    const expectedAbbrs = new Map()
    expectedAbbrs.set('f.', 'feminine.')
    expectedAbbrs.set('v.', 'vide.')

    const expectedWorks = new Map()
    expectedWorks.set('Lv.', 'Ljósvetninga Saga. (D. II.)')

    expect(common).toEqual(expectedAbbrs)
    expect(works).toEqual(expectedWorks)
  })

  test('Can serialize & deserialize abbreviation maps.', () => {
    const serializedAbbreviations = getSerializableAbbreviations(simpleEntry)
    const { common, works } = getMapFromSerializedAbbreviations(serializedAbbreviations)

    /**
     * Assert content remained the same through transforms.
     */
    const expectedAbbrs = new Map()
    expectedAbbrs.set('f.', 'feminine.')
    expectedAbbrs.set('v.', 'vide.')

    const expectedWorks = new Map()
    expectedWorks.set('Lv.', 'Ljósvetninga Saga. (D. II.)')

    expect(common).toEqual(expectedAbbrs)
    expect(works).toEqual(expectedWorks)
  })
})
