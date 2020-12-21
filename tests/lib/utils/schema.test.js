import { getByLetter } from 'lib/services/dictionary'
import { getSchema } from 'lib/utils/schema'

describe('Schema structure tests', () => {
  const dictionary = getByLetter('æ')
  process.env.NEXT_PUBLIC_SITE_URL = 'https://cleasbyvigfusson.test'

  test('Handles "word" Schema', () => {
    const expected = JSON.stringify(
      {
        '@context': 'https://schema.org/',
        '@type': 'DefinedTerm',
        '@id': 'https://cleasbyvigfusson.test/word/aefin-liga',
        name: 'Cleasby & Vigfusson Dictionary - Æfin-liga',
        description: 'adv. for ever, Dan. evindeligen, Fms. i. 140, x. 13, Stj. 64, Gþl. 3, freq. in mod. usage.',
        inDefinedTermSet: 'https://cleasbyvigfusson.test',
      },
    )

    const result = getSchema(dictionary[15], 'word')

    expect(result).toEqual(expected)
  })

  test('Handles "letter" Schema', () => {
    const expected = JSON.stringify(
      [
        {
          '@context': 'https://schema.org/',
          '@type': 'DefinedTermSet',
          '@id': 'https://cleasbyvigfusson.test/letter/ae',
          name: 'Cleasby & Vigfusson Dictionary - Æ',
          description: 'Old Norse words starting with letter Æ',
        },
        {
          '@context': 'https://schema.org/',
          '@type': 'DefinedTerm',
          '@id': 'https://cleasbyvigfusson.test/word/aefin-liga',
          name: 'Cleasby & Vigfusson Dictionary - Æfin-liga',
          description: 'adv. for ever, Dan. evindeligen, Fms. i. 140, x. 13, Stj. 64, Gþl. 3, freq. in mod. usage.',
          inDefinedTermSet: 'https://cleasbyvigfusson.test',
        },
        {
          '@context': 'https://schema.org/',
          '@type': 'DefinedTerm',
          '@id': 'https://cleasbyvigfusson.test/word/aefin-ligr',
          name: 'Cleasby & Vigfusson Dictionary - Æfin-ligr',
          description: 'adj. (euenligr, Stj. 7), everlasting, Fms. x. 114, Stj. 46, 279; land ok þegna ok æfinligan skatt, Fms. x. 114; chiefly in a secular sense, eilífr being used in a spiritual and eccl. sense.',
          inDefinedTermSet: 'https://cleasbyvigfusson.test',
        },
      ],
    )

    const result = getSchema(dictionary.slice(15, 17), 'letter')

    expect(result).toEqual(expected)
  })

  test('Handles "breadcrumbs" Schema', () => {
    const expected = JSON.stringify(
      {
        '@context': 'https://schema.org/',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'First breadcrumb',
            item: 'https://cleasbyvigfusson.test/first-link',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Second breadcrumb',
            item: 'https://cleasbyvigfusson.test/second-link',
          },
        ],
      },
    )

    const breadcrumbs = [
      {
        label: 'First breadcrumb',
        url: '/first-link',
      },
      {
        label: 'Second breadcrumb',
        url: '/second-link',
      },
    ]
    const result = getSchema(breadcrumbs, 'breadcrumbs')

    expect(result).toEqual(expected)
  })

  test('Handles "default" Schema', () => {
    const expected = JSON.stringify(
      {
        '@context': 'https://schema.org/',
        '@type': 'DefinedTermSet',
        '@id': 'https://cleasbyvigfusson.test',
        name: 'Cleasby & Vigfusson Dictionary',
        description: 'Old Norse words with English definitions',
      },
    )

    const result = getSchema()

    expect(result).toEqual(expected)
  })
})
