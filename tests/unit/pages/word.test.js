import ReactDOM from 'react-dom/client'
import Word, { getStaticProps, getStaticPaths } from 'pages/word/[word]'
import renderer from 'react-test-renderer'
import { getAlphabet } from 'lib/services/dictionary'

const mockHandler = jest.fn()

/**
 * Mock router
 */
jest.mock('next/router', () => ({
  useRouter() {
    return {
      locale: undefined,
      defaultLocale: undefined,
      asPath: '/test',
      back: mockHandler,
    }
  },
}))

describe('Word page: render & usage', () => {
  const word = {
    word: 'Völva',
    definitions: [
      'u, f., also spelt völfa, gen. völu, pl. völur; völfu. or also völfur or voluur; gen. pl. does not occur; the nom. Vala is erroneous: [the etymology as well as the origin of this word is uncertain; but may not the Norse Völva and the Gr. σίβυλλα be relations? the identity in sense at least is very striking; the Gr. word first occurs in Aristoph., and then in Plato; may it not have been adopted from some Scythian tribe, for a word like this, if Greek, could hardly fail to occur in Homer? in völva an initial s, we suppose, has been lost (qs. svölva); in the Greek the ĭ would be an inserted vowel]:—a prophetess, sibyl, wise woman; völva, seiðkona, spákona (qq. v.) are synonymous. The ancient Sagas contain many remarkable records of the heathen wise-women or sibyls, who were held in honour and reverence; at the great feasts and sacrifices in the autumn, the völva (often a woman of rank) went with her troop of maidens through the country, where she, so to say, crowned the feast; she was seated on a high seat (seiðhjallr) in the hall, where she wrought her spells and sang her ‘weird-songs’ (varðlokur), after which the guests went past her one by one, and she told each his fate, or whatever else one wanted to know, e. g. the course of the coming winter and the like. The former part of the Völuspá is evidently conceived as the inspired song of a völva, seated on her high seat, and addressing Odin, while the gods listen to her words; and the latter part of the poem appears to be a kind of necromancy, or the raising of a dead völva, as also is the lay Vegtamskviða; sú kona var þar í bygð er Þorbjörg hét, ok var kölluð lítil völva, hón hafði áttar sér níu systr, ok vóru allar spákonur, en hón var ein þá á lífi, þat var háttr Þorbjargar um vetrum, at hón fór á veizlur ok buðu þeir menn henni mest heim er forvitni var á at vita forlög sín eða árferð, Þorf. Karl. Names of such wise women, Gróa völva, Edda; Heimlaug völva, Gullþ.; Heiðr völva, Landn. 173; Huldr völva, Yngl. S., Hkr. i. 21; to which add the ‘Weleda’ of Tacitus: class. passages are Þorf. S. ch. 3 (exceedingly interesting), Örvar-Odds S. ch. 3 (Fas. ii. 506), Vd. ch. 10: völu vél-spá, Vsp.; eru völfur allar frá Víðólfi, Hdl.; völva ok vís kona. Vtkv.; þá kom til völva sú er Gróa hét, Edda 58; var á því landi spákona sú er sagði fyrir örlög manna, … þeir fara til móts við völunna, Fb. ii. 28; ek fór í skóg til þín í völvu líki, Fas. i. 135; þóttusk menn vita at þar mundi verst hafa völu-leiði, Ld. 328; þá reið Óðinn fyrir austan dyrr þar er hann vissi völu leiði, Vtkv.; úrsvöl Gýmis völva, of Rán the goddess, Edda (in a verse); at hás völva valdi því bölvi, Kormak; in a bad sense, völva and skollvis kona, Hkv. 1. 34; Tacitus (Germ. ch. 8, 46, and Hist. iv. 61, 65, v. 22, 24) speaks of these practices, as also does Plutarch, Caesar ch. 19,— τα μαντεύματα των ἱερων γυναικων.',
      'COMPDS: Völuspá, Völvustaðir.',
    ],
    slug: 'volva',
  }

  const abbreviations = {
    common: [
      {
        abbreviation: 'ch.',
        explanation: 'chapter.',
      },
      {
        abbreviation: 'f.',
        explanation: 'feminine.',
      },
    ],
    works: [],
  }

  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(
      <Word entry={word} letters={getAlphabet()} abbreviations={abbreviations} />,
    )
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(
      <Word entry={word} letters={getAlphabet()} abbreviations={abbreviations} />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Returns null if entry is unavailable', () => {
    const tree = renderer.create(
      <Word entry={null} letters={getAlphabet()} abbreviations={abbreviations} />,
    ).toJSON()
    expect(tree).toBeNull()
  })

  test('Back button works', async () => {
    const tree = renderer.create(
      <Word entry={word} letters={getAlphabet()} abbreviations={abbreviations} />,
    )

    // Click back btn.
    await renderer.act(async () => {
      expect(mockHandler).not.toHaveBeenCalled()
      await tree.root.findByProps({ text: 'Back' }).props.action()

      // Assert mockrouter received a push.
      expect(mockHandler).toHaveBeenCalled()
      expect(mockHandler.mock.calls.length).toBe(1);
    })
  })
})

describe('Word page: data fetching', () => {
  test('getStaticPaths works', async () => {
    const expected = {
      paths: [],
      fallback: 'blocking',
    }

    const result = await getStaticPaths()

    expect(result).toMatchObject(expected)
  })

  test('getStaticProps works', async () => {
    const expected = {
      props: {
        entry: {
          word: 'stækja',
          definitions: ['u, f. <i>a bad stench.</i>'],
          slug: 'staekja',
        },
        abbreviations: {
          common: [
            {
              abbreviation: 'ch.',
              explanation: 'chapter.',
            },
            {
              abbreviation: 'f.',
              explanation: 'feminine.',
            },
          ],
          works: [],
        },
        letters: getAlphabet(),
      },
    }

    const result = await getStaticProps({ params: { word: 'staekja' } })

    expect(result).toEqual(expected)
  })

  test('getStaticProps returns 404 redirect for unkown words', async () => {
    const expected = {
      props: {},
      notFound: true,
    }

    const result = await getStaticProps({ params: { word: 'loremipsum' } })

    expect(result).toEqual(expected)
  })
})
