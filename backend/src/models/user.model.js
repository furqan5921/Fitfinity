const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: { type: String, required: true, uniquie: true },
    password: { type: String, required: true },
    sex: { type: String, required: true },
    birthday: { type: String, required: true },
    height: { type: String, required: true },
    weight: { type: String, required: true },
    role: {
        type: String,
        enum: ["base", "premium"],
        default: "base"
    }
})

const userModel = model('users', userSchema)

module.exports = userModel