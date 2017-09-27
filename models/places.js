const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placesSchema = new Schema({
  longitude : {type: String, required: true},
  latitude : {type: String, required: true}
})

module.exports = mongoose.model('places', placesSchema)