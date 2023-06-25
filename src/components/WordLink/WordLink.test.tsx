import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import WordLink from './index'

const word = {
  word: 'af-burðr',
  slug: 'af-burdr',
}

describe('WordLink component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<WordLink data={word} />)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<WordLink data={word} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Has correct label', () => {
    const tree = renderer.create(<WordLink data={word} />)
    const { root } = tree

    expect(root.findByType('a').children).toEqual([word.word])
  })
})
