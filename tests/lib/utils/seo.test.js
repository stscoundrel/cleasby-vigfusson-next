import { getByLetter } from 'lib/services/dictionary'
import { getSeo } from 'lib/utils/seo'

describe('SEO / meta tags tests', () => {
  const dictionary = getByLetter('a')

  test('Handles "word" seo fields', () => {
    const expected = {
      title: 'Cleasby & Vigfusson Dictionary - Afar-auðigr',
      description: 'Meaning of Old Norse word "afar-auðigr"',
    }

    const result = getSeo(dictionary[10], 'word')

    expect(result).toMatchObject(expected)
  })

  test('Handles "letter" seo fields', () => {
    const expected = {
      title: 'Cleasby & Vigfusson Dictionary - words starting with letter A',
      description: 'Meanings of Old Norse words starting with "A", such as abbadís, abbast, abbindi and aðal-vellir',
    }

    const result = getSeo(dictionary.slice(0, 10), 'letter')

    expect(result).toMatchObject(expected)
  })

  test('Handles default response', () => {
    const expected = {
      title: 'Cleasby & Vigfusson Dictionary - Old Norse to English',
      description: 'Over 35 000 Old Norse words with dictionary definitions',
    }

    const result = getSeo()

    expect(result).toMatchObject(expected)
  })
})
