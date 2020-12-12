import ReactDOM from 'react-dom'
import Footer from 'components/Footer'
import renderer from 'react-test-renderer'
import { getAlphabet } from 'lib/services/dictionary'

const letters = getAlphabet()

describe('Footer component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Footer letters={letters}/>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<Footer letters={letters} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
