import { createRenderer, renderToDOM } from '../../../tests/helpers/react'
import ContentArea from './index'

describe('ContentArea component', () => {
  test('Does not crash', () => {
    renderToDOM(<ContentArea>Content</ContentArea>)
  })

  test('Matches snapshot', () => {
    const tree = createRenderer(<ContentArea>Content</ContentArea>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
