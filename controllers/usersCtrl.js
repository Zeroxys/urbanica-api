const Users = require('../models/users.js')

function getUsers (req,res) {
  Users.find({}, (err, place) => {
    if(err) return console.log(err.message)
    res.status(200).send({message: place})
  })
}

function saveUsers (req,res) {
  let users = new Users()

  users.name = req.body.name
  users.token = req.body.token
  users.email = req.body.email
  users.pay = req.body.email

  users.save((err) => {
    if(err) return console.log(err.message)
    res.status(200).send({message: 'save it'})
  })
}

module.exports = {
  getUsers,
  saveUsers
}