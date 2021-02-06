import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import LetterLink from './index'

describe('LetterLink component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LetterLink letter="a" />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<LetterLink letter="s" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
