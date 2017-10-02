const app = require('./app.js')
const connection = require('./connection')
const port = process.env.PORT || 5000


//Mongoose connection
connection.then((db) => {
  if(db) {
    app.listen(port,(err) => {
      if(err) return console.log(err)
      console.log("connected on port " + port)
    })
  }
}).catch((err) => {
  console.log(err.message)
})
