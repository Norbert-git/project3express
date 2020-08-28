const router = require('express').Router()
const passport = require('../passport')
const ctrl = require('../controllers')


router.get('/', ctrl.tools.index)
router.get('/:id', ctrl.tools.show)

router.post('/' , ctrl.tools.create)
router.put('/:id', ctrl.tools.update)
router.delete('/:id', ctrl.tools.destroy)

module.exports = router