import { getBreadcrumbs } from 'lib/utils/breadcrumbs'
import { getSchema } from 'lib/utils/schema'
import Link from 'next/link'
import styles from './Breadcrumbs.module.scss'

export default function Breadcrumbs({ type, content }) {
  const getBreadCrumbData = () => {
    let letter = null
    let word = null

    if (type !== 'page') {
      letter = type === 'letter' ? content[0].word.charAt(0).toLowerCase() : content.word.charAt(0).toLowerCase()
    }

    if (type === 'word') {
      word = content.word
    }

    return {
      type,
      letter,
      word,
    }
  }

  const breadcrumbs = getBreadcrumbs(getBreadCrumbData())
  const schema = getSchema(breadcrumbs, 'breadcrumbs')

  return (
    <nav className={styles.section}>
      <div className="container">
        {breadcrumbs.map(({ label, url }) => (
          <Link key={url} href={url}>
            <a className={styles.link}>{label}</a>
          </Link>
        ))}

        <script type='application/ld+json' dangerouslySetInnerHTML={ { __html: schema } }/>
      </div>
    </nav>
  )
}
