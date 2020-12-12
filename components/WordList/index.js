import WordLink from 'components/WordLink'

export default function WordList({ words }) {
  return (
    <dl>
      { words.map((word) => (
        <dt key={word.slug}>
          <WordLink data={word} />
        </dt>
      )) }
    </dl>
  )
}
