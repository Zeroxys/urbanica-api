const uri = 'mongodb://localhost:27017/urbanica'
const mongoose = require('mongoose')
const bluebird = require('bluebird')
const port = process.env.Port || 8181
const express = require('express')
const app = express()

const connection = mongoose.connect(uri,{
  useMongoClient: true,
  promiseLibrary: bluebird  
})

module.exports = connection