const app = require('./app.js')
const connection = require('./connection')
const port = process.env.PORT || 8181


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
