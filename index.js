const express = require('express')
const app = express()
const port = 80

const jsonRoute = require('./routes/json')
const imagenRoute = require('./routes/imagen')

app.use('/api', jsonRoute)
app.use('/imagen', imagenRoute)

app.listen(port, () => {
  console.log(`Pokeneas app listening on port ${port}`)
})