import ExternalLink from 'components/ExternalLink'
import LetterLink from 'components/LetterLink'

export default function Footer({ letters }) {
  return (
    <footer>
      <hr />

      <section>
        <h2>About</h2>
        <p>Based on Cleasby & Vigfusson Dictionary Old Norse dictionary.</p>
        <p><em>Icelandic-English</em> dictionary was started by Richard Cleasby and
        finished by Gudbrand Vigfusson.</p>
        <p>It was published in 1874,
        which leads to there being many public domain versions of the book available.</p>
      </section>

      <nav>
        <p>Dictionary project</p>
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

      <nav>
        <p>Quick links</p>
        <ul>
          {letters.map((entry) => (
            <li key={entry.slug}>
              <LetterLink letter={entry} />
            </li>
          ))}
        </ul>
      </nav>

      <small>Copyright © 2020 Sampo Silvennoinen / StScoundrel</small>
    </footer>
  )
}
