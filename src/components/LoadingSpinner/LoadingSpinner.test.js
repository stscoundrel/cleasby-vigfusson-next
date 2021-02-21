import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import LoadingSpinner from './index'

describe('Loading spinner component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LoadingSpinner />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<LoadingSpinner />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
