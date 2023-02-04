import { Crosslink } from 'lib/services/crosslinks'
import ExternalLink from 'components/ExternalLink'
import styles from './Crosslinks.module.scss'

interface CrossLinkProps {
  crosslinks: Crosslink[]
}

export default function Crosslinks({ crosslinks }: CrossLinkProps) {
  const getRelatedDictionaryName = (source: string): string => {
    if (source === 'old-norwegian') {
      return 'Old Norwegian - Johan Fritzner\'s Dictionary'
    }

    if (source === 'old-swedish') {
      return 'Old Swedish - K.F Söderwall\'s Dictionary'
    }

    if (source === 'old-icelandic') {
      return 'Old Icelandic - Geir Zoëga\'s Dictionary'
    }

    return ''
  }

  if (crosslinks.length === 0) {
    return null
  }

  return (
    <>
      <h4>Also available in related dictionaries:</h4>
      <p>This headword also appears in dictionaries of other languages descending
        from Old Norse.
      </p>
      <ul className={styles.list}>
        {crosslinks.map(({ url, source }, index) => (
          <li className={styles.listItem} key={`crosslink-${index}`}>
            <ExternalLink href={url} title={getRelatedDictionaryName(source)} />
          </li>
        ))}
      </ul>
    </>
  )
}
