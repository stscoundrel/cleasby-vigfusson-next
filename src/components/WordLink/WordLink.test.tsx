import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import { DictionaryEntry } from 'lib/services/dictionary'
import WordLink from './index'

const word: DictionaryEntry = {
  word: 'af-burðr',
  slug: 'af-burdr',
  definitions: [],
}

describe('WordLink component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<WordLink data={word} useLowerCase={false} />)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<WordLink data={word} useLowerCase={false} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Has correct label', () => {
    const tree = renderer.create(<WordLink data={word} useLowerCase={false} />)
    const { root } = tree

    expect(root.findByType('a').children).toEqual([word.word])
  })
})
