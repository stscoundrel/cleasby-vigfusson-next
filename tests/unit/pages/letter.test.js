import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import Letter, { getStaticProps, getStaticPaths } from 'pages/letter/[letter]'
import { getByLetter, getAlphabet } from 'lib/services/dictionary'

describe('Letter page: render', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<Letter words={getByLetter('a')} letters={getAlphabet()} letter={ { letter: 'e', slug: 'e' } } />)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<Letter words={getByLetter('a')} letters={getAlphabet()} letter={ { letter: 'e', slug: 'e' } } />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Returns null if words are unavailable', () => {
    const tree = renderer.create(<Letter words={null} letters={getAlphabet()} letter="e" />).toJSON()
    expect(tree).toBeNull()
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
        letter: { letter: 'a', slug: 'a' },
      },
    }

    const result = await getStaticProps({ params: { letter: 'a' } })

    expect(result).toEqual(expected)
  })
})
