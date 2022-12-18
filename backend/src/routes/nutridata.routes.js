const express = require("express")
const Nutridata = require("../models/nutridata.model")
require("dotenv").config();
const jwt = require('jsonwebtoken')

const app = express.Router()

app.get("/", async(req, res) => {
    try{
        let data = await Nutridata.find({})
        res.status(200).send(data)
    }catch(e){
        res.status(404).send("e.message")
    }
})

app.get("/filter/:fl", async(req, res) => {
    const {fl} = req.params
    let data = await Nutridata.find({filter:fl})
    res.send(data)
})


// app.use((req, res, next)=>{
//     const {token} = req.headers
//     if (token) {
//         const verify = jwt.verify(token, process.env.TOKEN)
//         if (verify) {
//             req.user = verify
//             next()
//         }
//     } res.status(401).send("Unauthorized")
// })





module.exports = app