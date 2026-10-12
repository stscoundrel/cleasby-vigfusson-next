import { createRenderer, renderToDOM } from '../../../tests/helpers/react'
import LetterLink from './index'

describe('LetterLink component', () => {
  test('Does not crash', () => {
    renderToDOM(<LetterLink letter={{ letter: 's', slug: 's' }} />)
  })

  test('Matches snapshot', () => {
    const tree = createRenderer(
      <LetterLink letter={{ letter: 's', slug: 's' }} />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
