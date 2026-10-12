import { createRenderer, renderToDOM } from '../../../tests/helpers/react'
import { DictionaryEntry } from 'lib/services/dictionary'
import WordLink from './index'

const word: DictionaryEntry = {
  word: 'af-burðr',
  slug: 'af-burdr',
  definitions: [],
}

describe('WordLink component', () => {
  test('Does not crash', () => {
    renderToDOM(<WordLink data={word} useLowerCase={false} />)
  })

  test('Matches snapshot', () => {
    const tree = createRenderer(
      <WordLink data={word} useLowerCase={false} />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Has correct label', () => {
    const tree = createRenderer(<WordLink data={word} useLowerCase={false} />)
    const { root } = tree

    expect(root.findByType('a').children).toEqual([word.word])
  })
})
