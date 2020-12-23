import WordLink from 'components/WordLink'
import styles from './WordList.module.scss'

export default function WordList({ words }) {
  return (
    <dl className={styles.list}>
      { words.map((word) => (
        <dt key={word.slug}>
          <WordLink data={word} />
        </dt>
      )) }
    </dl>
  )
}
