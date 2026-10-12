import { createRenderer, renderToDOM } from '../../../tests/helpers/react'
import LetterHeader from './index'

describe('LetterHeader component', () => {
  test('Does not crash', () => {
    renderToDOM(<LetterHeader letter="a" count={12345} />)
  })

  test('Matches snapshot', () => {
    const tree = createRenderer(<LetterHeader letter="s" count={60} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Matches snapshot - special formatting for "Ö"', () => {
    const tree = createRenderer(
      <LetterHeader letter="ö" count={666} />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Outputs correct count', () => {
    const tree = createRenderer(<LetterHeader letter="s" count={60} />)
    const { root } = tree
    expect(
      root.findAllByType('small')[1].children.join(' ').includes('60'),
    ).toBeTruthy()
  })
})
