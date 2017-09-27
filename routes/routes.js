const express = require('express')
const api = express.Router()

//Controllers
const eventCtrl = require('../controllers/eventsCtrl.js')
const categoriesCtrl = require('../controllers/categoriesCtrl.js')
const placesCtrl = require('../controllers/placesCtrl.js')

// ----> Routes for events
api.get('/', eventCtrl.getWelcome)
api.post('/events', eventCtrl.saveEvents)
api.get('/events', eventCtrl.getEvents)

// ----> Routes for categories
api.get('/categories', categoriesCtrl.getCategories)
api.post('/categories', categoriesCtrl.saveCategories)

// ----> Routes for places
api.get('/places', placesCtrl.getPlaces)
api.post('/places', placesCtrl.savePlaces)

module.exports = api