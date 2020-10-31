import ReactDOM from 'react-dom'
import Letter from 'pages/letter/[letter]'
import renderer from 'react-test-renderer'
import { getByLetter } from 'lib/services/dictionary'

describe('Letter page', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Letter words={getByLetter('a')} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<Letter words={getByLetter('s')} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
