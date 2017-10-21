const Events = require('../models/events.js')
const conekta = require('../pays/config.js')

function getWelcome(req, res) {
  res.status(200).send({message: 'bienvenido'})
}

function getEvents (req, res) {
  
  Events.find( {}, (err, event) => {
    res.status(200).json(event)
  })
}

function saveEvents (req, res) {
  let event = new Events()
  
  event.key = req.body.key
  event.img = req.body.img
  event.name = req.body.name
  event.schedule = req.body.schedule
  event.review = req.body.review


  event.save( (err) => {
    if (err) {
      res.status(500).send({message : err.message}) 
      return console.log(err.message) 
    }
    res.status(200).send({message : 'save it'})
  })
}


module.exports = {
  getWelcome,
  getEvents,
  saveEvents
}