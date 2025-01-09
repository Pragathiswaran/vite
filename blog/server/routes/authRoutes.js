const express = require('express');
const router = express.Router();
const cors = require('cors');
const { registerUser, loginUser, authenticateUser, getBlogPosts, getSingleBlog, createBlog } = require('../controller/authController');

router.use(cors({
    credentials: true,
    origin: 'http://localhost:5173' 
})); 

router.get('/', getBlogPosts)
router.post('/register',registerUser);

router.post('/login',loginUser);
 
router.get('/profile', authenticateUser, async (req,res) => {
    try{
        const userData = {id: req.user.id, username: req.user.username, email: req.user.email}
        // console.log(req)
        return res.status(200).json(userData);
    }catch(err){
        console.log(err)
        return res.status(500).json({error:err.message})
    }
});

router.get('/post/:id', getSingleBlog)
router.post('/profile/createblog', createBlog)

module.exports = router