import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import ContentArea from './index'

describe('ContentArea component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ContentArea>Content</ContentArea>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<ContentArea>Content</ContentArea>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
