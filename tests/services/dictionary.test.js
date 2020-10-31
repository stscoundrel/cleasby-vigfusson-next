import { getDictionary } from 'cleasby-vigfusson-dictionary'
import { getAllWords, getByLetter } from 'lib/services/dictionary'

describe('Dictionary tests', () => {
  test('Gets array of words', () => {
    const dictionary = getAllWords()

    expect(Array.isArray(dictionary)).toBeTruthy()
  })

  test('Dictionary is not identical with original source.', () => {
    const originalDictionary = getDictionary()
    const dictionary = getAllWords()

    expect(originalDictionary).not.toMatchObject(dictionary)
  })

  test('Dictionary has added url slugs to source', () => {
    const dictionary = getAllWords()

    dictionary.forEach((entry) => {
      expect(Object.keys(entry)).toEqual(['word', 'definitions', 'slug'])
    })
  })

  test('Dictionary gets words by letter', () => {
    const aWords = getByLetter('a')
    const þWords = getByLetter('þ')

    aWords.forEach((entry) => {
      expect(entry.word.charAt(0)).toBe('a')
    })

    þWords.forEach((entry) => {
      expect(entry.word.charAt(0)).toBe('þ')
    })
  })
})
