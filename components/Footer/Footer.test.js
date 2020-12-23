import ReactDOM from 'react-dom'
import Footer from 'components/Footer'
import renderer from 'react-test-renderer'

const letters = [
  {
    slug: 'a',
    letter: 'A',
  },
  {
    slug: 'b',
    letter: 'B',
  },
]

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
