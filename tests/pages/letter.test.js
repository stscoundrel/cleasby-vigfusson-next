import ReactDOM from 'react-dom'
import Letter, { getStaticProps, getStaticPaths } from 'pages/letter/[letter]'
import renderer from 'react-test-renderer'
import { getByLetter, getAlphabet } from 'lib/services/dictionary'

describe('Letter page: render', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Letter words={getByLetter('a')} letters={getAlphabet()} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<Letter words={getByLetter('a')} letters={getAlphabet()} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Letter page: data fetching', () => {
  test('getStaticPaths works', async () => {
    const expected = {
      paths: getAlphabet().map((letter) => ({
        params: { letter: letter.slug },
      })),
      fallback: false,
    }

    const result = await getStaticPaths()

    expect(result).toEqual(expected)
  })

  test('getStaticProps works', async () => {
    const expected = {
      props: {
        words: getByLetter('a'),
        letters: getAlphabet(),
      },
    }

    const result = await getStaticProps({ params: { letter: 'a' } })

    expect(result).toEqual(expected)
  })
})
