import ReactDOM from 'react-dom/client'
import Sources, { getStaticProps } from 'pages/source-list'
import renderer from 'react-test-renderer'
import { getAlphabet } from 'lib/services/dictionary'
import { getAllSorces } from 'lib/services/abbreviations'

describe('Sources page', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<Sources letters={getAlphabet()} sources={getAllSorces()} />)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(
        <Sources letters={getAlphabet()} sources={getAllSorces()} />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Sources page: data fetching', () => {
  test('getStaticProps works', async () => {
    const expected = {
      props: {
        letters: getAlphabet(),
        sources: getAllSorces(),
      },
    }

    const result = await getStaticProps()

    expect(result).toEqual(expected)
  })
})
