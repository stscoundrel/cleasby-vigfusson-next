import { youngerFuthark } from 'riimut'
import type { Crosslink } from 'scandinavian-dictionary-crosslinker'
import { capitalize, getOlderSpelling } from 'lib/utils/strings'
import { addAbbreviationsToContent, type CombinedAbbreviations } from 'lib/services/abbreviations'
import Abbreviations from 'components/Abbreviations'
import type { DictionaryEntry } from 'lib/services/dictionary'
import Crosslinks from 'components/Crosslinks'
import SimilarEntries from 'components/SimilarEntries'
import styles from './WordDefinition.module.scss'

interface WordDefinitionProps{
  entry: DictionaryEntry,
  similarEntries: DictionaryEntry[],
  abbreviations: CombinedAbbreviations,
  crosslinks: Crosslink[],
}

export default function WordDefinition({
  entry, similarEntries, abbreviations, crosslinks,
}: WordDefinitionProps) {
  const { word, definitions } = entry
  const olderForm = getOlderSpelling(word)
  const hasOlderForm = word !== olderForm

  return (
    <article className={styles.section}>
      <header>
        <h1 lang="non">{capitalize(word)}</h1>

        <small className={styles.subHeading}>
          Old Norse Dictionary - {word.toLowerCase()}
        </small>
        <p>Meaning of Old Norse word <em>&quot;{word}&quot;</em>
        {hasOlderForm && <> (or <em>{olderForm}</em>)</>} in English.</p>
      </header>

      <p>As defined by the Cleasby & Vigfusson Old Norse to English dictionary:</p>

      {definitions.length > 1 && <p><dfn className="capitalize">{word}</dfn> Old Norse word can mean:</p>}
      {definitions.map((definition, index) => (
        <dl className={styles.definitionList} key={`definition-${index}`}>
          <dt><strong>{word}</strong> {hasOlderForm && <>({olderForm})</>}</dt>
          <dd
            className={styles.itemDescription}
            dangerouslySetInnerHTML={{
              __html: addAbbreviationsToContent(definition, abbreviations),
            } }
          ></dd>
        </dl>
      ))}

      {hasOlderForm
        && <p>
          <strong>Orthography: </strong>The Cleasby & Vigfusson book used letter <em>ö </em>
          to represent the original Old Norse vowel <em>ǫ</em>. Therefore, <em>{word}</em> may be
          more accurately written as <em>{olderForm}</em>.
        </p>}

      <p>Possible runic inscription in <em>Younger Futhark</em>:
        <span className={styles.rune}>{ youngerFuthark.lettersToRunes(word) }</span><br />
      <small>Younger Futhark runes were used from 8th to 12th centuries
        in Scandinavia and their overseas settlements</small>
      </p>

      <SimilarEntries entries={similarEntries} />
      <Abbreviations abbreviations={abbreviations} />
      <br />
      <Crosslinks crosslinks={crosslinks} />
    </article>
  )
}
