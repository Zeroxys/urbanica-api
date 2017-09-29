const request = require('supertest')
const test = require('ava')
const app = require('../app.js')

test('must be GET', t => {
  request(app).get('/').expect(200, err => {
    if (err) return done(err)
    t.pass()
  })
})