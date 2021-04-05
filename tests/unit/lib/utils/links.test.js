import { getWordLink, getLetterLink, getCanonicalUrl } from 'lib/utils/links'

describe('Link utils', () => {
  process.env.NEXT_PUBLIC_SITE_URL = 'https://cleasbyvigfusson.test'

  const word = {
    word: 'af-búð',
    definitions: [
      'f. <i>an ‘off-booth,’ side-booth, apartment,</i> Korm. 116.',
    ],
    slug: 'af-bud',
  }

  const letter = {
    letter: 'æ',
    slug: 'ae',
  }

  test('Formats word links', () => {
    const expected = 'https://cleasbyvigfusson.test/word/af-bud'

    const result = getWordLink(word)

    expect(result).toEqual(expected)
  })

  test('Formats letter links', () => {
    const expected = 'https://cleasbyvigfusson.test/letter/ae'

    const result = getLetterLink(letter)

    expect(result).toEqual(expected)
  })

  test('Gets canonical urls', () => {
    const expectedMain = process.env.NEXT_PUBLIC_SITE_URL
    const expectedWord = 'https://cleasbyvigfusson.test/word/af-bud'
    const expectedLetter = 'https://cleasbyvigfusson.test/letter/ae'

    const result1 = getCanonicalUrl(word, 'letter', letter)
    const result2 = getCanonicalUrl(word, 'word')
    const result3 = getCanonicalUrl(null, 'main')

    expect(result1).toEqual(expectedLetter)
    expect(result2).toEqual(expectedWord)
    expect(result3).toEqual(expectedMain)
  })
})
