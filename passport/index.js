const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const User = require('../models/user')

passport.serializeUser((user, done) => {
  console.log('passport/index.js: serialize user called')
  console.log(user)
  done(null, user._id)
})

passport.deserializeUser((id, done) => {
  console.log('passport/index.js: deserialize user called')
  
  User.findById(id, 'email', (err, user) => {
    console.log('deserialized user:')
    console.log(user)
    done(null, user)
  })
})

passport.use(LocalStrategy)

module.exports = passport