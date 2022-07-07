const WORDS = 35207

let start = 0

// Url for localhost: http://127.0.1:3000

const revalidatePages = async (secret, baseUrl = 'https://cleasby-vigfusson-dictionary.vercel.app') => {
  try {
    while (start < WORDS) {
      const end = start + 250
      const url = `${baseUrl}/api/revalidate?secret=${secret}&start=${start}&end=${end}`
      console.time(`${start} - ${end}`)
      // eslint-disable-next-line no-await-in-loop
      await fetch(url)

      console.log(`Finished words ${start} - ${end}`)

      console.timeEnd(`${start} - ${end}`)
      start = end
    }
  } catch (e) {
    console.log(e)
  }
}

const args = process.argv;
const secret = args[2];
const baseUrl = args[3];

revalidatePages(secret, baseUrl)
