import styles from './AbbreviationList.module.scss'

export default function AbbreviationList({ abbreviations }) {
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
