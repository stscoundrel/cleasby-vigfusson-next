import ReactDOM from 'react-dom/client'
import SampleText from './index'

describe('SampleText component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<SampleText />)
  })
})
