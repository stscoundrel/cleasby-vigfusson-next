import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import { DictionarySource } from 'scandinavian-dictionary-crosslinker'
import WordDefinition from './index'
import styles from './WordDefinition.module.scss'

const word = {
  word: 'af-burðr',
  definitions: [
    'm. (also spelt abb-), <i>odds, balance, bias, success</i> (cp. bera af, <i>to prevail</i>); kvað honum eigi annat vænna til afburðar, <i>in order to get the better of it,</i> Sd. 166; sá hann at engi varð afburðrinn, <i>they fought ‘aequo Marte,’</i> Sturl. ii. 74; hann ætlaði sér afburð, <i>he meant to keep the odds in his own hand,</i> Ísl. ii. 450; skal nú faraí haustvíking, ok vilda ek, at hon yrði eigi með minnum afburðum, <i>less glorious,</i> Orkn. 464.',
    '<strong>II.</strong> gen. sing. and pl. <strong>afburðar-, a-,</strong> freq. used as a prefix in some COMPDS with the notion of <i>gloriously, with distinction.</i> <strong>afburðar-digr,</strong> adj. <i>very thick</i>, biðr. 24. <strong>afburða-fræknligr,</strong> adj. <i>very gallant,</i> Ísl. ii. 369. <strong>afburðar-járn,</strong> n. <i>excellent iron,</i> Fms. x. 173. <strong>afburðar-maðr,</strong> m. <i>a man of mark,</i> Rb. 316, Orkn. 474, Grett. 133, Finnb. 318. <strong>afburðar-mikill,</strong> adj. <i>conspicuous,</i> Fms. v. 181. <strong>afburðar-skip,</strong> n. <i>a fine ship,</i> Fas. iii. 106. <strong>afburðar-vel,</strong> adv. <i>very well</i>, Hkr. ii. 265, Fms. ix. 515. <strong>afburðar-vænn,</strong> adj. <i>very fine,</i> Fas. i. 182.',
  ],
  slug: 'af-burdr',
}

const wordWithOlderSpellingVariant = {
  word: 'ör-væna',
  definitions: [
    'u, f. anything beyond hope; mér er Sveins á engri stundu örvæna, no hour at which I may not expect Sweyn, Orkn. 412 (örvænt, v. l.); margir menn mæla, at eigi sé örvæna at ek koma þar, that it is not past hope, that …, it may well be that …, Ld. 204.',
  ],
  slug: 'or-vana',
}

const abbreviations = {
  common: [
    {
      abbreviation: 'f.',
      explanation: 'feminine.',
    },
    {
      abbreviation: 'n.',
      explanation: 'neuter.',
    },
  ],
  works: [
    {
      abbreviation: 'Björn',
      explanation: 'Biörn Halldórsson.',
    },
  ],
}

const crosslinks = [
  {
    url: 'https://old-icelandic.vercel.app/word/fadir',
    source: DictionarySource.OldIcelandic,
  },
  {
    url: 'https://old-norwegian-dictionary.vercel.app/word/fadir',
    source: DictionarySource.OldNorwegian,
  },
  {
    url: 'https://old-swedish-dictionary.vercel.app/word/fadhir',
    source: DictionarySource.OldSwedish,
  },
]

describe('WordDefinition component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(
      <WordDefinition
        entry={word}
        abbreviations={abbreviations}
        similarEntries={[]}
        crosslinks={crosslinks}
      />,
    )
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(
      <WordDefinition
        entry={word}
        abbreviations={abbreviations}
        similarEntries={[]}
        crosslinks={crosslinks}
      />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Matches snapshot (older spelling variant)', () => {
    const tree = renderer.create(
      <WordDefinition
        entry={wordWithOlderSpellingVariant}
        similarEntries={[]}
        abbreviations={abbreviations}
        crosslinks={crosslinks}
      />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Has correct label', () => {
    const tree = renderer.create(
      <WordDefinition
        entry={word}
        abbreviations={abbreviations}
        similarEntries={[]}
        crosslinks={crosslinks}
      />,
    )
    const { root } = tree

    expect(root.findByType('h1').children).toEqual(['Af-burðr'])
  })

  test('Has correct amount of definitions', () => {
    const tree = renderer.create(
      <WordDefinition
        entry={word}
        abbreviations={abbreviations}
        similarEntries={[]}
        crosslinks={crosslinks}
      />,
    )
    const { root } = tree

    expect(root.findAllByProps({ className: styles.definitionList }).length).toEqual(2)
  })
})
