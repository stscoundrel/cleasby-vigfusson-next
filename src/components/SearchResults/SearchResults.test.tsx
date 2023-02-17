import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import SearchResults from './index'

const words = [
  {
    word: 'AÐAL',
    definitions: [
      '[O. H. G. adal, <i>genus;</i> cp. also A. S. éðele, <i>nobilis;</i> Old Engl. and Scot. <i>ethel;</i> Germ. <i>edel;</i> eðla- and eðal- came from mod. Dan. into Icel. aðall, <i>nobility.</i> It does not occur in old writings in this sense.]',
      '<strong>I.</strong> n. <i>nature, disposition, inborn native quality,</i> used only in poetry; jóðs a., <i>childish,</i> Ýt. 13; ósnotrs aðal, <i>foolish, insipid,</i> Hm. 106; args <i>a., dastardly,</i> Ls. 23, 24; drengs a., <i>noble</i>, Km. 23; ódyggs a., <i>bad</i>, Hsm. 19. 2. in the sense of <i>offspring;</i> aðul Njarðar (where it is n. pl.?), <i>the gods, the offspring of Njord,</i> Hallfred in a poem, vide Fs. 59.',
      '<strong>II.</strong> used in a great many COMPDS, <i>chief-, head-.</i> <strong>aðal-akkeri,</strong> n. <i>sheet-anchor,</i> Fms. x. 130:',
      '<strong>β.</strong> metaph., Bs. i. 756. <strong>aðal-bjórr,</strong> s, m. <i>prime beaver skin,</i> Eb. (in a verse). <strong>aðal-borinn,</strong> part., v. óðalborinn. <strong>aðal-ból,</strong> n. <i>a manor-house,</i> farm inhabited by its master, opp. to tenant farms, Grág. (Kb.) ii. 150; also the name of a farm, Hrafn. 4. <strong>aðal-festr,</strong> f., v. alaðsfestr. <strong>aðal-fylking,</strong> f. <i>main force, main body,</i> Hkr. ii. 361. <strong>aðal-haf,</strong> n. <i>the main</i>, Fms. iv. 177. <strong>aðal-henda,</strong> u, f., v. alhenda. <strong>aðal-hending,</strong> f. <i>full, complete rhymes,</i> such as <i>all</i>—<i>hall</i>, opp. to skot-hending, q. v., Edda (Ht.) <strong>aðal-hendr,</strong> adj. <i>verse in full rhyme,</i> Edda, id. <strong>aðal-kelda,</strong> u, f. <i>chief well,</i> Karl. 442. <strong>aðal-kirkja,</strong> ju, f. <i>chief part of a church,</i> viz. choir and nave, opp. to forkirkja, Sturl. ii. 59. <strong>aðalliga,</strong> adv. <i>completely, thoroughly;</i> a. dauðr, <i>quite dead,</i> 656 C. 31, Fms. ii. 313; a. gamall, <i>quite old,</i> iii. 171. <strong>aðal-mein,</strong> n. <i>great pain,</i> Fms. vi. (in a verse), <strong>aðal-merki,</strong> n. <i>the head-standard,</i> Pr. 177. <strong>aðal-ritning,</strong> f. <i>chief writing,</i> Sks. 13. <strong>aðal-skáli,</strong> a, m. <i>the chief apartment of a</i> skáli, <i>the hall</i>, as distinguished from a forhús, Eb. 43. <strong>aðal-tré,</strong> n. <i>trunk of a tree;</i> eigi munu kvistir betri en a. (a proverb), Fms. iv. 33. <strong>aðal-troll,</strong> n. <i>downright ogre,</i> Fas. iii. 179. <strong>aðal-túlkr,</strong> s, m. <i>chief advocate,</i> Bs. i. 445. <strong>aðal-túpt,</strong> f. esp. in pl. ir = óðals-toptir, <i>the ground on which a manor-bouse is built, toft of an allodial farm</i> (Norse), flytja hús af aðaltóptum, <i>remove</i> it, N. G. L. i. 379.',
    ],
    slug: 'adal',
    foundIn: [
      '[O. H. G. adal, <i>genus;</i> cp. also A. S. éðele, <i>nobilis;</i> Old Engl. and Scot. <i>ethel;</i> Germ. <i>edel;</i> eðla- and eðal- came from mod. Dan. into Icel. aðall, <i>nobility.</i> It does not occur in old writings in this sense.]',
    ],
  },
  {
    word: 'aðal-vellir',
    definitions: [
      'm. pl. = óðalvellir, Rm.',
    ],
    slug: 'adal-vellir',
    foundIn: [
      'In headword',
    ],
  },
  {
    word: 'AF',
    definitions: [
      'prep. often used elliptically by dropping the case, or even merely adverbially, [Ulf. <i>af</i>; A. S. and Engl. <i>of</i>, <i>off</i>; Hel. <i>ab</i>; Germ. <i>ab</i>; Gr. <i>άπό</i>; Lat. <i>a</i>, <i>ab</i>.] With dat. denoting a motion <i>a loco</i>; one of the three prepp. <i>af</i>, <i>ór</i>, <i>frá</i>, corresponding to those <i>in loco</i>—<i>á</i>, <i>í</i>, <i>við</i>, and <i>ad locum</i>—<i>á</i>, <i>í</i>, <i>at</i>. It in general corresponds to the prepp. <i>in loco</i>—<i>á</i>, or <i>in locum</i>—<i>til</i>, whilst <i>ór</i> answers more to <i>í</i>; but it also frequently corresponds to <i>yfir</i>, <i>um</i> or <i>í</i>. It ranges between <i>ór</i> and <i>frá</i>, generally denoting the idea <i>from the surface of</i>, while <i>ór</i> means <i>from the inner part</i>, and <i>frá from the outer part</i> or <i>border</i>. The motion from a <i>hill</i>, <i>plain</i>, <i>open place</i> is thus denoted by <i>af</i>; by <i>ór</i> that from an <i>enclosed space</i>, <i>depth</i>, <i>cavity</i>, thus <i>af</i> fjalli, but <i>ór</i> of a <i>valley</i>, <i>dale</i>; <i>af</i> Englandi, but <i>ór</i> Danmörk, as <i>mörk</i> implies the notion of a <i>deep wood</i>, <i>forest</i>. The wind blows <i>af</i> landi, but a ship sets sail <i>frá</i> landi; <i>frá</i> landi also means a <i>distance from: af</i> hendi, of a <i>glove</i>, <i>ring</i>; <i>ór</i> hendi, of whatever has been <i>kept in the hand</i> (correl. to <i>á</i> hendi and <i>í</i> hendi). On the other hand <i>af</i> is more general, whilst <i>frá</i> and <i>ór</i> are of a more special character; <i>frá</i> denoting a <i>departure</i>, <i>ór</i> an <i>impulse</i> or <i>force</i>; a member goes home <i>af</i> þingi, whereas <i>ór</i> may denote an <i>inmate</i> of a district, or convey the notion of <i>secession</i> or <i>exclusion from</i>, Eb. 105 new Ed.; the traveller goes <i>af</i> landi, the exile <i>ór</i> landi: taka e-t <i>af</i> e-m is to take a thing <i>out of one’s hand</i>, that of taka <i>frá</i> e-m <i>to remove</i> out of one’s sight, etc. In general <i>af</i> answers to Engl. <i>of</i>, <i>off</i>, <i>ór</i> to <i>out of</i>, and <i>frá</i> to <i>from</i>: the Lat. prepp. <i>ab</i>, <i>de</i>, and <i>ex</i> do not exactly correspond to the Icelandic, yet as a rule <i>ór</i> may answer to <i>ex</i>, <i>af</i> sometimes to <i>ab</i>, sometimes to <i>de</i>. <i>Of, off, from among; with, by; on account of by means of, because of concerning, in respect of</i>.',
      '<strong>A.</strong> Loc.',
    ],
    slug: 'af',
    foundIn: [
      '<strong>4.</strong> denoting <i>distance;</i> þat er komit af þjóðleið, <i>out of the high road, remote,</i> Eg. 369; af þjóðbraut, Grág. ii. 264, i. 15; Otradalr (a farm) var mjök af vegi, <i>far out of the way,</i> Háv. 53.',
    ],
  },
]

describe('SearchResults component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<SearchResults words={words} />)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<SearchResults words={words} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
