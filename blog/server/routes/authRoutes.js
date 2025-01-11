const express = require('express');
const router = express.Router();
const cors = require('cors');
const { registerUser, loginUser, authenticateUser, getBlogPosts, getSingleBlog, createBlog } = require('../controller/authController');

// router.use(cors({
//     credentials: true,
//     origin: 'http://localhost:5173' 
// })); 

router.get('/', getBlogPosts)
router.post('/register',registerUser);

router.post('/login',loginUser);
 
router.get('/profile', authenticateUser);

router.get('/post/:id', getSingleBlog)
router.post('/profile/createblog', createBlog)

module.exports = router