import ReactDOM from 'react-dom'
import Index from 'pages/index'
import renderer from 'react-test-renderer'
import { getAllWords, getAlphabet } from 'lib/services/dictionary'

describe('Index page', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Index words={getAllWords().slice(0, 100)} letters={getAlphabet()} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<Index words={getAllWords()} letters={getAlphabet()} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
