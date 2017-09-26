const Events = require('../models/events.js')
const Categories = require('../models/categories.js')
const express = require('express')
const router = express.Router()

function handleErr(err) {
  console.log(err)
  res.status(500).send({message : err.message})
}

// ----> Routes
router.get('/', (req,res) => {
  res.status(200).send({contain:'Welcome to my api'})
})

router.post('/events', (req,res) => {

  let event = new Events()

  event.name = req.body.name

  event.save( (err) => {
    if (err) return handleErr(err)
    res.status(200).send({message : event})
  })
})

router.get('/events', (req,res) => {

  Events.find((err, person) => {
    if(err) res.status(500).send({message: err})
    res.status(200).json(person)
  })

})

router.get('/categories', (req, res) => {
  Categories.find( (err, categorie) => {
    if(err) res.status(500).send({message: err})
    res.status(200).json(categorie)
  }) 
})

router.post('/categories', (req, res) => {
  let categorie = new Categories()

  categorie.name = req.body.name

  categorie.save( (err) => {
    if(err) return res.status(500).send({message: 'error'})

    res.status(200).send({message: categorie})
  })
})

module.exports = router