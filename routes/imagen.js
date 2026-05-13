const express = require('express')
const router = express.Router()
const os = require('os')
const pokeneas = require('../data/pokeneas')

router.get('/', (req, res) => {
  const number = Math.floor(Math.random() * pokeneas.length)
  const pokenea = pokeneas[number]
  res.send(`
    <html>
      <body style="font-family: Arial; text-align: center; background-color: #f0f0f0; padding: 50px">
        <h1>${pokenea.nombre}</h1>
        <img src="${pokenea.imagen}" alt="${pokenea.nombre}" width="300"/>
        <p style="font-size: 24px; font-style: italic;">"${pokenea.frase}"</p>
        <p style="color: gray;">Container Id: ${os.hostname()}</p>
      </body>
    </html>
  `)
})

module.exports = router