import { createRenderer, renderToDOM } from '../../helpers/react'
import Page404, { getStaticProps } from 'pages/404'
import { getAlphabet } from 'lib/services/dictionary'

describe('404 page page', () => {
  test('Does not crash', () => {
    renderToDOM(<Page404 letters={getAlphabet()} />)
  })

  test('Matches snapshot', () => {
    const tree = createRenderer(<Page404 letters={getAlphabet()} />).toJSON()
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
