const mongoose = require('mongoose');

// Blog schema
const blogSchema = new mongoose.Schema({
    blogname: String,
    blog: String,
    dateTime: Date,
    author: String,
    comments: [
        {
            name: String,
            comment: String,
            date: Date,
            time: String
        }
    ],
    imageUrl: String
});

// Create a model from the schema
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
