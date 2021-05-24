const rp = require('request-promise')
const cheerio = require('cheerio')
import parseDataFromUrls from './parseDataFromUrls'

const imdb =
  'https://www.imdb.com/search/title/?groups=top_100&sort=user_rating,desc'

const imdbScrape = async (url) => {
  try {
    const html = await rp(url)
    const $ = await cheerio.load(html)
    const movieTitles = await $('.lister-item-header > a', html)
    const movieUrls = []
    for (let i = 0; i < 15; i++) {
      movieUrls.push(movieTitles[i].attribs.href)
    }
    const parsedMovies = await parseDataFromUrls(movieUrls)
    // console.log(parsedMovies)
    return parsedMovies
  } catch (err) {
    console.log(err)
  }
}

module.exports = imdbScrape
