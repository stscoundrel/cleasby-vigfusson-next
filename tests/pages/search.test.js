import ReactDOM from 'react-dom'
import Search from 'pages/search'
import renderer from 'react-test-renderer'
import { getAllWords } from 'lib/services/dictionary'

describe('Search page', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Search words={getAllWords().slice(0, 100)} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<Search words={getAllWords()} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
