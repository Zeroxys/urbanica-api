const express = require('express')
const api = express.Router()

//Controllers
const eventCtrl = require('../controllers/eventsCtrl.js')
const categoriesCtrl = require('../controllers/categoriesCtrl.js')

// ----> Routes for events
api.get('/', eventCtrl.getWelcome)
api.post('/events', eventCtrl.postEvents)
api.get('/events', eventCtrl.getEvents)

// ----> Routes for categories
api.get('/categories', categoriesCtrl.getCategories)
api.post('/categories', categoriesCtrl.postCategories)

module.exports = api