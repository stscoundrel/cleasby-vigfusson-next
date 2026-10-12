import { createRenderer, renderToDOM } from '../../helpers/react'
import Search, { getStaticProps } from 'pages/search'
import { getAlphabet } from 'lib/services/dictionary'

/**
 * Mock router
 */
jest.mock('next/router', () => ({
  useRouter() {
    return {
      query: {},
    }
  },
}))

describe('Search page: render', () => {
  test('Does not crash', () => {
    renderToDOM(<Search letters={getAlphabet()} />)
  })

  test('Matches snapshot', () => {
    const tree = createRenderer(<Search letters={getAlphabet()} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Search page: data fetching', () => {
  test('getStaticProps works', async () => {
    const expected = {
      props: {
        letters: getAlphabet(),
      },
    }

    const result = await getStaticProps()

    expect(result).toEqual(expected)
  })
})
