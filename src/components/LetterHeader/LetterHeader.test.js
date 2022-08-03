import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import LetterHeader from './index'

describe('LetterHeader component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<LetterHeader letter="a" count={12345} />)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<LetterHeader letter="s" count={60} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Outputs correct count', () => {
    const tree = renderer.create(<LetterHeader letter="s" count={60} />)
    const { root } = tree
    expect(root.findAllByType('small')[1].children.join(' ').includes('60')).toBeTruthy()
  })
})
