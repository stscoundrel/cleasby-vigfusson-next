export const capitalize = (
  content: string,
): string => (
  content.charAt(0).toUpperCase() + content.slice(1).toLowerCase()
)

export const removeHTML = (content: string): string => {
  let filteredString = content
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
