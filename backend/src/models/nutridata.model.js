const { Schema, model } = require("mongoose");



const nutriSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    energy:{
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
        default:"100"
    },
    filter:{
        type:String,
        required:true,
        default:"custom"
    }
})

const Nutridata = model("Nutridata", nutriSchema)

module.exports = Nutridata