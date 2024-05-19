import Link from 'next/link'

export default function SampleText() {
  return (
    <>
      <p className="h4">
        A sample of Old Norse:
      </p>
      <p>
        <em>
         En <Link href="/word/er" prefetch={false}>er</Link> <Link href="/word/thessi" prefetch={false}>þessi</Link> <Link href="/word/tidindi" prefetch={false}>tíðindi</Link> <Link href="/word/verda-2" prefetch={false}>verða</Link>, <Link href="/word/tha-2" prefetch={false}>þá</Link>
         <Link href="/word/standa" prefetch={false}>stendr</Link> <Link href="/word/upp" prefetch={false}>upp</Link> Heimdallr <Link href="/word/ok" prefetch={false}>ok</Link> <Link href="/word/blasa-2" prefetch={false}>blæss</Link> <Link href="/word/a-kafliga" prefetch={false}>ákafliga</Link> í <Link href="/word/gjoll" prefetch={false}>Gjallar</Link><Link href="/word/horn" prefetch={false}>horn</Link> <Link href="/word/ok" prefetch={false}>ok</Link> <Link href="/word/vekja" prefetch={false}>vekr</Link> <Link href="/word/upp" prefetch={false}>upp</Link> <Link href="/word/allr" prefetch={false}>ǫll</Link> <Link href="/word/god" prefetch={false}>guðin</Link>, <Link href="/word/ok" prefetch={false}>ok</Link> <Link href="/word/eiga" prefetch={false}>eiga</Link> þau <Link href="/word/thing" prefetch={false}>þing</Link> <Link href="/word/saman" prefetch={false}>saman</Link>
         . <Link href="/word/tha-2" prefetch={false}>þá</Link> <Link href="/word/rida-3" prefetch={false}>ríðr</Link> <Link href="/word/odinn" prefetch={false}>Óðinn</Link> <Link href="/word/til" prefetch={false}>til</Link> <Link href="/word/mimir" prefetch={false}>Mímisbrunns</Link> <Link href="/word/ok" prefetch={false}>ok</Link> <Link href="/word/taka" prefetch={false}>tekr</Link> <Link href="/word/rada" prefetch={false}>ráð</Link> <Link href="/word/af" prefetch={false}>af</Link> <Link href="/word/mimir" prefetch={false}>Mími</Link> <Link href="/word/fyrir" prefetch={false}>fyrir</Link> <Link href="/word/ser" prefetch={false}>sér</Link> <Link href="/word/ok" prefetch={false}>ok</Link> sínu <Link href="/word/lidi" prefetch={false}>liði</Link>
         . <Link href="/word/tha-2" prefetch={false}>þá</Link> <Link href="/word/skelfr" prefetch={false}>skelfr</Link> <Link href="/word/askr" prefetch={false}>askr</Link> Yggdrasils, <Link href="/word/ok" prefetch={false}>ok</Link> engi <Link href="/word/hlutr" prefetch={false}>hlutr</Link> <Link href="/word/er" prefetch={false}>er</Link> <Link href="/word/tha-2" prefetch={false}>þá</Link> <Link href="/word/otta-lauss" prefetch={false}>óttalauss</Link> á <Link href="/word/himinn" prefetch={false}>himni</Link> eða <Link href="/word/jord" prefetch={false}>jǫrðu</Link>
         . <Link href="/word/aesir" prefetch={false}>Æsir</Link> <Link href="/word/her-klaeda" prefetch={false}>herklæða</Link> <Link href="/word/sik" prefetch={false}>sik</Link> <Link href="/word/ok" prefetch={false}>ok</Link> <Link href="/word/allr" prefetch={false}>allir</Link> <Link href="/word/ein-herjar" prefetch={false}>Einherjar</Link> <Link href="/word/ok" prefetch={false}>ok</Link> <Link href="/word/saekja" prefetch={false}>sœkja</Link> <Link href="/word/fram" prefetch={false}>fram</Link> á <Link href="/word/vollr" prefetch={false}>vǫlluna</Link>
         . <Link href="/word/rida-3" prefetch={false}>ríðr</Link> <Link href="/word/fyrsta" prefetch={false}>fyrstr</Link> <Link href="/word/odinn" prefetch={false}>Óðinn</Link> <Link href="/word/med" prefetch={false}>með</Link> <Link href="/word/gull-hjalmr" prefetch={false}>gullhjálm</Link> <Link href="/word/ok" prefetch={false}>ok</Link> <Link href="/word/fagr" prefetch={false}>fagra</Link> <Link href="/word/brynja-2" prefetch={false}>brynju</Link> <Link href="/word/ok" prefetch={false}>ok</Link> <Link href="/word/geirr" prefetch={false}>geir</Link> <Link href="/word/sinn" prefetch={false}>sinn</Link> <Link href="/word/er" prefetch={false}>er</Link> Gungnir <Link href="/word/heita-2" prefetch={false}>heitir</Link>. <Link href="/word/stefnir" prefetch={false}>Stefnir</Link> <Link href="/word/hann" prefetch={false}>hann</Link> <Link href="/word/mot" prefetch={false}>móti</Link> Fenris<Link href="/word/ulfr" prefetch={false}>úlf</Link>
         , en Þórr <Link href="/word/fram" prefetch={false}>fram</Link> á aðra <Link href="/word/hlid" prefetch={false}>hlið</Link> <Link href="/word/hann" prefetch={false}>honum</Link>, <Link href="/word/ok" prefetch={false}>ok</Link> <Link href="/word/mega" prefetch={false}>má</Link> <Link href="/word/hann" prefetch={false}>hann</Link> <Link href="/word/ekki" prefetch={false}>ekki</Link> <Link href="/word/duga" prefetch={false}>duga</Link> <Link href="/word/hann" prefetch={false}>honum</Link>, <Link href="/word/thvi" prefetch={false}>því</Link> at <Link href="/word/hann" prefetch={false}>hann</Link> <Link href="/word/hafa" prefetch={false}>hefir</Link> <Link href="/word/full-2" prefetch={false}>fullt</Link> <Link href="/word/fang" prefetch={false}>fang</Link> at <Link href="/word/berja" prefetch={false}>berjask</Link> <Link href="/word/vid" prefetch={false}>við</Link> <Link href="/word/mid-gardr" prefetch={false}>Miðgarðs</Link>-<Link href="http://localhost:3000/word/ormr" prefetch={false}>orm</Link>.
        </em>
      </p>

      <p>
        Excerpt from &quot;About Ragnarøk&quot; in Gylfaginning chapter 51, Prose Edda.
        Prose Edda was written around 1220, but the stories and poems are thought to
        be composed over longer period of time, the eldest ones linguistically
        dating back to the 9th century.
      </p>
      <hr />
    </>
  )
}
