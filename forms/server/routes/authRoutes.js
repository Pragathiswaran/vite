const express = require('express')
const routes = express.Router() 
const { registerController, userLogin } = require('../controllers/authControllers')

routes.route('/register').post(registerController)
routes.route('/login').post(userLogin)

module.exports = routes