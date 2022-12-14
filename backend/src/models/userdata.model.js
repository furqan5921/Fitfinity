const { Schema, model } = require("mongoose");


const userSchema = new Schema({
    user : {
        type : String,
    },
    data : {
        type : Schema.Types.ObjectId,
        ref: "nutridata"
    },
})

const UserData = model("userdata", userSchema)

module.exports = UserData