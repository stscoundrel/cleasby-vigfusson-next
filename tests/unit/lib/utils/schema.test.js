import { getSchema } from 'lib/utils/schema'

describe('Schema structure tests', () => {
  process.env.NEXT_PUBLIC_SITE_URL = 'https://cleasbyvigfusson.test'

  const words = [
    {
      word: 'af-dalr',
      definitions: [
        'm. <i>an ‘off-dale,’ remote valley;</i> freq. in tales and rhymes of <i>hidden valleys,</i> esp. in pl., e. g. Hvað hét hundr karls er í afdölum bjó, in a nursery rhyme, K. Þ. K. 38, Fms. v. 183.',
      ],
      slug: 'af-dalr',
    },
    {
      word: 'af-búð',
      definitions: [
        'f. <i>an ‘off-booth,’ side-booth, apartment,</i> Korm. 116.',
      ],
      slug: 'af-bud',
    },
  ]

  test('Handles "word" Schema', () => {
    const expected = JSON.stringify(
      {
        '@context': 'https://schema.org/',
        '@type': 'DefinedTerm',
        '@id': 'https://cleasbyvigfusson.test/word/af-bud',
        name: 'Cleasby & Vigfusson Dictionary - Af-búð',
        description: 'f. an ‘off-booth,’ side-booth, apartment, Korm. 116.',
        inDefinedTermSet: 'https://cleasbyvigfusson.test',
      },
    )

    const result = getSchema(words[1], 'word')

    expect(result).toEqual(expected)
  })

  test('Handles "letter" Schema', () => {
    const expected = JSON.stringify(
      {
        '@context': 'https://schema.org/',
        '@type': 'DefinedTermSet',
        '@id': 'https://cleasbyvigfusson.test/letter/a',
        name: 'Cleasby & Vigfusson Dictionary - Letter A',
        description: 'Old Norse words starting with letter A',
      },
    )

    const result = getSchema(words, 'letter')

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
