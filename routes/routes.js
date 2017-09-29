const express = require('express')
const api = express.Router()

//Controllers
const eventCtrl = require('../controllers/eventsCtrl.js')
const categoriesCtrl = require('../controllers/categoriesCtrl.js')
const placesCtrl = require('../controllers/placesCtrl.js')
const usersCtrl = require('../controllers/usersCtrl.js')

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

// ----> Routes for users
api.get('/users', usersCtrl.getUsers)
api.post('/users', usersCtrl.saveUsers)

module.exports = api