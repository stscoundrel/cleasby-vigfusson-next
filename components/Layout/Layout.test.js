import ReactDOM from 'react-dom'
import Layout from 'components/Layout'
import renderer from 'react-test-renderer'
import { getByLetter, getWord, getAlphabet } from 'lib/services/dictionary'

describe('Layout component', () => {
  describe('Letter layout', () => {
    const aWords = getByLetter('a').slice(0, 10)

    test('Does not crash', () => {
      const div = document.createElement('div')
      ReactDOM.render(<Layout content={aWords} type="letter" letters={getAlphabet()} />, div)
      ReactDOM.unmountComponentAtNode(div)
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
      ReactDOM.render(<Layout content={word} type="word" letters={getAlphabet()} />, div)
      ReactDOM.unmountComponentAtNode(div)
    })

    test('Matches snapshot', () => {
      const tree = renderer.create(<Layout content={word} type="word" letters={getAlphabet()} />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
