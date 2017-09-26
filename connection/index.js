const uri = 'mongodb://localhost:27017/urbanica'
const mongoose = require('mongoose')
const bluebird = require('bluebird')

const connection = mongoose.connect(uri,{
  useMongoClient: true,
  promiseLibrary: bluebird  
})

module.exports = connection