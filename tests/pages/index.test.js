import ReactDOM from 'react-dom'
import Index from 'pages/index'
import renderer from 'react-test-renderer'
import { getAllWords } from 'lib/services/dictionary'

describe('Index page', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Index />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<Index words={getAllWords()} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
