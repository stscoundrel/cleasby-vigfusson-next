import {
  DictionaryEntry,
} from 'lib/services/dictionary'
import {
  getCrossLinks,
} from 'lib/services/crosslinks'

// Entry which does not produce crosslink matches.
const entry1: DictionaryEntry = {
  word: 'loremipsum',
  definitions: [],
  slug: 'aremark',
}

// Dummy entry which produces cross links
const entry2: DictionaryEntry = {
  word: '',
  definitions: [],
  slug: 'fadir',

}

describe('Crosslinks service tests', () => {
  test('Returns empty list when no crosslinks results', () => {
    const result = getCrossLinks(entry1)
    expect(result.length).toEqual(0)
  })

  test('Returns crosslinks when slugs match', () => {
    const expected = [
      {
        url: 'https://old-icelandic.vercel.app/word/fadir',
        source: 'old-icelandic'
      },
      {
        url: 'https://old-norwegian-dictionary.vercel.app/word/fadir',
        source: 'old-norwegian'
      },
      {
        url: 'https://old-swedish-dictionary.vercel.app/word/fadhir',
        source: 'old-swedish'
      }
    ]


    const result = getCrossLinks(entry2)
    expect(result).toEqual(expected)
  })
})
