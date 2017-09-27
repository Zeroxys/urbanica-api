const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Events = mongoose.model('events')

const categoriesSchema = new Schema({
  name : {
    type: String,
    required: true,
    unique: true
  },
  events : [{type: Schema.ObjectId, ref: 'events', required : true}]
})

module.exports = mongoose.model('categories', categoriesSchema)