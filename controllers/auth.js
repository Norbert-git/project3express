const db = require('../models')
const bcrypt = require('bcrypt')

const register = (req, res) => {
  console.log('in register')
  console.log(req.body)
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({
        status: 400,
        message: "Please enter a name, email, and password"
    })
  }
  
  db.User.findOne({ email: req.body.email }, (err, foundUser) => {
    // error checking for a problem with the server or DB
    if (err) return res.status(500).json({
      status: 500,
      message: 'Something went wrong. Please try again.'
    })

    
    if (foundUser) return res.status(400).json({
      status: 400,
      message: "A user with that email address already exists!"
    })

    const newUser = new db.User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    console.log('we are going to input this user', newUser)
    newUser.save((err, savedUser) => {
      console.log(err)
      console.log(savedUser)
      if (err) return res.json(err)
      res.json(savedUser)
    })
  })
}

const login = (req, res) => {
  console.log('we are in the login controller')
  console.log(req.session);
  res.json({ user: req.user.id })
}

const verify = (req, res) => {
  if (!req.user) return res.status(401).json({
    message: 'Unauthorized!'
  })
  res.status(200).json({
    message: `Current user verified with ID ${ req.user.id }`
  })
}

const logout = (req, res) => {
  if (!req.user) return res.status(401).json({
    message: 'No user to log out!'
  })

  req.logout()
  res.json({ message: 'User logged out' })
}

module.exports = {
  register,
  login,
  verify,
  logout
}