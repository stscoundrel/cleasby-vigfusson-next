import { Abbreviation } from 'lib/services/abbreviations'
import styles from './AbbreviationList.module.scss'

interface AbbreviationListProps{
  abbreviations: Abbreviation[]
}

export default function AbbreviationList({ abbreviations }: AbbreviationListProps) {
  return (
    <>
      {abbreviations.map(({ abbreviation, explanation }) => (
        <dl className={styles.wrap} key={abbreviation}>
          <dt className={styles.abbreviation}>
            <strong>{abbreviation}</strong>
          </dt>
          <dd className={styles.explanation}>{explanation}</dd>
        </dl>
      ))}
    </>
  )
}
