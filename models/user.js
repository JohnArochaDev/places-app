// Schema and dependencies
const mongoose = require('../utils/connection')
const { Schema, model } = mongoose





// Schema Definition
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    passowrd: {
        type String,
        required: true
    }
})





// Create user model
const User = model('User', userSchema)




// Export user model
module.exports = User