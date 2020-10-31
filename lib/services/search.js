export const searchDictionary = (search, dictionary) => {
  const results = dictionary.filter((entry) => {
    let matchesSearch = false

    if (entry.word.includes(search)) {
      matchesSearch = true
    }

    if (entry.slug.includes(search)) {
      matchesSearch = true
    }

    entry.definitions.forEach((definition) => {
      if (definition.includes(search)) {
        matchesSearch = true
      }
    })

    return matchesSearch
  })

  return results
}

export default {
  searchDictionary,
}
