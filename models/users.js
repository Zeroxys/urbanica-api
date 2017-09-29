const mongoose = require('mongoose')
const Schema = mongoose.Schema


const usersSchema = new Schema({
  name : {type: String, required: true},
  token : {type: String, required: true}, 
  email : {type: String, required: true},
  img : {type: String, required: true},
  pay : String,
  places : [{type : Schema.ObjectId, ref : 'places'}]
})

module.exports = mongoose.model('users', usersSchema)
