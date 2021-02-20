const formatResults = (results, search, criteria) => {
  const formattedResults = results.map((result) => {
    const foundIn = []

    if (criteria.includes('definitions')) {
      result.definitions.forEach((definition) => {
        if (definition.toLowerCase().includes(search.toLowerCase())) {
          foundIn.push(definition)
        }
      })
    }

    return {
      ...result,
      foundIn,
    }
  })

  return formattedResults
}

export const searchDictionary = (search, dictionary, criteria = ['headword', 'definitions']) => {
  const filteredSearch = search.toLowerCase()

  const results = dictionary.filter((entry) => {
    let matchesSearch = false

    if (criteria.includes('headword')) {
      if (entry.word.toLowerCase().includes(filteredSearch)) {
        matchesSearch = true
      }

      if (entry.slug.includes(filteredSearch)) {
        matchesSearch = true
      }
    }

    if (criteria.includes('definitions')) {
      entry.definitions.forEach((definition) => {
        if (definition.toLowerCase().includes(filteredSearch)) {
          matchesSearch = true
        }
      })
    }

    return matchesSearch
  })

  const formattedResult = formatResults(results, search, criteria)

  return formattedResult
}

export default {
  searchDictionary,
}
