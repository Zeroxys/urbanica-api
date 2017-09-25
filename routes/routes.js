const express = require('express')
const router = express.Router()
const Person = require('../models/events.js')
const Categories = require('../models/categories.js')

// ----> Models
const person = new Person()

// ----> Routes

router.get('/', (req,res) => {
  res.status(200).send({contain:'Welcome to my api'})
})

router.post('/events', (req,res) => {
  person.key = req.body.key
  person.img = req.body.img
  person.stars = req.body.stars
  person.enter = req.body.enter
  person.rate = req.body.rate
  person.schedule = req.body.schedule
  person.review = req.body.review
  person.date = new Date()

  const promise = person.save()
  promise.then( ()=> {

  })
  console.log(typeof person)
})

router.get('/events', (req,res) => {
  Person.find((err, person) => {
    if(err) res.status(500).send({message: err})
    res.status(200).json(person)
  })
})

router.get('/categories', (req, res) => {
  res.status(200).send({message : 'ok'})
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