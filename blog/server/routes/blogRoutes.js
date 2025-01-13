const express = require('express');
const router = express.Router();
const { getBlogPosts, getSingleBlog, createBlog } = require('../controller/blogController');

router.get('/', getBlogPosts) // blog posts

router.get('/post/:id', getSingleBlog)

router.post('/profile/createblog', createBlog)

module.exports = router;