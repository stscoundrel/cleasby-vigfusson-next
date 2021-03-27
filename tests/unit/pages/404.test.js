import ReactDOM from 'react-dom'
import Page404, { getStaticProps } from 'pages/404'
import renderer from 'react-test-renderer'
import { getAlphabet } from 'lib/services/dictionary'

describe('404 page page', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Page404 letters={getAlphabet()} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<Page404 letters={getAlphabet()} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('404 page: data fetching', () => {
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
