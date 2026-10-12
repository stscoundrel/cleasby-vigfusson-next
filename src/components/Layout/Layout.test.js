import { createRenderer, renderToDOM } from '../../../tests/helpers/react'
import Layout from 'components/Layout'
import { getByLetter, getWord, getAlphabet } from 'lib/services/dictionary'

describe('Layout component', () => {
  describe('Letter layout', () => {
    const aWords = getByLetter('a').slice(0, 10)

    test('Does not crash', () => {
      renderToDOM(
        <Layout content={aWords} type="letter" letters={getAlphabet()} />,
      )
    })

    test('Matches snapshot', () => {
      const tree = createRenderer(
        <Layout content={aWords} type="letter" letters={getAlphabet()} />,
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Word layout', () => {
    const word = getWord('skilja')

    test('Does not crash', () => {
      renderToDOM(<Layout content={word} type="word" letters={getAlphabet()} />)
    })

    test('Matches snapshot', () => {
      const tree = createRenderer(
        <Layout content={word} type="word" letters={getAlphabet()} />,
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
