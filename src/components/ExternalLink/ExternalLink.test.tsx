import { createRenderer, renderToDOM } from '../../../tests/helpers/react'
import ExternalLink from './index'

describe('ExternalLink component', () => {
  test('Does not crash', () => {
    renderToDOM(
      <ExternalLink title="Other site" href="www.takemeontheotherside.com" />,
    )
  })

  test('Matches snapshot', () => {
    const tree = createRenderer(
      <ExternalLink title="Other site" href="www.takemeontheotherside.com" />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Has correct title', () => {
    const tree = createRenderer(
      <ExternalLink title="Other site" href="www.takemeontheotherside.com" />,
    )
    const { root } = tree

    expect(root.findByType('a').children).toEqual(['Other site'])
  })

  test('Has correct url', () => {
    const tree = createRenderer(
      <ExternalLink title="Other site" href="www.takemeontheotherside.com" />,
    )

    expect(tree.root.findByType('a').props.href).toEqual(
      'www.takemeontheotherside.com',
    )
  })
})
