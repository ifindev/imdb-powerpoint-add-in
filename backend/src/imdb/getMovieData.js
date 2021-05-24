const rp = require('request-promise')
const cheerio = require('cheerio')

const getMovieData = async (url) => {
  try {
    const html = await rp(url)
    const $ = cheerio.load(html)
    const movieTitle = $('h1', html).text().trim()
    const movieDesc = $('.summary_text', html).text().trim()
    const ratingValue = $('.ratingValue', html).text().trim()
    const posterUrl = $('.poster > a > img').attr('src')
    return {
      title: movieTitle ? movieTitle : '',
      description: movieDesc ? movieDesc : '',
      rating: ratingValue ? ratingValue : '',
      poster: posterUrl ? posterUrl : '',
    }
  } catch (err) {
    console.log(err)
  }
}

export default getMovieData
