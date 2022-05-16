const router = require('express').Router()
const Controller = require('../controllers/index')
const errorHandler = require('../midldleware/errorHandlingMiddleware')
const authenticationMiddleWare = require('../midldleware/authenticationMiddleWare')

router.get('/',(req, res) => {
  res.status(200).json({
      message: 'home parking'
  })
})


module.exports = router
