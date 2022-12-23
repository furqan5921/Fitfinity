const { Schema, model } = require("mongoose");


const userSchema = new Schema({
    user : {
        type : String,
    },
    energy:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    protein:{
        type:String,
        required:true
    },
    carbs:{
        type:String,
        required:true
    },
    fat:{
        type:String,
        required:true
    },
    ss:{
        type:String,
        required:true,
    },
    filter:{
        type:String,
        required:true
    }
})

const UserData =new model("userdata", userSchema)

module.exports = UserData