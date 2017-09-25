const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventsSchema = new Schema({
    key:Number,
    img : String,
    name : String,
    stars: Number,
    enter: String,
    rate: String,
    schedule : String,
    review : String,
    date : Date
})

module.exports = mongoose.model('events', eventsSchema)