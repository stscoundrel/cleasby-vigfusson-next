import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
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
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<Search letters={getAlphabet()} />)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<Search letters={getAlphabet()} />).toJSON()
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
