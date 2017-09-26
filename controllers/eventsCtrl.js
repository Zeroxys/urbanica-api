const Events = require('../models/events.js')

function getWelcome(req, res) {
  res.status(200).send({message: 'bienvenido'})
}

function getEvents (req, res) {
  Events.find((err, events) => {
    if(err) res.status(500).send({message: err})
    res.status(200).json(events)
  })
}

function postEvents (req, res) {
  let event = new Events()
  
    event.name = req.body.name
  
    event.save( (err) => {
      if (err) return handleErr(err)
      res.status(200).send({message : event})
    })
}


module.exports = {
  getWelcome,
  getEvents,
  postEvents
}