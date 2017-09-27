const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventsSchema = new Schema({

  categorieId: {type: Schema.ObjectId, ref: 'categories'},
  name: { type: String, required: true},
  img : {type: String, required: true}

})

module.exports = mongoose.model('events', eventsSchema)