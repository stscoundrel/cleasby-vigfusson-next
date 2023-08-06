import renderer from 'react-test-renderer'
import { DictionaryEntry } from 'lib/services/dictionary'
import SimilarEntries from './index'

describe('Similar entries component', () => {
  const entries: DictionaryEntry[] = [
    {
      word: 'fadhurlikhet',
      partOfSpeech: [
        'nn',
      ],
      grammaticalAspect: '',
      information: '',
      definitions: [
        '1)  faderligt sinne. til mere kerlex ok faderlighetz jertekn  Lg 3: 562 . ',
        '2)  faderlighet.  " ss titel. som edher fadher lighet vel fortencker " FM 271 (1506, bref från Svante Sture till biskop Lauentius i Åbo). bidhiom vi thina fadhirlikhet  Gr 320 .',
      ],
      alternativeForms: [
        'fadhirlikhet . ',
        'fadherlighet . faderlighet),',
      ],
      slug: 'fadhurlikhet-2',
    },
  ]

  test('Matches the snapshot', () => {
    const tree = renderer.create(
      <SimilarEntries entries={entries} />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
