import { createRenderer, renderToDOM } from '../../../tests/helpers/react'
import LoadingSpinner from './index'

describe('Loading spinner component', () => {
  test('Does not crash', () => {
    renderToDOM(<LoadingSpinner />)
  })

  test('Matches snapshot', () => {
    const tree = createRenderer(<LoadingSpinner />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
