const Events = require('../models/events.js')
const conekta = require('../pays/config.js')

function getWelcome(req, res) {
  res.status(200).send({message: 'bienvenido'})
}

function getEvents (req, res) {
  
  Events.find( {}, (err, event) => {
    res.status(200).send({event})
  })
}

function saveEvents (req, res) {
  let event = new Events()
  
  event.name = req.body.name
  event.img = req.body.img

  event.save( (err) => {
    if (err) return console.log(err.message)
    res.status(200).send({message : event})
  })
}


module.exports = {
  getWelcome,
  getEvents,
  saveEvents
}