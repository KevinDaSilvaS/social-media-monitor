const express = require('express')
const generator = require('./app/tweet-generator/gen')
const app = express()
const port = 3001

//https://medium.com/camilawaltrick/detecacao-anomalia-dados-nao-rotulados-unidimensionais-com-estatistica-e-pyod-94a983b879a1
/* ?query=%23apple */
app.get('/2/tweets/search/recent', (req, res) => {
  res.send(generator.generatePayload())
})

app.listen(port, () => {
  console.log(`Feeder app listening on port ${port}`)
})