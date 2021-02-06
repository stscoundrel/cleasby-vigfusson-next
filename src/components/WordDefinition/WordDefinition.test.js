import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import WordDefinition from './index'

const word = {
  word: 'af-burðr',
  definitions: [
    'm. (also spelt abb-), <i>odds, balance, bias, success</i> (cp. bera af, <i>to prevail</i>); kvað honum eigi annat vænna til afburðar, <i>in order to get the better of it,</i> Sd. 166; sá hann at engi varð afburðrinn, <i>they fought ‘aequo Marte,’</i> Sturl. ii. 74; hann ætlaði sér afburð, <i>he meant to keep the odds in his own hand,</i> Ísl. ii. 450; skal nú faraí haustvíking, ok vilda ek, at hon yrði eigi með minnum afburðum, <i>less glorious,</i> Orkn. 464.',
    '<strong>II.</strong> gen. sing. and pl. <strong>afburðar-, a-,</strong> freq. used as a prefix in some COMPDS with the notion of <i>gloriously, with distinction.</i> <strong>afburðar-digr,</strong> adj. <i>very thick</i>, biðr. 24. <strong>afburða-fræknligr,</strong> adj. <i>very gallant,</i> Ísl. ii. 369. <strong>afburðar-járn,</strong> n. <i>excellent iron,</i> Fms. x. 173. <strong>afburðar-maðr,</strong> m. <i>a man of mark,</i> Rb. 316, Orkn. 474, Grett. 133, Finnb. 318. <strong>afburðar-mikill,</strong> adj. <i>conspicuous,</i> Fms. v. 181. <strong>afburðar-skip,</strong> n. <i>a fine ship,</i> Fas. iii. 106. <strong>afburðar-vel,</strong> adv. <i>very well</i>, Hkr. ii. 265, Fms. ix. 515. <strong>afburðar-vænn,</strong> adj. <i>very fine,</i> Fas. i. 182.',
  ],
  slug: 'af-burdr',
}

describe('WordDefinition component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<WordDefinition data={word} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<WordDefinition data={word} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Has correct label', () => {
    const tree = renderer.create(<WordDefinition data={word} />)
    const { root } = tree

    expect(root.findByType('h1').children).toEqual(['Af-burðr'])
  })

  test('Has correct amount of definitions', () => {
    const tree = renderer.create(<WordDefinition data={word} />)
    const { root } = tree

    expect(root.findAllByType('dt').length).toEqual(2)
  })
})
