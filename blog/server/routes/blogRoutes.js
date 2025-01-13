const express = require('express');
const router = express.Router();
const { getBlogPosts, getSingleBlog, createBlog, createComment } = require('../controller/blogController');

router.get('/', getBlogPosts) // blog posts

router.get('/post/:id', getSingleBlog)

router.post('/profile/createblog', createBlog)

router.post('/post/comment', createComment)

module.exports = router;