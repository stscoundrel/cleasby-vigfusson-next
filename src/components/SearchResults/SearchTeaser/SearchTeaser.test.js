import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import SearchTeaser from './index'

const word = {
  word: 'aðal-vellir',
  definitions: [
    'm. pl. = óðalvellir, Rm.',
  ],
  slug: 'adal-vellir',
  foundIn: [
    'In headword',
  ],
}

describe('Search teaser component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SearchTeaser data={word} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<SearchTeaser data={word} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Has correct label', () => {
    const tree = renderer.create(<SearchTeaser data={word} />)
    const { root } = tree

    expect(root.findByType('a').children).toEqual([word.word])
  })
})
