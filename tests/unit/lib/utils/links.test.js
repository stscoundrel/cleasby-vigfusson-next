import { getWordLink, getLetterLink } from 'lib/utils/links'

describe('Link utils', () => {
  process.env.NEXT_PUBLIC_SITE_URL = 'https://cleasbyvigfusson.test'

  const word = {
    word: 'af-búð',
    definitions: [
      'f. <i>an ‘off-booth,’ side-booth, apartment,</i> Korm. 116.',
    ],
    slug: 'af-bud',
  }

  test('Formats word links', () => {
    const expected = 'https://cleasbyvigfusson.test/word/af-bud'

    const result = getWordLink(word)

    expect(result).toEqual(expected)
  })

  test('Formats letter links', () => {
    const expected = 'https://cleasbyvigfusson.test/letter/ae'

    const result = getLetterLink({ letter: 'æ', slug: 'ae' })

    expect(result).toEqual(expected)
  })
})
