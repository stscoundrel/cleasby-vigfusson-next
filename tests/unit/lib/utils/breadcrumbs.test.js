import { getBreadcrumbs } from 'lib/utils/breadcrumbs'

describe('Breadcrumb utils', () => {
  test('Formats breadcrumbs for page', () => {
    const expected = [
      {
        label: 'Cleasby & Vigfusson Dictionary',
        url: '/',
      },
    ]

    const input = {
      letter: null,
      word: null,
      type: 'page',
    }

    const result = getBreadcrumbs(input)

    expect(result).toEqual(expected)
  })

  test('Formats breadcrumbs for a letter page', () => {
    const expected = [
      {
        label: 'Cleasby & Vigfusson Dictionary',
        url: '/',
      },
      {
        label: 'Letter Þ',
        url: '/letter/th',
      },
    ]

    const input = {
      letter: 'þ',
      word: null,
      type: 'letter',
    }

    const result = getBreadcrumbs(input)

    expect(result).toEqual(expected)
  })

  test('Formats breadcrumbs for a word page', () => {
    const expected = [
      {
        label: 'Cleasby & Vigfusson Dictionary',
        url: '/',
      },
      {
        label: 'Letter Þ',
        url: '/letter/th',
      },
      {
        label: 'Þægr',
        url: '/word/thaegr',
      },
    ]

    const input = {
      letter: 'þ',
      word: 'þægr',
      type: 'word',
    }

    const result = getBreadcrumbs(input)

    expect(result).toEqual(expected)
  })
})
