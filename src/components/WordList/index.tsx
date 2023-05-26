import { DictionaryEntry } from 'cleasby-vigfusson-dictionary'
import WordLink from 'components/WordLink'
import { DictionaryEntryDTO } from 'lib/services/dictionary'
import { hasProperty } from 'spyrjari'
import styles from './WordList.module.scss'

interface WordListProps {
  words: DictionaryEntryDTO[] | DictionaryEntry[],
  showDefinition?: boolean
}

export default function WordList({ words, showDefinition = false }: WordListProps) {
  return (
    <ul className={styles.list}>
      { words.map((word) => (
        <li key={word.slug}>
          <WordLink data={word} />
          {showDefinition && hasProperty(word, 'definitions') && <p dangerouslySetInnerHTML={{
            __html: word.definitions[0],
          } } />}
        </li>
      )) }
    </ul>
  )
}
