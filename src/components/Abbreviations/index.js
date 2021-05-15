export default function Abbreviations({ abbreviations }) {
  return (
    <div>
      {Array.from(abbreviations).map(([abbreviation, explanation]) => (
        <dl key={abbreviation}>
          <dt><strong>{abbreviation}</strong></dt>
          <dd>{explanation}</dd>
        </dl>
      ))}
    </div>
  )
}
