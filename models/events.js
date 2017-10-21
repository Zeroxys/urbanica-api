const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventsSchema = new Schema({  
  key : {type: Number, required: true},
  img: { type: String},
  name : {type: String, required: true},
  schedule: {type: String, required: true},
  review: {type: String, required: true}
})

eventsSchema.pre('save', next => {
  let eventsSchema = this
  next() 
})

module.exports = mongoose.model('events', eventsSchema)