export default function WordDefinition({ data }) {
  const { word, definitions } = data

  return (
    <>
      <h1>{word}</h1>
      <p><dfn>{word}</dfn> Old Norse word can mean:</p>
        {definitions.map((definition, index) => (
          <dl key={`definition-${index}`}>
            <dt><strong>{word}</strong></dt>
            <dd dangerouslySetInnerHTML={ { __html: definition } }></dd>
          </dl>
        ))}
    </>
  )
}
