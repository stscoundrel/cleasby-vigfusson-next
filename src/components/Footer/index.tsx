import ExternalLink from 'components/ExternalLink'
import LetterLink from 'components/LetterLink'
import ContentArea from 'components/ContentArea'
import { AlphabetLetter } from 'lib/services/dictionary'
import styles from './Footer.module.scss'

interface FooterProps{
  letters: AlphabetLetter[]
}

export default function Footer({ letters }: FooterProps) {
  return (
    <footer className={styles.section}>
      <div className="container">

        <ContentArea>
          <h2>About</h2>
          <p>Based on Cleasby & Vigfusson Dictionary Old Norse dictionary.</p>
          <p><em>Icelandic-English</em> dictionary was started by Richard Cleasby and
          finished by Gudbrand Vigfusson.</p>
          <p>It was published in 1874,
          which leads to there being many public domain versions of the book available.</p>
        </ContentArea>

        <ContentArea>
          <h3>Old Norse language</h3>
          <p>Old Norse was a North Germanic language that was spoken by inhabitants of
          Scandinavia and their overseas settlements from about the 7th to the 15th centuries.</p>

          <p>Also known as &quot;the viking language&quot;,
          &quot;Old Nordic&quot;, or
          &quot;Old Scandinavian&quot;</p>
        </ContentArea>

        <div className={styles.navs}>
          <nav className={styles.nav}>
            <h4 className={styles.navTitle}>Dictionary project</h4>
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
              <li>
                <ExternalLink
                  title="Abbreviations"
                  href="https://github.com/stscoundrel/cleasby-vigfusson-abbreviations"
                />
              </li>
              <li>
                <ExternalLink
                  title="Younger Futhark Runes"
                  href="https://github.com/stscoundrel/younger-futhark"
                />
              </li>
            </ul>
          </nav>

          <nav className={styles.nav}>
            <h4 className={styles.navTitle}>Related dictionary projects</h4>
            <ul>
              <li>
                <ExternalLink
                  title="A Concise Dictionary of Old Icelandic"
                  href="https://old-icelandic.vercel.app/"
                />
              </li>
              <li>
                <ExternalLink
                  title="K.F Söderwall's Old Swedish Dictionary"
                  href="https://old-swedish-dictionary.vercel.app/"
                />
              </li>
              <li>
                <ExternalLink
                  title="Dictionary of the Old Norwegian Language"
                  href="https://old-norwegian-dictionary.vercel.app/"
                />
              </li>
              <li>
                <ExternalLink
                  title="Otto Kalkar's Old Danish Dictionary"
                  href="https://old-danish-dictionary.vercel.app/"
                />
              </li>
            </ul>
          </nav>

          <nav className={styles.nav}>
            <h4 className={styles.navTitle}>Quick links</h4>
            <ul className={styles.navColumns}>
              {letters.map((entry) => (
                <li className={styles.navColumnItem} key={entry.slug}>
                  <LetterLink letter={entry} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <small className={styles.copyright}>{`Copyright © 2020 - ${new Date().getFullYear()}`}
          <br />
          <ExternalLink
            title="Sampo Silvennoinen / StScoundrel"
            href="https://github.com/stscoundrel"
          />
        </small>
      </div>
    </footer>
  )
}
