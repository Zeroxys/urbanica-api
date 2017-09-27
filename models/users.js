const mongoose = require('moongose')
const Schema = mongoose.Schema


const usersSchema = new Schema({
  name : String,
  token : String,
  email : String,
  img : String,
  pay : String,
  places : [{type : Schema.ObjectId, ref : 'places'}]
})

module.exports = mongoose.model('users', usersSchema)
