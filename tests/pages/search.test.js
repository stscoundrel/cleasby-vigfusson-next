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

  test('Does not crash with given query', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Search words={getAllWords().slice(0, 100)} query='afar-breidr' />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<Search words={getAllWords()} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Matches snapshot with given query', () => {
    const tree = renderer.create(<Search words={getAllWords()} query='afar-breidr' />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
