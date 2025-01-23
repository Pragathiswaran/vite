const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadImages  = require('../middlewares/uploadImages');
const upload = multer({ storage: uploadImages })
const { getBlogPosts, getSingleBlog, createBlog, createComment } = require('../controller/blogController');

router.get('/', getBlogPosts); 

router.get('/post/:id', getSingleBlog)

router.post('/profile/createblog',upload.single('blogImage'), createBlog)

router.post('/post/comment', createComment)

module.exports = router;