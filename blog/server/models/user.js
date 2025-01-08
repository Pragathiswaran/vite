const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String
})

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;