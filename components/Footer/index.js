import ExternalLink from 'components/ExternalLink'
import LetterLink from 'components/LetterLink'
import styles from './Footer.module.scss'

export default function Footer({ letters }) {
  return (
    <footer className={styles.section}>
      <div className="container">

        <section className={styles.about}>
          <h2>About</h2>
          <p>Based on Cleasby & Vigfusson Dictionary Old Norse dictionary.</p>
          <p><em>Icelandic-English</em> dictionary was started by Richard Cleasby and
          finished by Gudbrand Vigfusson.</p>
          <p>It was published in 1874,
          which leads to there being many public domain versions of the book available.</p>
        </section>

        <div className={styles.navs}>
          <nav className={styles.nav}>
            <h5 className={styles.navTitle}>Dictionary project</h5>
            <ul>
              <li>
                <ExternalLink
                  title="Source code"
                  href="https://github.com/stscoundrel/cleasby-vigfusson-next"
                />
              </li>
              <li>
                <ExternalLink
                  title="Data source"
                  href="https://github.com/stscoundrel/cleasby-vigfusson-dictionary"
                />
              </li>
            </ul>
          </nav>

          <nav className={styles.nav}>
            <h5 className={styles.navTitle}>Related packages</h5>
            <ul>
              <li>
                <ExternalLink
                  title="Old Norse Alphabet"
                  href="https://github.com/stscoundrel/old-norse-alphabet"
                />
              </li>
              <li>
                <ExternalLink
                  title="Old Norse Alphabet Sort"
                  href="https://github.com/stscoundrel/old-norse-alphabet-sort"
                />
              </li>
              <li>
                <ExternalLink
                  title="Teljari"
                  href="https://github.com/stscoundrel/teljari"
                />
              </li>
              <li>
                <ExternalLink
                  title="Spyrjari"
                  href="https://github.com/stscoundrel/spyrjari"
                />
              </li>


            </ul>
          </nav>

          <nav className={styles.nav}>
            <h5 className={styles.navTitle}>Quick links</h5>
            <ul className={styles.navColumns}>
              {letters.map((entry) => (
                <li className={styles.navColumnItem} key={entry.slug}>
                  <LetterLink letter={entry} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <small className={styles.copyright}>Copyright © 2020
          <ExternalLink
            title="Sampo Silvennoinen / StScoundrel"
            href="https://github.com/stscoundrel"
          />
        </small>
      </div>
    </footer>
  )
}
