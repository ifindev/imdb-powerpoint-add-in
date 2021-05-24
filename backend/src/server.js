const express = require('express')
const cors = require('cors')
const imdbScrape = require('./imdb/imdbScrape')

const app = express()
app.use(cors())

const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/imdb', async (req, res) => {
  const imdb =
    'https://www.imdb.com/search/title/?groups=top_100&sort=user_rating,desc'
  const movies = await imdbScrape(imdb)
  res.send(movies)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
