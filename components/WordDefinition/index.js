export default function WordDefinition({ data }) {
  const { word, definitions } = data

  return (
    <article>
      <header>
        <h1 lang="non">{word}</h1>
        <p>Meaning of Old Norse word &quot;{word}&quot;</p>
      </header>

      <p><dfn>{word}</dfn> Old Norse word can mean:</p>
      {definitions.map((definition, index) => (
        <dl key={`definition-${index}`}>
          <dt><strong>{word}</strong></dt>
          <dd dangerouslySetInnerHTML={ { __html: definition } }></dd>
        </dl>
      ))}
    </article>
  )
}
