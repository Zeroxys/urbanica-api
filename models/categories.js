const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Events = mongoose.model('events') // get model: events

const categoriesSchema = new Schema({
  name : String,
  events : [{type: Schema.ObjectId, ref: 'Events'}]
})

module.exports = mongoose.model('Categories', categoriesSchema)