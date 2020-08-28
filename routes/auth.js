const router = require('express').Router()
const passport = require('../passport')
const ctrl = require('../controllers')


router.post('/register', ctrl.auth.register)
router.post('/login', passport.authenticate('local'), ctrl.auth.login)
router.get('/verify', ctrl.auth.verify)
router.delete('/logout', ctrl.auth.logout)

module.exports = router