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
        '@id': 'https://cleasbyvigfusson.test/word/aedi-vindr',
        name: 'Cleasby & Vigfusson Dictionary - Æði-vindr',
        description: 'm. a furious gale, Barl. 150.',
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
          '@id': 'https://cleasbyvigfusson.test/word/aedi-vindr',
          name: 'Cleasby & Vigfusson Dictionary - Æði-vindr',
          description: 'm. a furious gale, Barl. 150.',
          inDefinedTermSet: 'https://cleasbyvigfusson.test',
        },
        {
          '@context': 'https://schema.org/',
          '@type': 'DefinedTerm',
          '@id': 'https://cleasbyvigfusson.test/word/aedr',
          name: 'Cleasby & Vigfusson Dictionary - Æðr',
          description: '1. i. e. œðr, adj. [from vaða, óð], fordable; áin var ó-œð, Bs. i. 349; hón (the river Rhine) var eigi œð, ok engi var brú eða farkostr yfir, Karl. 41.',
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
