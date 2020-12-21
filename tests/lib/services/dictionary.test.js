import { getDictionary } from 'cleasby-vigfusson-dictionary'
import {
  getAllWords, getByLetter, getWord, getAlphabet,
} from 'lib/services/dictionary'
import { isArray } from 'volva'
import { matchesSchema } from 'jafningjar'
import { oldNorseSort } from 'old-norse-alphabet-sort'

describe('Dictionary tests', () => {
  const dictionary = getAllWords()

  test('Gets array of words', () => {
    expect(isArray(dictionary)).toBeTruthy()
  })

  test('Dictionary is not identical with original source.', () => {
    const originalDictionary = getDictionary()

    expect(originalDictionary).not.toMatchObject(dictionary)
  })

  test('Dictionary has added url slugs to source', () => {
    dictionary.forEach((entry) => {
      expect(Object.keys(entry)).toEqual(['word', 'definitions', 'slug'])
    })
  })

  test('Dictionary urls do not start with dashes', () => {
    dictionary.forEach((entry) => {
      expect(entry.slug.charAt(0)).not.toEqual('-')
    })
  })

  test('Dictionary gets words by letter', () => {
    const aWords = getByLetter('a')
    const þWords = getByLetter('þ')

    aWords.forEach((entry) => {
      expect(entry.word.charAt(0).toLowerCase()).toBe('a')
    })

    þWords.forEach((entry) => {
      expect(entry.word.charAt(0).toLowerCase()).toBe('þ')
    })
  })

  test('Dictionary gets individual words by slug', () => {
    const word1 = getWord('af-hlutr')
    const word2 = getWord('rid-volr')
    const word3 = getWord('thogull')

    expect(word1.word.toLowerCase()).toBe('af-hlutr')
    expect(word1.slug).toBe('af-hlutr')
    expect(word1.definitions).toEqual(['m. <i>share of a thing,</i> v. fjár-afhlutr.'])

    expect(word2.word.toLowerCase()).toBe('rið-völr')
    expect(word2.slug).toBe('rid-volr')
    expect(word2.definitions).toEqual(['m. <i>a short round stick,</i> to carry in the hand; tók hann riðvöl í hönd sér, Dropl. 29; hann greip upp riðvöl, ok laust sveininn í höfuðit svá at blóð féll um hann, Hkr. iii. 285.'])

    expect(word3.word.toLowerCase()).toBe('þögull')
    expect(word3.slug).toBe('thogull')
    expect(word3.definitions).toEqual(['adj. <i>silent, of silent habits,</i> Hm. 6; hann var maðr þ., ríklundaðr ok úþýðr, Hkr. i. 28; hann var þögull, ekki nafn festisk við hann, Sæm. 96; hinn þögli áss, Edda 17; Viðars ins þögla, 60; horskr ok þögull, Hm.; sí-þögull, <i>mute;</i> see þagall.'])
  })

  test('Dictionary gets alphabet constants with slugs', () => {
    const alphabet = getAlphabet()

    const expected = {
      letter: '',
      slug: '',
    }

    alphabet.forEach((entry) => {
      expect(matchesSchema(entry, expected)).toBeTruthy()
    })
  })

  test('Dictionary entries are alphabetically sorted', () => {
    const maybeUnsorted = getDictionary()

    const sortedDictionry = [...maybeUnsorted].sort((a, b) => (
      oldNorseSort(a.word, b.word)))

    expect(maybeUnsorted).toEqual(sortedDictionry)
  })
})
