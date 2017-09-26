const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventsSchema = new Schema({
  name:String,
  categorie : {
      type: Schema.ObjectId,
      ref: 'Categories'
    }
})

module.exports = mongoose.model('events', eventsSchema)