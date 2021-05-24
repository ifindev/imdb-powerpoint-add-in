import getMovieData from './getMovieData'

const parseDataFromUrls = (urls) => {
  return Promise.all(
    urls.map((url) => {
      return getMovieData(`https://www.imdb.com${url}`)
    })
  )
}
