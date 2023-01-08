import { capitalize } from 'lib/utils/strings'
import { lettersToRunes } from 'younger-futhark'
import { addAbbreviationsToContent } from 'lib/services/abbreviations'
import Abbreviations from 'components/Abbreviations'
import styles from './WordDefinition.module.scss'

export default function WordDefinition({ data, abbreviations }) {
  const { word, definitions } = data

  return (
    <article className={styles.section}>
      <header>
        <h1 lang="non">{capitalize(word)}</h1>

        <small className={styles.subHeading}>
          Old Norse Dictionary - {word.toLowerCase()}
        </small>
        <p>Meaning of Old Norse word <em>&quot;{word}&quot;</em> in English.</p>
      </header>

      <p>As defined by the Cleasby & Vigfusson Old Norse to English dictionary:</p>

      {definitions.length > 1 && <p><dfn className="capitalize">{word}</dfn> Old Norse word can mean:</p>}
      {definitions.map((definition, index) => (
        <dl className={styles.definitionList} key={`definition-${index}`}>
          <dt><strong>{word}</strong></dt>
          <dd
            className={styles.itemDescription}
            dangerouslySetInnerHTML={{
              __html: addAbbreviationsToContent(definition, abbreviations),
            } }
          ></dd>
        </dl>
      ))}

<p>Possible runic inscription in <em>Younger Futhark</em>:
        <span className={styles.rune}>{ lettersToRunes(word) }</span><br />
      <small>Younger Futhark runes were used from 8th to 12th centuries
        in Scandinavia and their overseas settlements</small>
      </p>

      <Abbreviations abbreviations={abbreviations} />
    </article>
  )
}
