import { createRenderer, renderToDOM } from '../../helpers/react'
import Sources, { getStaticProps } from 'pages/source-list'
import { getAlphabet } from 'lib/services/dictionary'
import { getAllSorces } from 'lib/services/abbreviations'

describe('Sources page', () => {
  test('Does not crash', () => {
    renderToDOM(<Sources letters={getAlphabet()} sources={getAllSorces()} />)
  })

  test('Matches snapshot', () => {
    const tree = createRenderer(
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
