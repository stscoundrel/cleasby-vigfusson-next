import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import LoadingSpinner from './index'

describe('Loading spinner component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<LoadingSpinner />)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<LoadingSpinner />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
