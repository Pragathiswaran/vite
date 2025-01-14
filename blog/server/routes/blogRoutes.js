const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/blogs/')
    },
    filename: function (req, file, cb) {
        const filename = req.body.blogname
        console.log(req.body)
      cb(null,file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
const { getBlogPosts, getSingleBlog, createBlog, createComment } = require('../controller/blogController');

router.get('/', getBlogPosts) 

router.get('/post/:id', getSingleBlog)

router.post('/profile/createblog',upload.single('blogImage'), createBlog)

router.post('/post/comment', createComment)


module.exports = router;