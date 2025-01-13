const mongoose = require('mongoose');

// Blog schema
const blogSchema = new mongoose.Schema({
    blogname: {
        type: String,
        required: true
    },
    blog: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    comments: [
        {
            name: String,
            comment: String,
            date: String,
            time: String
        }
    ],
    imageUrl: String
});

// Create a model from the schema
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
