import ReactDOM from 'react-dom'
import Footer from 'components/Footer'
import renderer from 'react-test-renderer'

describe('Footer component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Footer />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<Footer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
