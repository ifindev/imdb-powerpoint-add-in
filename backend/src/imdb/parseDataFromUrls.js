const getMovieData = require('./getMovieData')

const parseDataFromUrls = (urls) => {
  return Promise.all(
    urls.map((url) => {
      return getMovieData(`https://www.imdb.com${url}`)
    })
  )
}

module.exports = parseDataFromUrls
