const express = require('express')
const router = express.Router()
const os = require('os')
const pokeneas = require('../data/pokeneas')

router.get('/', (req, res) => {
  const number = Math.floor(Math.random() * pokeneas.length)
  const pokenea = pokeneas[number]
  res.json({
    id: pokenea.id,
    nombre: pokenea.nombre,
    altura: pokenea.altura,
    habilidad: pokenea.habilidad,
    containerId: os.hostname()
  })
})

module.exports = router