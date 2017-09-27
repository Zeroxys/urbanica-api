const Categories = require('../models/categories.js')
const Events = require('../models/events.js')

function getCategories (req, res) {

  Categories.find( (err, categorie) => {
    if(err) res.status(500).send({message: err})

    Categories.populate(categorie, {path : "events"}, () => {
      res.status(200).json(categorie)
    })
  })

}

function saveCategories (req, res) {
  let categorie = new Categories()
  
    categorie.name = req.body.name
    categorie.events = req.body.id

    categorie.save( (err) => {
      if(err) return console.log(err.message)  
      res.status(200).send({message: categorie})
    })
}

module.exports = {
  getCategories,
  saveCategories
}