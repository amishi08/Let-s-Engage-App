const path = require('path')
const express = require('express')

const app = express()

app.use(express.static(path.join(__dirname, 'assets')))

app.get('/', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'home.html'))
)

app.get('/join', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'callPage.html'))
)

const PORT = 5000

app.listen(
  PORT,
  console.log(`server running in 5000`)
)