import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import Layout from 'components/Layout'
import { getByLetter, getWord, getAlphabet } from 'lib/services/dictionary'

describe('Layout component', () => {
  describe('Letter layout', () => {
    const aWords = getByLetter('a').slice(0, 10)

    test('Does not crash', () => {
      const div = document.createElement('div')
      const root = ReactDOM.createRoot(div)
      root.render(<Layout content={aWords} type="letter" letters={getAlphabet()} />)
    })

    test('Matches snapshot', () => {
      const tree = renderer.create(<Layout content={aWords} type="letter" letters={getAlphabet()} />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Word layout', () => {
    const word = getWord('skilja')

    test('Does not crash', () => {
      const div = document.createElement('div')
      const root = ReactDOM.createRoot(div)
      root.render(<Layout content={word} type="word" letters={getAlphabet()} />)
    })

    test('Matches snapshot', () => {
      const tree = renderer.create(<Layout content={word} type="word" letters={getAlphabet()} />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
