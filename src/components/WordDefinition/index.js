import { capitalize } from 'lib/utils/strings'
import { lettersToRunes } from 'younger-futhark'
import styles from './WordDefinition.module.scss'

export default function WordDefinition({ data }) {
  const { word, definitions } = data

  return (
    <article className={styles.section}>
      <header>
        <h1 className="capitalize" lang="non">{capitalize(word)}</h1>
        <p>Possible runic inscription in <em>Younger Futhark:</em> { lettersToRunes(word) }</p>
        <p>Meaning of Old Norse word <em>&quot;{word}&quot;</em></p>
      </header>

      {definitions.length > 1 && <p><dfn className="capitalize">{word}</dfn> Old Norse word can mean:</p>}
      {definitions.map((definition, index) => (
        <dl className={styles.definitionList} key={`definition-${index}`}>
          <dt><strong>{word}</strong></dt>
          <dd
            className={styles.itemDescription}
            dangerouslySetInnerHTML={ { __html: definition } }
          ></dd>
        </dl>
      ))}
    </article>
  )
}
