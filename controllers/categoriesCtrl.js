const Categories = require('../models/categories.js')

function getCategories (req, res) {
  Categories.find( (err, categorie) => {
    if(err) res.status(500).send({message: err})
    res.status(200).json(categorie)
  })
}

function postCategories (req, res) {
  let categorie = new Categories()
  
    categorie.name = req.body.name
  
    categorie.save( (err) => {
      if(err) return res.status(500).send({message: 'error'})
  
      res.status(200).send({message: categorie})
    })
}

module.exports = {
  getCategories,
  postCategories
}