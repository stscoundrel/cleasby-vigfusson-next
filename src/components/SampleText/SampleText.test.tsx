import { renderToDOM } from '../../../tests/helpers/react'
import SampleText from './index'

describe('SampleText component', () => {
  test('Does not crash', () => {
    renderToDOM(<SampleText />)
  })
})
