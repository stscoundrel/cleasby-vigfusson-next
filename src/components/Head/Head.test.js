import { createRenderer, renderToDOM } from '../../../tests/helpers/react'
import Head from 'components/Head'
import { getByLetter, getWord } from 'lib/services/dictionary'

describe('Head component', () => {
  describe('Letter head', () => {
    test('Does not crash', () => {
      const aWords = getByLetter('a').slice(0, 10)
      renderToDOM(<Head content={aWords} type="letter" />)
    })

    test('Matches snapshot', () => {
      const aWords = getByLetter('a').slice(0, 10)
      const tree = createRenderer(
        <Head content={aWords} type="letter" />,
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Word head', () => {
    const word = getWord('skilja')

    test('Does not crash', () => {
      renderToDOM(<Head content={word} type="word" />)
    })

    test('Matches snapshot', () => {
      const tree = createRenderer(<Head content={word} type="word" />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
