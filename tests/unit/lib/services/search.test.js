import { isArray } from 'volva'
import { hasProperty } from 'spyrjari'
import { getAllWords } from 'lib/services/dictionary'
import { searchDictionary } from 'lib/services/search'

describe('Search tests', () => {
  const dictionary = getAllWords()

  test('Returns array of results', () => {
    const result = searchDictionary('skilja', dictionary)

    expect(isArray(result)).toBeTruthy()
  })

  test('Results contain foundIn statement', () => {
    const result = searchDictionary('skilja', dictionary)

    result.forEach((entry) => {
      expect(hasProperty(entry, 'foundIn')).toBeTruthy()
    })
  })

  test('Returns results in correct formatting', () => {
    const result = searchDictionary('abbadís', dictionary)

    const expected = {
      word: 'abbadís',
      definitions: ['f. <i>abbess.</i> Hkr. iii. 398, Fms. vii. 239, Gþl. 365.'],
      slug: 'abbadis',
      foundIn: [
        'In headword: <mark>abbadís</mark>',
      ],
    }

    expect(result[0]).toEqual(expected)
  })

  test('Finds results from descriptions', () => {
    const result = searchDictionary('f. <i>abbess.</i>', dictionary)

    const expected = {
      word: 'abbadís',
      definitions: ['f. <i>abbess.</i> Hkr. iii. 398, Fms. vii. 239, Gþl. 365.'],
      slug: 'abbadis',
      foundIn: [
        '<mark><abbr title="feminine.">f.</abbr> <i>abbess.</i></mark> <abbr title="Heimskringla. (E. I.)">Hkr.</abbr> iii. 398, <abbr title="Fornmanna Sögur. (E. I.)">Fms.</abbr> vii. 239, Gþ<abbr title="line.">l.</abbr> 365.',
      ],
    }

    expect(result[0]).toEqual(expected)
  })

  test('Finds results from slug', () => {
    const result = searchDictionary('adal-vellir', dictionary)

    const expected = {
      word: 'aðal-vellir',
      definitions: ['m. pl. = óðalvellir, Rm.'],
      slug: 'adal-vellir',
      foundIn: [
        'In headword: aðal-vellir',
      ],
    }

    expect(result[0]).toEqual(expected)
  })
})
