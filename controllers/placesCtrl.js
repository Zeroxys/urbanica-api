const Places = require('../models/places.js')

function getPlaces (req, res) {
  Places.find({}, (err, place) => {
    if(err) return console.log(err)
    res.status(200).send({place}) 
  })
}

function savePlaces (req, res) {
  let places = new Places()

  places.longitude = req.body.longitude
  places.latitude = req.body.latitude

  places.save( (err) => {
    if(err) return console.log(err.message)
    res.status(200).send({message :  'save it'})
  })
}

module.exports = {
  getPlaces,
  savePlaces
}