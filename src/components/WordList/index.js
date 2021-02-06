import WordLink from 'components/WordLink'
import styles from './WordList.module.scss'

export default function WordList({ words }) {
  return (
    <ul className={styles.list}>
      { words.map((word) => (
        <li key={word.slug}>
          <WordLink data={word} />
        </li>
      )) }
    </ul>
  )
}
