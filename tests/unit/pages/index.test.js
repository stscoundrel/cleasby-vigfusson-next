import { createRenderer, renderToDOM } from '../../helpers/react'
import { matchesSchema } from 'jafningjar'
import Index, { getStaticProps } from 'pages/index'
import { getAllWords, getAlphabet } from 'lib/services/dictionary'

describe('Index page', () => {
  test('Does not crash', () => {
    renderToDOM(
      <Index words={getAllWords().slice(0, 100)} letters={getAlphabet()} />,
    )
  })

  test('Matches snapshot', () => {
    const tree = createRenderer(
      <Index words={getAllWords().slice(0, 36)} letters={getAlphabet()} />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Returns null if words are unavailable', () => {
    const tree = createRenderer(
      <Index words={null} letters={getAlphabet()} />,
    ).toJSON()
    expect(tree).toBeNull()
  })
})

describe('Index page: data fetching', () => {
  test('getStaticProps works', async () => {
    const expected = {
      props: {
        words: [],
        letters: [],
      },
    }

    const result = await getStaticProps()

    expect(matchesSchema(result, expected)).toBeTruthy()
  })
})
