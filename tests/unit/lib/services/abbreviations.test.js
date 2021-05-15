import {
  getAbbreviations,
} from 'lib/services/abbreviations'

// Test utils.
import { isObject, isArray } from 'volva'
import { hasProperty } from 'spyrjari'

describe('Abbreviations tests', () => {
  const simpleEntry = {
    word: 'hval-reið',
    definitions: [
      'f. = hvalreki, Lv. 58.',
    ],
    slug: 'hval-reid',
  }

  const repeatedAbbreviationsEntry = {
    word: 'RÁÐA',
    definitions: [
      'pres. ræð, ræðr, ræð; pl. ráðum, ráðit, ráða; pret. réð, 2nd pers. rétt, <i>réttu,</i> rhymed with <i>hætta,</i> Fms. vi. (in a verse); mod. réðst, pl. réðu; subj. réði; imper. ráð, ráddú; part. ráðinn; a middle form ráðumk, Hom. 113; a weak pret. indic. réði occurs in the poem Jd. 35 (ótrauðr á haf réði), and in prose, Fms. i. 223, and is freq. in mod. usage (eg réði honum að bíða … hann réði því ekki): [a word common to all Teut. languages; A. S. <i>ræðan;</i> Old Engl. <i>rede</i> and <i>read</i>; Germ. <i>rathen;</i> Dan. <i>raade</i>; the Goth. has <i>rêdan,</i> but it is rarely used in Ulf.]',
      '<strong>A.</strong> <i>To advise, counsel,</i> with dat. of the thing and acc. of the person; ráða e-m e-t, réðu vinir hans honum þat, at hann berðisk eigi við þik, Nj. 33; réðu honum þat allir at samna liði. Eg. 9; ráða e-m ráð, <i>to give one counsel,</i> Vþm. 1; ráðumk þér, Hm. 113 sqq.; þat ræð ek þér, Sdm. 22 sqq., Nj. 61; makligr ertú þeirra, segir Njáll, ok réð honum ráðin, 71; ráð er þér ráðit, Fm. 21; ráða e-m heilræði, Nj. 85.',
      '<strong>2.</strong> <i>to consult;</i> ráða ráðum sínum, <i>to hold a conference,</i> Edda 26, Fms. vii. 259; vóru opt á tali ok ráða-stefnu ok réðu landráðum, i. 52.',
      '<strong>3.</strong> <i>to devise;</i> þá menn er konu hafa numit eða þat hafa ráðit, Grág. i. 354, Gullþ. 14.',
      '<strong>4.</strong> <i>to fix, decide, determine, resolve,</i> with acc.; ek hefi áðr ráðit brúðlaup mitt, Nj. 4; ráða samband, Gullþ. 14; ráða atför við Gunnar, Nj. 1, 7; réðu þeir þat þá með sér, 93; hefi ek ráðit honum kvánfang, 151; siðan réð Gunnarr utanferð sína með honum, 41, cp Sturl. ii. 168; ráða e-m ró, Ls. 55:—ráða e-t af, <i>to form a decision,</i> Eg. 337; en af verðr at ráða nokkut ór hverju vandræði, Lv. 39:—ráða e-t við sik, <i>to make up one’s mind;</i> hvárt hann vildi þar vera eða fara til Íslands, hann kvaðsk eigi þat hafa ráðit við sik, Nj. 123:—ráða um e-t, <i>to deliberate;</i> hann gaf jarli orlof at ráða um þetta kjör við menn sína, Ó. H. 97:—ráða e-t (or e-u) til staðar, <i>to settle, fix definitely,</i> Fms. ii. 78, Ld. 178:—ráða ór, ráða ór e-u, <i>to find an expedient, solve a difficulty,</i> Nj. 177. Ld. 54, 180.',
      '<strong>5.</strong> <i>to hire, take into service;</i> ráða skipverja, Fms. vi. 238; réð Hallgerðr sér hjón, Nj. 25; ek em kona Njáls, segir hón, ok ræð ek eigi síðr hjón en hann, 54; Njáll réð honum hjón öll, 151; bóndi sagði húsfreyju sinni at hann hafði Hrapp ráðit með sér, 131; hón hafði ráðit mann til at svíkja konung í drykk, Fms. ix. 5; vilda ek at vit færim í hernað ok réðim menn til með okkr, Nj. 41; ráða land undan e-m, Fb. ii. 171.',
      '<strong>6.</strong> <i>to plan, plot, contrive,</i> or <i>cause one’s death, put to death, betray,</i> Germ. <i>verra’ben;</i> Regin þik réð, hann þik ráða mun, Fm. 22; þú rétt hann, Fas. i. 202; þær ætluðu at konungr mundi hafa rúðit hann, Fms. iv. 312; hann réð Plóg svarta föður-bana sinn, xi. 353; ef kona drepr bónda sinn eða ræðr hann fyrir íllsku sakir, Js. 27; ráða e-m bana, bana-ráð, Nj. 21, 52, Fb. i. 410, Skv. 1. 51:—ráða e-n af, <i>to put out of the way, put to death,</i> Gullþ. 14, Fms. i. 204, Al. 128; sá ótti er nú af ráðinn ok endaðr, Fs. 9; ek hygg at Þóroddr ætli nú af at ráða hingat-kvámur þínar, Eb. 144; ráða e-n frá, <i>to despatch,</i> Ld. 294; ráða e-n af dögum, <i>to put to death;</i> ráða e-n frá ríki, Fms. iii. 18; ráða e-n ofan, <i>to overthrow,</i> Bárð. 164.',
      '<strong>II.</strong> <i>to rule, govern,</i> with dat.; ráða Þrænda-lögum, Fms. i. 52; ráða landi, ráða ríki, 22, Nj. 41; Einarr jarl réð Orkneyjum, Fms. i. 197; Hákon konungr réð Noregi, x. 4; er réð fyrir Holtseta-landi, xi. 3; þann konung er ræðr Jórsala-landi … þann er Englandi ræðr, Edda 92; ráða landráðum, <i>to have the government, govern,</i> Fms. i. 52.',
      '<strong>2.</strong> <i>to rule, prevail, have one’s own will,</i> as also <i>to manage, lead, have authority, management,</i> and similar usages; skal ráða afl með þeim, Nj. 150; sá reð er ríkr var, Sól.; hann réð sér ekki fyrir kæti, <i>he was beside himself for joy;</i> skal hón sjálf ráða hvárt hón vill hann eða eigi, Nj. 24; ek skal hér ráða, 52; Ólafr bað móður sína eina ráða, Ld. 70; sögðu þá ráða eiga er fleiri vóru, 74; ætlar þú at þú munir ráða. Fms. vii. 13; konungr svarar ok biðr hann ráða, xi. 29: Lögmaðr skal ráða, <i>he shall have the casting vote,</i> Gþl. 18: the phrase, ef ek má ráða, <i>if I can have it as I like;</i> þú ræðr því, <i>as you like!</i> þvíat þar ræðr eigi frændsemi, Grág. i. 172: <i>to rule,</i> sól skal ráða um sumar en dagr um vetr, Gþl.; landfall ræðr (<i>rules, makes the boundary</i>) fyrir sunnan, Pm. 88; ór ánni ræðr keldan … ok lækr út úr henni til sjáfar, Dipl. ii. 1; ráða landa-merkjum, Eg. 711; ráða boði ok banni, Gþl. 76; ráða búi ok kaupum, 269; ráða giptingum, 211; ráða sessa kostum, Gm. 14; ráða kaupum, fé, skipti, Gþl.; ráða fé til þarfa, <i>to dispose of money to advantage, put it out at interest,</i> Gþl.; sigri vér ráðumk, Orkn. (in a verse); hugr ræðr hálfum sigri, a saving; ráða sínum ferðum, Fms. i. 75; réð Örn leiðsögu, Ld. 74: hvárt ek má nokkuru um þat ráða, Fms. vii. 13; mörgum ræðr litlu hve, <i>‘tis of small interest,</i> Am. 33; ráða engu, Hdl. 49; ráða veðri. Rb. 388; veðr ræðr akri en vit syni, Hm.; hvar skal ek sitja—Móðir mín skal því ráða, Nj. 7; ek réð ráði hennar fyrr, i. e. <i>gave her away,</i> 23; hvárt hann kunni ráða fé sínu, Grág. i. 176; ráða orði, ii. 309; hvárt ræðr þú því er Steinarr son þinn sækir sökum Þorstein son minn, <i>hast thou caused it, is it thy making?</i> Eg. 727; þú því rétt er ek ríða skyldak, Fm. 26; ek því ræð, er þú ríða sér-at, Ls. 28; en réðu því Nornir, Orkn. (in a verse); ílla réð ek því, <i>that was foolishly done,</i> Fbr. (in a verse); ek hefi því ráðit, at …, Ísl. ii. 322; því þykki mér ráðit, <i>well done,</i> Sks. 100:—various phrases, ráða e-u bót (bætr) or ráða bót (bætr) á e-u, <i>to mend, better,</i> Hom. 159, Ld. 206, Fms. vii. 162, Landn. 8, Eb. 114:—with prep., ráða fyrir e-u (for-ráð), <i>to rule, manage, govern,</i> Fms. i. 288, Hkr. 1. 40; ráða fyrir lögum, Nj. 5, 150, Eg. 34, 239, 754, Ld. 76, 132, Fms. i. 11, Grág. i. 333:—ráða um e-t, <i>to dispose of,</i> (um-ráð); nú megu vit ekki ráða um hennar gjaforð, Fms. iv. 194:—ráða við e-ð, <i>to be able to do, manage,</i> Bárð. 163; eg ræð ekki við hann (þat), <i>I cannot manage him;</i> við-ráðanlegr, <i>manageable</i>:—ráða yfir e-u (yfir-ráð), <i>to rule, govern,</i> Fms. iv. 83.',
      '<strong>3.</strong> <i>to have, possess, enjoy;</i> hvítum ræðr þú enn hjöltunum, … ráða deigum brandinum, Eb. 238; ráða fé ok fjörvi, <i>to enjoy wealth and life,</i> Fm. 26; ráða arfi, gulli, hringum, Skv. 2. 9, Hkv. Hjörv. 6, 11; ráða nafni, aldri, hjarta, lofi, dýrð, <i>to enjoy a name, life …,</i> Lex. Poët.; ráða eign ok auðsölum. Fsm. 8, 9; ráða rauðum manni, <i>to be red,</i> Fbr. (in a verse):—part. ráðandi, with gen., ertu nokkurs ráðandi hér, <i>hast thou any authority here?</i> Nj. 54; þess verða ek ráðandi við mína menn, <i>I will manage that.</i> Fms. xi. 30; vera mikils ráðandi, <i>of great influence,</i> Fas. ii. 504: ráðandi postula, <i>the ruler of the apostles,</i> Edda 92, Lex. Poët.',
      '<strong>III.</strong> <i>to explain, read;</i> ráða gátu, <i>to read a riddle,</i> Fas. i. 454; varð engi sú gáta upp borin er hann réði (subj.) eigi, 532; ráða e-t, Am. 22; ráða draum, <i>to read a dream,</i> Nj. 121, Ld. 126, Ísl ii. 194, 197, x. 270, xi. 3, Rb. 394; Pharao dreymdi drauma ok urðu eigi ráðendr til, Ver. 17; veiztú hve rísta skal, veiztú hve ráða skal, of magical characters, Hm. 145:—ráða í e-t, <i>to guess at, find out,</i> Fms. xi. 16; ok væntir mik at eigi mundi í þat ráðit, Ísl. ii. 333; munu þeir ekki í ráða er myrkt er, 378, Fær. 255.',
      '<strong>2.</strong> <i>to read</i>, prop. <i>to explain, interpret;</i> skal hann láta ráða skrá heima at kirkju, K. Þ. K. 46; ráða rúnar, Am. 12, Hom. (St.); þegar Domitianus hafði rit ráðit, 623. 12, Karl. 16: ráða upp, <i>to read up;</i> þessi sömu bréf lét erkibiskup upp ráða í Danmörku, Fms. viii. 293; á alþingi léc Páll biskup ráða upp jarteinir ens sæla Þórláks, Bs. i. 352; tók ok lét þar upp ráða, 623. 10; ráða skrá, K. Þ. K.',
      '<strong>IV.</strong> <i>to punish, chastise,</i> with dat.; Guð ræðr oss till batnaðar sem sonum, Greg. 73; fóstri hans var harðr við hann ok réð honum mjök, Bs. i. 416; nú ef sveinn vill eigi nema ok leiðisk bók, þá skal hann færa til annarra verka, ok ráða honum til, svá at hvárki verði af örkuml né ílit, K. Þ. K. 56; honum var ráðit fyrir flestum höfuð-kirkjum, Sturl. ii. 147:—with acc., konu sína skal engi maðr með höggum ráða at öldri né at áti, N. G. L. i. 29; nú ef maðr ræðr konu sína eigna lyklum eða lásum (<i>beats her with keys or bars</i>), þá er hann sekr, 356 (ráðning).',
      '<strong>V.</strong> with the notion of action, <i>to undertake;</i> ráða stórt, <i>to aim high, aspire,</i> Lex. Poët.; kann vera at ek finna þann höfðingja at minnr vaxi fyrir augum at ráða stórt (<i>to undertake great things</i>), en þér konungr, Fms. vi. 399 (stór-ræði); ráða gott, <i>to manage well,</i> Ó. H. (in a verse).',
      '<strong>2.</strong> with prepp., ráða á e-t, <i>to take to a thing;</i> þeir réðu á íshöggit, Fms. vi. 336; ráða á e-n, <i>to attack one;</i> mun eigi þá á þik ráðit, Nj. 93, 253 (á-ræði):—ráða at e-m, <i>to attack, invade,</i> passim:—ráða af, <i>to get off, clear;</i> hann bað þá taka forka ok ráða at skipinu, <i>and get the ship off, set her afloat,</i> Ld. 56; aðilinn ræðr sik af baugbrotum, ef …, Grág. ii. 173; at hefir þú mik ráðit brekvísi, <i>thou hast cured me of complaining,</i> Ld. 134:—þá réðu þeir goðorð sitt undir Rafn fyrir sakir vinsælda hans, <i>they put their ‘godord’ in the charge of R.,</i> Bs. i. 642:—ráða móti e-m, <i>to go against in a fight, withstand;</i> í móti Kára réð Mörðr Sigfússon, Nj. 253:—ráða til e-s, <i>to rush in upon;</i> hann reiddi upp öxina ok réð til Þorvarðar, Sturl. ii. 37, (til-ræði, <i>an assault</i>): <i>to take to a thing, try,</i> í vár réðu vér til ok hljópum í brott, Eg. 235; ok er þeim þótti sér færi til at ráða leyndusk þeir á brott, <i>when they saw an opportunity they stole away,</i> 572; ok er nú til at ráða ef þér vilit, <i>now is the time for action,</i> Nj. 154; Skarphéðinn kom fótum undir sik, ok réð þegar til í annat sinn, 202:—<i>to start, make for, attempt,</i> ráða til orrostu, <i>to go to battle,</i> Eg. 530; ráða til uppgöngu, 229; en þó ekki svá at til hans væri ráðanda (gerund.), Fms. vi. 352; réð hann þá til ok hjó sundr orminn, id.; þat var ekki annarra manna hlaup, enda réð ok engi til, Eg.; þeir ráða til ok hlaupa í munn drekanum, Fb. ii. 317; skal ráða til árinnar eðr eigi, <i>shall we try to pass the river or not?</i> Ld. 46; hann bauð út miklum her ok réð til skipa, Fms. i. 22; ráða til ferðar, <i>to start on a journey,</i> Landn.:—ráða skipi til hlunns, <i>to put the ship in a shed,</i> Eg. 515, Nj. 10; ráða sik frá e-u, <i>to disengage oneself from,</i> Hom. 147, MS. 655 xxvi. 1; ráða um, hann tók um strenginn, ok réð um at fara upp í skipit, <i>and was just about to go up into the ship,</i> Fms. ix. 24.',
      '<strong>3.</strong> periphrastically, with an infin. mostly without the particle ‘at;’ ráðumk ganga, <i>we do go,</i> Am. 77; ráðum yppa, spyrja segja, leyna, Lex. Poët.; hverr er segja ræðr, <i>does tell,</i> Hm. 125; hón réð vakna, <i>she awoke,</i> Am. 10; annan réð hón höggva, 48; ekki réttu leifa, 80; allt þats réð heita, 102; réð ek at ganga, Fas. ii. (in a verse); ef ek ræð á vág at vaða, Hbl. 47: with the particle ‘at,’ réð at stökkva, Eb. (in a verse): also reflex., réðsk at sofna, Rm. 5; but réð at sofna, <i>went to sleep,</i> 17: in prose, þau lög sem hann réði upp at segja, Íb. 12; ráðask geyja, Am. 24.',
      '<strong>B.</strong> Reflex. ráðask, referring to the person himself; ráðask um við e-n, <i>to consult;</i> Gunnarr görði görðina ok réðsk við öngan mann um, Nj. 80; hvárigum þótti ráð ráðit nema við aðra réðisk um, 167; ef hann hefði nokkut við mik um ráðisk, Ld. 306; þá réðsk hann um við vini sína, Eg. 9.',
      '<strong>2.</strong> <i>to be resolved, fixed, settled;</i> þá er kaupit réðsk, Nj. 17; eigi mun þat svá skjótt ráðask, Ísl. ii. 213; þetta mál er miklu meira en þat megi skjótt ráðask, Fms. vi. 18; af þeim tiðendum ræðsk þat, at …, ix. 433; eigi mun þetta ráðask þessu sinni, xi. 4; þá var ráðin sættin, Ld. 308; en ráðit kalla ek kaupit, Sd. 179; réðsk hann þá þar at hjóni, <i>he hired himself out, entered service,</i> Nj. 57. <strong>3</strong> (answering to and identical with A. V above), ráðask frá, <i>to leave;</i> þóat ek ráðumk frá, Fms. i. 225: ráðask í e-t, <i>to undertake;</i> ráðask í hernað, passim; hann réðsk í flokk með þeim, Nj. 94, Fb. ii. 172:—ráðask til e-s, <i>to venture on a thing;</i> þá ráðsk (imper.) þú til ok far í hauginn, Fms. iv. 28:—<i>to move one’s abode,</i> Hákon spurði Gunnar ef hann vildi ráðask til Hákonar jarls, Nj. 41; bið Una selja jörð sína ok ráðask hingat til mín, Orkn.; hann réðsk þangat bygðum, Þorf. Karl. 364; ráðask til ferðar (= Germ. <i>sich begeben),</i> Eg. 4; víkingar ok herkonungar er réðusk til liðs með Eiríki, Fms. i. 24; réðsk hann þá þangat um várit at fardögum ok móðir hans, Bs. i. 455: ráðask ór hernaði, <i>to give up, leave off freebooting,</i> Fg. 2:—at þeim hafði óheppilega um ráðisk, <i>they had formed an unhappy plan,</i> Knytl. S. ch. 69 (Lex. Poët.); cp. miðráðit.',
      '<strong>4.</strong> <i>to turn out;</i> ok réðsk til allgiptusamliga, Fms. x. 53; and in the mod. phrase, það réðsk vel, <i>ended well;</i> sjá hvernig það ræðst, <i>see how it will turn out;</i> of a dream, <i>to prove true</i> (see A. III), ok vilda ek at hvergi réðisk, Gísl. 24 (hvárngi réði, impers., 108, l. c.):—réðsk mikit mannfall, <i>there came to be a great slaughter,</i> Odd, 28.',
      '<strong>II.</strong> recipr., ráðask á, <i>to attack one another;</i> þeir spruttu upp með íllyrðum, ok svá kom at þeir ráðask á, Nj. 128.',
      '<strong>III.</strong> part. ráðinn, <i>resolved, determined,</i> Ölk. 36, Bárð. 173; hann mælti fátt eðr ekki við frá, … ef hann var ráðinn til at drepa þá, Fms. vii. 319:—<i>likely,</i> eigi er ráðit at oss fari svá, Nj. 89; þat er þó eigi ráðit hvárt svá berr til, Ld. 24; eigi er þat ráðit, at honum þætti allt sem hann talaði, Band. 12: compar., er engi ráðnari hlutr, <i>more certain,</i> Hom. (St.); at ráðnu, <i>for certain,</i> id.: <i>valid,</i> nýmæli ekki skal vera lengr ráðit en þrjú sumur, K. Þ. K. 56.',
      '<strong>2.</strong> <i>clever;</i> ríkr ok ráðinn, Grett. 90; vitr maðr ok ráðinn, Fb. ii. 357; roskinn ok ráðinn.',
      '<strong>3.</strong> <i>betrayed,</i> Germ. <i>verrathen,</i> Akv. 15, Fm. 37.',
    ],
    slug: 'rada-2',
  }

  test('Gets object of abbreviations with expected keys', () => {
    const abbreviations = getAbbreviations(simpleEntry)

    expect(isObject(abbreviations)).toBeTruthy()
    expect(hasProperty(abbreviations, 'common')).toBeTruthy()
    expect(hasProperty(abbreviations, 'works')).toBeTruthy()
    expect(isArray(abbreviations.common)).toBeTruthy()
    expect(isArray(abbreviations.works)).toBeTruthy()
  })

  test('Abbreviations have expected content', () => {
    const { common, works } = getAbbreviations(simpleEntry)

    const expectedAbbrs = [
      {
        abbreviation: 'f.',
        explanation: 'feminine.',
      },
      {
        abbreviation: 'v.',
        explanation: 'vide.',
      },
    ]

    const expectedWorks = [
      {
        abbreviation: 'Lv.',
        explanation: 'Ljósvetninga Saga. (D. II.)',
      },
    ]

    expect(common).toEqual(expectedAbbrs)
    expect(works).toEqual(expectedWorks)
  })

  test('Does not list same abbreviation many times', () => {
    /**
     * Without ignoring doubles, this dataset produces
     * 90+ abbreviations and 140+ works.
     */
    const { common, works } = getAbbreviations(repeatedAbbreviationsEntry)

    const expectedAbbrs = [
      {
        abbreviation: 'A. S.',
        explanation: 'Anglo-Saxon.',
      },
      {
        abbreviation: 'Dan.',
        explanation: 'Danish.',
      },
      {
        abbreviation: 'Engl.',
        explanation: 'English.',
      },
      {
        abbreviation: 'f.',
        explanation: 'feminine.',
      },
      {
        abbreviation: 'freq.',
        explanation: 'frequent, frequently.',
      },
      {
        abbreviation: 'Germ.',
        explanation: 'German.',
      },
      {
        abbreviation: 'gl.',
        explanation: 'glossary.',
      },
      {
        abbreviation: 'Goth.',
        explanation: 'Gothic.',
      },
      {
        abbreviation: 'indic.',
        explanation: 'indicative.',
      },
      {
        abbreviation: 'l.',
        explanation: 'line.',
      },
      {
        abbreviation: 'm.',
        explanation: 'masculine.',
      },
      {
        abbreviation: 'mod.',
        explanation: 'modern.',
      },
      {
        abbreviation: 'n.',
        explanation: 'neuter.',
      },
      {
        abbreviation: 'part.',
        explanation: 'participle.',
      },
      {
        abbreviation: 'pers.',
        explanation: 'person.',
      },
      {
        abbreviation: 'pl.',
        explanation: 'plural.',
      },
      {
        abbreviation: 'pres.',
        explanation: 'present.',
      },
      {
        abbreviation: 'pret.',
        explanation: 'preterite.',
      },
      {
        abbreviation: 'S.',
        explanation: 'Saga.',
      },
      {
        abbreviation: 'subj.',
        explanation: 'subjunctive.',
      },
      {
        abbreviation: 'Teut.',
        explanation: 'Teutonic.',
      },
      {
        abbreviation: 'Ulf.',
        explanation: 'Ulfilas.',
      },
      {
        abbreviation: 'acc.',
        explanation: 'accusative.',
      },
      {
        abbreviation: 'dat.',
        explanation: 'dative.',
      },
      {
        abbreviation: 'þ.',
        explanation: 'þáttr.',
      },
      {
        abbreviation: 'v.',
        explanation: 'vide.',
      },
      {
        abbreviation: 'i. e.',
        explanation: 'id est.',
      },
      {
        abbreviation: 'gen.',
        explanation: 'genitive.',
      },
      {
        abbreviation: 'prop.',
        explanation: 'proper, properly.',
      },
      {
        abbreviation: 'L.',
        explanation: 'Linnæus.',
      },
      {
        abbreviation: 'id.',
        explanation: 'idem, referring to the passage quoted or to the translation',
      },
      {
        abbreviation: 'R.',
        explanation: 'Rimur.',
      },
      {
        abbreviation: 'infin.',
        explanation: 'infinitive.',
      },
      {
        abbreviation: 'reflex.',
        explanation: 'retlexive.',
      },
      {
        abbreviation: 'ch.',
        explanation: 'chapter.',
      },
      {
        abbreviation: 'cp.',
        explanation: 'compare.',
      },
      {
        abbreviation: 'impers.',
        explanation: 'impersonal.',
      },
      {
        abbreviation: 'l. c.',
        explanation: 'loco citato.',
      },
      {
        abbreviation: 'pr.',
        explanation: 'proper, properly.',
      },
      {
        abbreviation: 'recipr.',
        explanation: 'reciprocally.',
      },
      {
        abbreviation: 'compar.',
        explanation: 'comparative.',
      },
    ]

    const expectedWorks = [
      {
        abbreviation: 'Fms.',
        explanation: 'Fornmanna Sögur. (E. I.)',
      },
      {
        abbreviation: 'Hom.',
        explanation: 'Homiliu-bók. (F. II.)',
      },
      {
        abbreviation: 'Jd.',
        explanation: 'Jómsvíkinga-drápa. (A. III.)',
      },
      {
        abbreviation: 'Eg.',
        explanation: 'Egils Saga. (D. II.)',
      },
      {
        abbreviation: 'Fm.',
        explanation: 'Fafnis-mál. (A. II.)',
      },
      {
        abbreviation: 'Hm.',
        explanation: 'Hává-mál. (A. I.)',
      },
      {
        abbreviation: 'Nj.',
        explanation: 'Njála. (D. II.)',
      },
      {
        abbreviation: 'Sdm.',
        explanation: 'Sigrdrífu-mál. (A. II.)',
      },
      {
        abbreviation: 'Vþm.',
        explanation: 'Vafþrúðnis-mál. (A. I.)',
      },
      {
        abbreviation: 'Edda',
        explanation: 'Edda. (C. I.)',
      },
      {
        abbreviation: 'Grág.',
        explanation: 'Grágás. (B. I.)',
      },
      {
        abbreviation: 'Gullþ.',
        explanation: 'Gull-Þóris Saga. (D. II.)',
      },
      {
        abbreviation: 'Ld.',
        explanation: 'Laxdæla Saga. (D. II.)',
      },
      {
        abbreviation: 'Ls.',
        explanation: 'Loka-senna. (A. I.)',
      },
      {
        abbreviation: 'Lv.',
        explanation: 'Ljósvetninga Saga. (D. II.)',
      },
      {
        abbreviation: 'Ó. H.',
        explanation: 'Ólafs Saga Helga. (E. I.)',
      },
      {
        abbreviation: 'Sturl.',
        explanation: 'Sturlunga Saga. (D. I.)',
      },
      {
        abbreviation: 'Fb.',
        explanation: 'Flateyjar-bók (E. I.)',
      },
      {
        abbreviation: 'Al.',
        explanation: 'Alexanders Saga. (G. I.)',
      },
      {
        abbreviation: 'Bárð.',
        explanation: 'Bárðar Saga. (D. V.)',
      },
      {
        abbreviation: 'Eb.',
        explanation: 'Eyrbyggja Saga. (D. II.)',
      },
      {
        abbreviation: 'Fas.',
        explanation: 'Fornaldar Sögur. (C. II.)',
      },
      {
        abbreviation: 'Fs.',
        explanation: 'Forn-sögur. (D. II.)',
      },
      {
        abbreviation: 'Js.',
        explanation: 'Járnsíða. (B. III.)',
      },
      {
        abbreviation: 'Skv.',
        explanation: 'Sigurðar-kviða. (A. II.)',
      },
      {
        abbreviation: 'Am.',
        explanation: 'Atla-mál. (A. II.)',
      },
      {
        abbreviation: 'Dipl.',
        explanation: 'Diplomatarium. (J. I.)',
      },
      {
        abbreviation: 'Fbr.',
        explanation: 'Fóstbræðra Saga. (D. II.)',
      },
      {
        abbreviation: 'Gm.',
        explanation: 'Grímnis-mál. (A. I.)',
      },
      {
        abbreviation: 'Gþl.',
        explanation: 'Gulaþings-lög. (B. II.)',
      },
      {
        abbreviation: 'Hdl.',
        explanation: 'Hyndlu-ljóð. (A. II.)',
      },
      {
        abbreviation: 'Hkr.',
        explanation: 'Heimskringla. (E. I.)',
      },
      {
        abbreviation: 'Landn.',
        explanation: 'Landnáma. (D. I.)',
      },
      {
        abbreviation: 'Orkn.',
        explanation: 'Orkneyinga Saga. (E. II.)',
      },
      {
        abbreviation: 'Pm.',
        explanation: 'Pétrs-máldagi. (J. I.)',
      },
      {
        abbreviation: 'Rb.',
        explanation: 'Rímbegla. (H. III.)',
      },
      {
        abbreviation: 'Sks.',
        explanation: 'Konungs Skugg-sjá. (H. II.)',
      },
      {
        abbreviation: 'Fsm.',
        explanation: 'Fjölsvinns-mál. (A. II.)',
      },
      {
        abbreviation: 'Hkv.',
        explanation: 'Helga-kviða Hundingsbana. (A. II.)',
      },
      {
        abbreviation: 'Hkv. Hjörv.',
        explanation: 'Helga-kviða Hjörvarðssonar. (A. II.)',
      },
      {
        abbreviation: 'Lex. Poët.',
        explanation: 'Lexicon Poëticum by Sveinbjörn Egilsson, 1860.',
      },
      {
        abbreviation: 'Fær.',
        explanation: 'Færeyinga Saga. (E. II.)',
      },
      {
        abbreviation: 'Ver.',
        explanation: 'Veraldar Saga. (E. II.)',
      },
      {
        abbreviation: 'Bs.',
        explanation: 'Biskupa Sögur. (D. III.)',
      },
      {
        abbreviation: 'Karl.',
        explanation: 'Karla-magnús Saga. (G. I.)',
      },
      {
        abbreviation: 'K. Þ. K.',
        explanation: 'Kristinn-réttr Þorláks ok Ketils = Kristinna-laga-þáttr. (B. I.)',
      },
      {
        abbreviation: 'Greg.',
        explanation: 'Gregory. (F. II.)',
      },
      {
        abbreviation: 'N. G. L.',
        explanation: 'Norges Gamle Love. (B. II.)',
      },
      {
        abbreviation: 'Hbl.',
        explanation: 'Harbarðs-ljóð. (A. I.)',
      },
      {
        abbreviation: 'Íb.',
        explanation: 'Íslendinga-bók. (D. I.)',
      },
      {
        abbreviation: 'Rm.',
        explanation: 'Rígsmál. (A. II.)',
      },
      {
        abbreviation: 'Knytl.',
        explanation: 'Knytlinga Saga. (E. I.)',
      },
      {
        abbreviation: 'Sd.',
        explanation: 'Svarfdæla Saga. (D. II.)',
      },
      {
        abbreviation: 'Þorf. Karl.',
        explanation: 'Þorfinns Saga Karlsefnis. (D. II.)',
      },
      {
        abbreviation: 'Gísl.',
        explanation: 'Gísla Saga. (D. II.)',
      },
      {
        abbreviation: 'Band.',
        explanation: 'Banda-manna Saga. (D. II.)',
      },
      {
        abbreviation: 'Ölk.',
        explanation: 'Ölkofra-þáttr. (D. II.)',
      },
      {
        abbreviation: 'Grett.',
        explanation: 'Grettis Saga. (D. II.)',
      },
      {
        abbreviation: 'Akv.',
        explanation: 'Atla-kviða. (A. II.)',
      },
    ]

    expect(common).toEqual(expectedAbbrs)
    expect(works).toEqual(expectedWorks)
  })
})
