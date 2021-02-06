import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Seach from './index'

describe('Search component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Seach />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<Seach />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
