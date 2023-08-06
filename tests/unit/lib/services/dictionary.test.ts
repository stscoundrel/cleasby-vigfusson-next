import { getDictionary } from 'cleasby-vigfusson-dictionary'
import { isArray } from 'volva'
import { matchesSchema } from 'jafningjar'
import { oldNorseSort } from 'old-norse-alphabet-sort'
import {
  getAllWords, getByLetter, getWord, getAlphabet, getSimilarWords,
} from 'lib/services/dictionary'

describe('Dictionary tests', () => {
  const dictionary = getAllWords()

  test('Gets array of words', () => {
    expect(isArray(dictionary)).toBeTruthy()
  })

  test('Dictionary is not identical with original source.', () => {
    const originalDictionary = getDictionary()

    expect(originalDictionary).not.toMatchObject(dictionary)
  })

  test('Dictionary has added url slugs to source', () => {
    dictionary.forEach((entry) => {
      expect(Object.keys(entry)).toEqual(['word', 'definitions', 'slug'])
    })
  })

  test('Dictionary slugs are unique', () => {
    const slugs = new Set()

    dictionary.forEach((entry) => {
      slugs.add(entry.slug)
    })

    expect(slugs.size).toEqual(dictionary.length)
  })

  test('Dictionary urls do not start with dashes', () => {
    dictionary.forEach((entry) => {
      expect(entry.slug.charAt(0)).not.toEqual('-')
    })
  })

  test('Dictionary gets words by letter', () => {
    const aWords = getByLetter('A')
    const þWords = getByLetter('þ')

    expect(aWords.length).toBe(1411)
    expect(þWords.length).toBe(1074)

    aWords.forEach((entry) => {
      expect(entry.word.charAt(0).toLowerCase()).toBe('a')
    })

    þWords.forEach((entry) => {
      expect(entry.word.charAt(0).toLowerCase()).toBe('þ')
    })
  })

  test('Dictionary gets individual words by slug', () => {
    const word1 = getWord('af-hlutr')
    const word2 = getWord('rid-volr')
    const word3 = getWord('thogull')

    expect(word1.word.toLowerCase()).toBe('af-hlutr')
    expect(word1.slug).toBe('af-hlutr')
    expect(word1.definitions).toEqual(['m. <i>share of a thing,</i> v. fjár-afhlutr.'])

    expect(word2.word.toLowerCase()).toBe('rið-völr')
    expect(word2.slug).toBe('rid-volr')
    expect(word2.definitions).toEqual(['m. <i>a short round stick,</i> to carry in the hand; tók hann riðvöl í hönd sér, Dropl. 29; hann greip upp riðvöl, ok laust sveininn í höfuðit svá at blóð féll um hann, Hkr. iii. 285.'])

    expect(word3.word.toLowerCase()).toBe('þögull')
    expect(word3.slug).toBe('thogull')
    expect(word3.definitions).toEqual(['adj. <i>silent, of silent habits,</i> Hm. 6; hann var maðr þ., ríklundaðr ok úþýðr, Hkr. i. 28; hann var þögull, ekki nafn festisk við hann, Sæm. 96; hinn þögli áss, Edda 17; Viðars ins þögla, 60; horskr ok þögull, Hm.; sí-þögull, <i>mute;</i> see þagall.'])
  })

  test('Dictionary gets similar entries', () => {
    // Minimal repro of a word known to have similar entries.
    const entry = {
      word: 'verða',
      slug: 'verda',
      definitions: [],
    }

    const results = getSimilarWords(entry)
    const expected = [
      {
        word: 'verða',
        definitions: [
          'pres. verð, verðr, verð; pret. varð, vart (mod. varðst), varð; pl. urðu; subj. yrði: imperat. verð; part. orðinn; pl. orðnir, spelt phonetically ornir, Niðrst. 6: in later vellums occur freq. the forms vurðu, vyrði, vorðinn, see Introd.; but the old poets use it for alliteration as if it began with a vowel: with neg. suff. verðr-at, Fm. 6; varð-at, Vþm. 38; urðu-a it, Gh. 3; urðu-t. Lex. Poët.: [Ulf. <i>wairþan</i> = γίγνεσθαι, ἔσεσθαι; A. S. <i>weorðan</i>; Old Engl. <i>worth,</i> as in the phrase <i>‘woe worth the day!’</i> Germ. <i>werden;</i> Dan. <i>vorde;</i> Swed. <i>varda.</i>]',
          '<strong>A.</strong> <i>To become, happen, come to pass;</i> sá atburðr varð, at …, Ó. H. 196; varð hitt at lyktum, at …, 191; ef svá verðr, at …, Al. 20; ef svá verðr (<i>if it so happen</i>), at ek deyja, Eg. 34; fundr þeirra varð á Rogalandi, 32; mörg dæmi hafa orðit í forneskju, Ó. H. 73; varð þar hin snarpasta orrosta. Eg. 297; at því sem nú er orðit, Blas. 46; þá varð (<i>arose</i>) hlátr mikill, id.; varð óp mikit, Nj.; þat varð um síðir, <i>and so they did at last,</i> 240; er þetta allvel orðit, <i>well done, well happened,</i> 187; þau tíðendi eru hér vorðin, Fms. iv. 309 (orðin, Ó. H. 139, l. c.); þat varð ekki, <i>but it came not to pass,</i> Nj.',
          '<strong>2.</strong> adding dat. <i>to happen, to befall one;</i> þat varð mér, <i>it befell me,</i> Ísl. ii. (in a verse); varð þeim af in mesta deila, Nj. 189; Eyjólfi varð orðfall, <i>speechlessness befell E., he faltered,</i> 225; þat varð Skarphéðni at stökk í sundr skóþvengr hans, 145; urðu þeim þegar in sömu undr, 21.',
          '<strong>3.</strong> <i>to blunder, make a slip;</i> þat varð þinni konu, at hón átti mög við mér, Ls. 40; sjaldan verðr viti vörum, Hm. 6; þat verðr mörgum manni at um myrkvan staf villisk, Eg. (in a verse); skalat honum þat verða optarr enn um sinn … ef eigi verðr þeim optarr enn um sinn, Grág. (Kb.) i. 55; e-m verðr Þorf e-s, <i>to come in need of,</i> Hm. 149; ef þeim verðr nökkut er honum hefir fylgt, <i>if anything should befall them,</i> Hom. 65; annat man þér verða (<i>another fate, death, will be thine</i>), enn þú sprongir, Sturl. iii. 225; cp. verða úti, <i>to perish in a storm from cold,</i> Fms. vii. 122; sumir urðu úti, Bs. i. 71; verða til, <i>to perish.</i>',
          '<strong>4.</strong> <i>to happen to be, to occur,</i> or the like; í læk þann er þar verðr, <i>in the brook that happens to be there,</i> Eg. 163; holt þat er þar verðr, 746; varð þá enn brátt á er þvers varð fyrir þeim, þá kölluðu þeir þverá, 132; varð fyrir þeim fjörðr, <i>they came on a fiord,</i> 130; verða á leið e-s, <i>to be in one’s path, happen to one,</i> Ó. H. 181; taka þat sem á leið hans verðr, Grág. ii. 346; verða á fætr, <i>to fall on one’s, feet,</i> Fb. iii. 301; verða ek á fitjum, Vkv. 27; þeim þótti honum seint heim verða, Fbr. 8 new Ed.: verða brottu, <i>to leave, absent oneself;</i> þeir sá þann sinn kost líkastan at verða á brottu, Fms. vii. 204; verð í brottu í stað, <i>begone,</i> Fs. 64: verða úti, id., Nj. 16.',
          '<strong>II.</strong> followed by a noun, adjective, participle, adverb, as predicate; þá verðr þat þinn bani, Nj. 94; hann varð tveggja manna bani, <i>he became the bane of,</i> i. e. <i>slew, two men,</i> 97; hann mun verða engi jafnaðar-maðr, Ld. 24; ef hann vyrði konungr, Fms. i. 20; verða biskup, prestr …, Bs. i. passim; ok verðr eigi gjöf, ef …, <i>it becomes not a gift, if …,</i> Grág. (Kb.) i. 130; verða þær málalyktir, at …, <i>the end was that …,</i> Nj. 88: verða alls hálft annat hundrat, <i>the whole amount becomes,</i> Rb. 88; honum varð vísa á munni, Fms. xi. 144; varð henni þá ljóð á munni, Fb. i. 525; þat varð henni á munni er hón sá þetta, Sd. 139: hví henni yrði þat at munni, Fms. xi. 149; þá er í meðal verðr, <i>when there is an interval, leisure,</i> Skálda (Thorodd): cp. the mod. phrase, þegar í milli veiðr fyrir honum, of the empty hour; varð Skarpheðinn þar í millum ok gaflhlaðsins, <i>S. was jammed in between,</i> Nj. 203; prob. ellipt. = verða fastr.',
          '<strong>2.</strong> with adjectives, <i>to become</i> so and so:',
          '<strong>α.</strong> verða glaðr, feginn, hryggr, <i>to become glad, fain, sad,</i> Fms. i. 21, viii. 19, passim; verða langlífr, <i>to be long-lived,</i> Bs. i. 640; verða gamall, <i>to become old,</i> Nj. 85; verða sjúkr, veykr, <i>to become sick;</i> verða sjónlauss, blindr, <i>to become blind,</i> Eg. 759; verða ungr í annat sinn, Fms. i. 20; verða varr, <i>to become aware</i> (see varr); verða víss, Nj. 268; verða sekr, <i>to become outlawed;</i> verða vátr, <i>to become wet,</i> 15; verða missáttr við e-n, Landn. 150 (and so in endless instances): in the phrase, verða dauðr, <i>to die;</i> dauðr varð inn Húnski, Am. 98; áðr Haraldr inn Hárfagri yrði dauðr, Íb. 6; síðan Njáll var(ð) dauðr, Nj. 238, and a few more instances, very freq. on Runic stones, but now obsolete.',
          '<strong>β.</strong> with participles; verða búinn, <i>to be ready,</i> Fms. vii. 121; verða þeir ekki fundnir, <i>they could not be found,</i> Gísl. 56; verða staddr við e-t, <i>to be present,</i> Eg. 744; in mod. usage with a notion of futurity, e. g. eg verð búinn á morgun, <i>I shall be ready to-morrow;</i> eg verð farinn um það. <i>I shall be gone then:</i> with neut, part., járn er nýtekit verðr ór afli, <i>just taken out of the furnace,</i> Sks. 209 B; varð ekki eptir honum gengit, <i>he was not pursued,</i> Nj. 270; þeim varð litið til hafs, <i>they happened to look,</i> 125; honum varð litið upp til hlíðarinnar, 112; blóð varð eigi stöðvat, <i>the blood could not be stopped,</i> Fms. i. 46, Nj. 210.',
          '<strong>γ.</strong> phrases, e-m verðr bilt, <i>to be amazed,</i> Edda 29, Korm. 40, Nj. 169; verða felmt, 105; verða íllt við, hverft við, <i>id</i>.; Kolbeini varð ekki fyrir, <i>K. lost his head, was paralysed,</i> as if stunned, Sturl. iii. 285.',
          '<strong>3.</strong> with adverbs or adverbial phrases; ef þat bíðr at verða vet, Hm.; ma þetta verða vel þótt hitt yrði ílla, Nj.; verða verr enn til er stýrt, Róm. 321; hann varð vel við skaða sinn, <i>bore it well, like a man,</i> Eg. 76, Nj. 75; faðir hans varð ílla við þetta (<i>disliked it</i>), ok kvað hann taka stein um megn sér, Fær. 58; jarl varð ílla við þetta, <i>was much vexed by it,</i> Fms. ix. 341; varð hann údrengiliga við sitt líflát, Ld. 234; hvernig varð hann við þá er þér rudduð skipið, Ó. H. 116; hversu Gunnarr varð við, <i>how G. bore it,</i> Nj. 82; verra verðr mér við, enn ek ætla at gott muni af leiða, 109; mér hefir orðit vel við þik í vetr, <i>I have been pleased with thee this winter,</i> Fms. vii. 112; eigi vildi ek svá við verða blóðlátið, fiskbleikr sem þú ert—Ek ætla, segir hinn, at þá myndir verr við verða ok ódrengiligar, 269; þar varð ílla með þeim, <i>things went ill with them, they became enemies,</i> Nj. 39: <i>to behave,</i> varð engum jafnvel til mín sem þessum, Fms. vii. 158; hann lætr sér verða á alla vega sem bezt til Áka, xi. 76; hann lét henni hafa orðit stórmannliga, Hkr. iii. 372.',
          '<strong>III.</strong> with prepp., verða af; hvat er orðit af e-u, <i>what is come of it? where is it</i>? of a thing lost; segðu mér þat, hvat varð af húnum mínum, Vkv. 30; hvat af motrinum er orðit, Ld. 208; nú hverfr Óspakr á brott svá at eigi vitu menn hvat af honum verðr, Band. 5; varð ekki af atlögu búanda, Ó. H. 184; ekki mun af sættum verða, Fb. i. 126: <i>to come to pass,</i> varð ekki af eptir-för, <i>it came to naught;</i> varð því ekki af ferðinni, Ísl. ii. 247; Símon kvað þá ekki mundu af því verða, <i>S. said that could not be,</i> Fms. vii. 250; ok verðr þetta af, at hann tekr við sveinunum, <i>the end was that at last he took the boys,</i> Fær. 36; eigi mun þér þann veg af verða, Karl. 197:—verða at e-u, <i>to come to;</i> hvat þér mun verða at bana, <i>what will be the cause of thy death,</i> Nj. 85; verða at flugu, Fas. i. 353 (see ‘at’ C. I. α); verða at undri, skömm, honum varð ekki at því kaupi, <i>the bargain came to naught for him,</i> Al. 7; cp. the mod. honum varð ekki að því, <i>it failed for him</i>:—e-m verðr á (cp. á-virðing), <i>to make a blunder, mistake;</i> kölluðu þat mjök hafa vorðit á fyrir föður sínum, at hann tók hann til sín, Fs. 35; þótti þér ekki á verða fyrir honum er hann náði eigi fénu, Nj. 33; Þorkell settisk þá niðr, ok hafði hvárki orðit á fyrir honum áðr né síðan, 185; aldri varð á um höfðingskap hans, 33:—verða eptir, <i>to be left,</i> Rb. 126, Stj. 124, 595; honum varð þar eptir geit ok hafr, Hrafn. 1:—verða fyrir e-u, <i>to be hit, be the object of;</i> fyrir víginu hefir orðit Svartr, <i>S. is the person killed,</i> Nj. 53; verða fyrir öfund, görningum, <i>to be the victim of,</i> Lex. Poët.: e-m verðr lítið fyrir e-u, <i>it costs one small effort</i> (see fyrir):—verða til e-s, <i>to come forth to do a thing, volunteer,</i> or the like; en sá er nefndr Hermóðr er til þeirrar farar varð, Edda 37; til þess hefir engi orðit fyrr en þú, at skora mér á hólm, Ísl. ii. 225; en engi varð til þess, <i>no one volunteered,</i> Nj. 86; einn maðr varð til at spyrja, 82; þá verðr til ok svarar máli konungs sá maðr, er …, Odd. 12; hverr sem til verðr um síðir at koma þeim á réttan veg, Fb. i. 273: fengu þeir ekki samit, því at þeim varð mart til, <i>many things happened,</i> i. e. so as to bring discord, Sturl. ii. 17 C; mundi okkr Einari eigi annat smátt til orðit, Hrafn. 9; eigi varð verri maðr til, <i>there was no worse man,</i> Stj. 482:—verða við, <i>to respond to;</i> bið ek þik at þú verðir við mér þó at engi sé verðleiki til, Barl. 59; at hann beiddi Snorra ásjá, en ef hann yrði eigi við bað hann Gretti fara vestr, Grett. 112 new Ed.; verða við bæn e-s, <i>to grant one’s request,</i> passim.',
          '<strong>IV.</strong> with infin., denoting necessity, <i>one must, needs, one is forced, obliged to do;</i> þat verðr hverr at vinna er ætlað er, Nj. 10; varð ek þá at selja Hrafni sjálfdæmi, Ísl. ii. 245; eða yrði þeir út at hafa þann ómaga, Grág. (Kb.) ii. 21; þat munu þér þá reyna verða, <i>you must try,</i> Fbr. 23 new Ed.; þar er bera verðr til grjót, <i>where stones have to be carried,</i> Grág. (Kb.) ii. 90; lágu hestarnir í kafi svá at draga varð upp, Eg. 546; en vita verð ek (<i>I must know</i>) hvar til þetta heyrir, Fms. ii. 146; munu þér því verða annars-staðar á leita, Nj. 223; at hann man verða sækja á ókunn lönd, Fms. viii. 19; ok verðr af því líða yfir þat, <i>it must be passed by,</i> Post.; maðr verðr eptir mann lifa, a saying, Fas. ii. 552; verð ek nú flýja, Ó. H. 188; urðu þeir at taka við Kristni, 105; vér höfum orðit til at hætta lífi ok sálu, hefir margr saklauss orðit at láta, sumir féit ok sumir fjörit, 31, 32; vér munum verða lifa við öðrum veiði-mat, Hým. 16; verða at skiljask við e-n, Skv. 1. 24: the same verb twice, þá varð ek verða hapta, <i>then came I to become a prisoner,</i> Gkv. 1. 9; eg verð að verða eptir, <i>I must stay behind.</i>',
          '<strong>B.</strong> Peculiar isolated phrases, in some of which ‘verða’ is probably a different word, viz. = varða (q. v.), having been confounded with verða; thus, verða, verðr (= varða, varðar), <i>to be liable,</i> are frequent occurrences as a law phrase in the Grág.; svá fremi verðr beitin, ii. 226; þeim manni verðr fjörbaugs-garðr, er …, 212.',
          '<strong>2.</strong> the phrase, eigi verðr (= varðar) einn eiðr alla, see eiðr; also ymsar verðr sá er margar ferr, <i>in many warfares there will be some defeats,</i> Eg. 182.',
          '<strong>3.</strong> <i>to forfeit, lose,</i> prop. of paying a fine or penalty; heit ek á þann félaga er mik lætr eigi slíkt verða, Vápn. 11; æti þik ormar, yrða ek þik, kykvan, <i>that snakes ate thee alive, and that I lost thee,</i> Am. 22; fullhuginu sá er varð dróttinn, <i>the brave man bereft of his master,</i> Sighvat (Ó. H. 236); ek hefi orðinn þann guðföður, er …, <i>I have lost a godfather who …,</i> Hallfred (Js. 210); hér skaltú lífit verða, <i>here shall thou forfeit life,</i> i. e. <i>die</i>, Sturl. iii. (in a verse).',
          '<strong>4.</strong> the law phrase, verða síns, <i>to suffer a loss;</i> leiglendingr bæti honum allt þat er hann verðr síns fyrir lands-drottni (i. e. verðr missa), <i>whatever he has to lose, whatever damage,</i> Gþl. 362; þræll skal ekki verða síns um, N. G. L. i. 85; allt þat er hann verðr síns í, þá skal hinn bæta honum, Jb. 207 A; hann kvað þá ekki skyldu síns í verða (varða Ed.) um þetta mál, <i>they should lose nothing,</i> Rd. 253: vildi hann (viz. Herode) eigi verða heit sitt (= fyrir verða?), <i>he would not forfeit, break his vow,</i> Hom. 106.',
          '<strong>C.</strong> Reflex.; at þær ræður skyldi eigi með tjónum verðask, <i>to be lost, forgotten,</i> Sks. 561 B.',
          '<strong>2.</strong> recipr.; bræðr munu berjask ok at bönum verðask, Vsp. (Hb.); þá er bræðr tveir at bönum urðusk, Ýt. 11.',
          '<strong>3.</strong> part.; eptir orðna þrimu geira, Ód.; hluti orðna ok úorðna, <i>past and future,</i> MS. 623. 13; kvenna fegrst ok bezt at sér orðin, Nj. 268; þeir vóru svó vorðnir sik (so <i>shapen,</i> Germ. <i>beschaffen),</i> at þeir höfðu …, Stj. 7; þeir eru svá vorðnir sik, at þeir hafa eitt auga í miðju enninu, 68.',
        ],
        slug: 'verda-2',
      },
    ]

    expect(results).toEqual(expected);
  })

  test('Dictionary gets alphabet constants with slugs', () => {
    const alphabet = getAlphabet()

    const expected = {
      letter: '',
      slug: '',
    }

    alphabet.forEach((entry) => {
      expect(matchesSchema(entry, expected)).toBeTruthy()
    })
  })

  test('Alphabet does not contain invalid chars.', () => {
    const alphabet = getAlphabet()
    const invalids = ['ǫ', 'ø']

    alphabet.forEach((letter) => {
      expect(invalids.includes(letter.letter)).toBeFalsy()
    })
  })

  test('Alphabet contains added ö letter.', () => {
    const alphabet = getAlphabet()
    let foundÖ = false

    alphabet.forEach((letter) => {
      if (letter.letter === 'ö') {
        foundÖ = true
      }
    })

    expect(foundÖ).toBeTruthy();
  })

  /**
   * This test needs Node 14 to pass.
   */
  test('Dictionary entries are alphabetically sorted', () => {
    const maybeUnsorted = getDictionary()

    const sortedDictionry = [...maybeUnsorted].sort((a, b) => (
      oldNorseSort(a.word, b.word)))

    expect(maybeUnsorted).toEqual(sortedDictionry)
  })
})
