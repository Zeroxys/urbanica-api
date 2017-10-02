const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventsSchema = new Schema({  
  key : {type: Number},
  img: { type: String, required: true},
  name : {type: String, required: true},
  stars : {type: String, required : true},
  enter : {type: String, required: true},
  rate: {type: String, required: true},
  schedule: {type: String, required: true},
  review: {type: String, required: true}
})

eventsSchema.pre('save', next => {
  let eventsSchema = this
  eventsSchema.key++
  next() 
})

module.exports = mongoose.model('events', eventsSchema)