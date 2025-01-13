const express = require('express');
const router = express.Router();
const cors = require('cors');
const { registerUser, loginUser, authenticateUser } = require('../controller/authController');


router.post('/register',registerUser);

router.post('/login',loginUser);
 
router.get('/profile', authenticateUser);

module.exports = router