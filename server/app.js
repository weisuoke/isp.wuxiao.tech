const express = require('express')
const path = require('path')

const app = express()
const port = 3457

app.use(express.static(path.join(__dirname, "..", "dist")))

app.get('/', (req, res) => {
  console.log(path.join(__dirname, "..", "dist/index.html"))
  res.sendFile(path.join(__dirname, "..", "dist/index.html"))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})