const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// Routes
const webRoutes = require('./routes/web/routes.js')
const routes = require('./routes/routes.js')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/', webRoutes)
app.use('/api', routes)

module.exports = app