import { getByLetter } from 'lib/services/dictionary'
import { getWordLink, getLetterLink } from 'lib/utils/links'

describe('Link utils', () => {
  const dictionary = getByLetter('æ')
  process.env.NEXT_PUBLIC_SITE_URL = 'https://cleasbyvigfusson.test'

  test('Formats word links', () => {
    const expected = 'https://cleasbyvigfusson.test/word/aedi-vindr'

    const result = getWordLink(dictionary[15])

    expect(result).toEqual(expected)
  })

  test('Formats letter links', () => {
    const expected = 'https://cleasbyvigfusson.test/letter/ae'

    const result = getLetterLink('æ')

    expect(result).toEqual(expected)
  })
})
