import { getDictionary } from 'cleasby-vigfusson-dictionary'
import { getAllWords, getByLetter, getWord } from 'lib/services/dictionary'

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
})
