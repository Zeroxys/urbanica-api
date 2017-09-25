const express = require('express')
const webRoutes = express.Router()

webRoutes.get('/', (req, res) => {
  res.status(200).send({message: 'website'})
})

module.exports = webRoutes