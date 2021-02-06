export const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()

export const removeHTML = (string) => {
  let filteredString = string
  if (filteredString) {
    const removes = ['<strong>', '</strong>', '<i>', '</i>']

    removes.forEach((remove) => {
      filteredString = filteredString.replace(new RegExp(remove, 'g'), '')
    })
  }

  return filteredString
}

export default {
  capitalize,
  removeHTML,
}
