import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import Head from 'components/Head'
import { getByLetter, getWord } from 'lib/services/dictionary'

describe('Head component', () => {
  describe('Letter head', () => {
    test('Does not crash', () => {
      const aWords = getByLetter('a').slice(0, 10)
      const div = document.createElement('div')
      const root = ReactDOM.createRoot(div)
      root.render(<Head content={aWords} type="letter" />)
    })

    test('Matches snapshot', () => {
      const aWords = getByLetter('a').slice(0, 10)
      const tree = renderer.create(<Head content={aWords} type="letter" />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Word head', () => {
    const word = getWord('skilja')

    test('Does not crash', () => {
      const div = document.createElement('div')
      const root = ReactDOM.createRoot(div)
      root.render(<Head content={word} type="word" />)
    })

    test('Matches snapshot', () => {
      const tree = renderer.create(<Head content={word} type="word" />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
