import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import WordList from './index'

const words = [
  {
    word: 'af-burðr',
    definitions: [
      'm. (also spelt abb-), <i>odds, balance, bias, success</i> (cp. bera af, <i>to prevail</i>); kvað honum eigi annat vænna til afburðar, <i>in order to get the better of it,</i> Sd. 166; sá hann at engi varð afburðrinn, <i>they fought ‘aequo Marte,’</i> Sturl. ii. 74; hann ætlaði sér afburð, <i>he meant to keep the odds in his own hand,</i> Ísl. ii. 450; skal nú faraí haustvíking, ok vilda ek, at hon yrði eigi með minnum afburðum, <i>less glorious,</i> Orkn. 464.',
      '<strong>II.</strong> gen. sing. and pl. <strong>afburðar-, a-,</strong> freq. used as a prefix in some COMPDS with the notion of <i>gloriously, with distinction.</i> <strong>afburðar-digr,</strong> adj. <i>very thick</i>, biðr. 24. <strong>afburða-fræknligr,</strong> adj. <i>very gallant,</i> Ísl. ii. 369. <strong>afburðar-járn,</strong> n. <i>excellent iron,</i> Fms. x. 173. <strong>afburðar-maðr,</strong> m. <i>a man of mark,</i> Rb. 316, Orkn. 474, Grett. 133, Finnb. 318. <strong>afburðar-mikill,</strong> adj. <i>conspicuous,</i> Fms. v. 181. <strong>afburðar-skip,</strong> n. <i>a fine ship,</i> Fas. iii. 106. <strong>afburðar-vel,</strong> adv. <i>very well</i>, Hkr. ii. 265, Fms. ix. 515. <strong>afburðar-vænn,</strong> adj. <i>very fine,</i> Fas. i. 182.',
    ],
    slug: 'af-burdr',
  },
  {
    word: 'af-búð',
    definitions: [
      'f. <i>an ‘off-booth,’ side-booth, apartment,</i> Korm. 116.',
    ],
    slug: 'af-bud',
  },
  {
    word: 'af-dalr',
    definitions: [
      'm. <i>an ‘off-dale,’ remote valley;</i> freq. in tales and rhymes of <i>hidden valleys,</i> esp. in pl., e. g. Hvað hét hundr karls er í afdölum bjó, in a nursery rhyme, K. Þ. K. 38, Fms. v. 183.',
    ],
    slug: 'af-dalr',
  },
  {
    word: 'af-deilingr',
    definitions: [
      'm. <i>part, portion, share,</i> Bs. i. 881.',
    ],
    slug: 'af-deilingr',
  },
  {
    word: 'af-dráttr',
    definitions: [
      'm. [draga af, <i>to detract</i>], <i>diminution, deduction,</i> Ann. 1358 (of <i>duties, fines</i>), Dipl. i. 7, Jm. 135 <i>= costs.</i>',
      '<strong>β.</strong> in arithmetic, <i>subtraction,</i> Alg. 358, now frádragning.',
    ],
    slug: 'af-drattr',
  },
]

describe('WordList component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<WordList words={words} />)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<WordList words={words} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Renders correct amount of words', () => {
    const tree = renderer.create(<WordList words={words} />)
    const { root } = tree

    expect(root.findAllByType('ul').length).toEqual(1)
    expect(root.findAllByType('li').length).toEqual(5)
  })
})
