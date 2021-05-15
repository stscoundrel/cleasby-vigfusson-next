import AbbreviationList from 'components/AbbreviationList'
import styles from './Abbreviations.module.scss'

export default function Abbreviations({ abbreviations }) {
  const { common: commonAbbreviations, works: workAbbreviations } = abbreviations

  return (
    <div className={styles.abbreviations}>
      {commonAbbreviations.length > 0
        && <div className={styles.column}>
          <h4>Abbreviations used:</h4>
          <AbbreviationList abbreviations={commonAbbreviations} />
        </div>
      }
      {workAbbreviations.length > 0
        && <div className={styles.column}>
          <h4>Works & Authors cited:</h4>
          <AbbreviationList abbreviations={workAbbreviations} />
        </div>
      }
    </div>
  )
}
