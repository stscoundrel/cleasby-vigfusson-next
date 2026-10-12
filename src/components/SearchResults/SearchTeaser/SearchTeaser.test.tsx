import { createRenderer, renderToDOM } from '../../../../tests/helpers/react'
import SearchTeaser from './index'

const word = {
  word: 'aðal-vellir',
  definitions: ['m. pl. = óðalvellir, Rm.'],
  slug: 'adal-vellir',
  foundIn: ['In headword'],
}

describe('Search teaser component', () => {
  test('Does not crash', () => {
    renderToDOM(<SearchTeaser data={word} />)
  })

  test('Matches snapshot', () => {
    const tree = createRenderer(<SearchTeaser data={word} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Has correct label', () => {
    const tree = createRenderer(<SearchTeaser data={word} />)
    const { root } = tree

    expect(root.findByType('a').children).toEqual([word.word])
  })
})
