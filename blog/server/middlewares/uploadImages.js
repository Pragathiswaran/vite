const multer = require('multer');
const uploadImages = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/blogs/')
    },
    filename: function (req, file, cb) {
        const filename = req.body.blogname +'.'+ file.originalname.split('.').pop();
      cb(null, filename)
    }
});

module.exports = uploadImages;