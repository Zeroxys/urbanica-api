const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema


const usersSchema = new Schema({
  name : {type: String, required: true},
  token : {type: String, required: true},
  email : {type: String, unique: true, required: true, lowercase: true},
  avatar : {type: String, required: true},
  password : {type: String, select: false, required: true},
  signUpDate: {type: Date, default: Date.now()},
  lastLogin : Date,
  pay : String,
  places : [{type : Schema.ObjectId, ref : 'places'}]
})

usersSchema.pre('save', next => {
  let user = this

  if (!user.isModified('password')) return next()

  bcrypt.genSalt(10, (err, salt) => {
    if(err) return next(err)
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err)

      user.password = hash
      next()
    })
  })
})

module.exports = mongoose.model('users', usersSchema)
