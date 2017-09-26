const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const connection = require('./connection')
const port = process.env.PORT || 8181

// Routes
const routes = require('./routes/routes.js')
const webRoutes = require('./routes/web/routes.js')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/', webRoutes)
app.use('/api', routes)

//Mongoose connection
connection.then((db) => {
  if(db) {
    app.listen(port,(err) => {
      if(err) return console.log(err)
      console.log('connected')
    })
  }
}).catch((err) => {
  console.log(err.message)
})
