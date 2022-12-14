const express = require("express")
const userData = require("../models/userdata.model")
require("dotenv").config();
const jwt = require('jsonwebtoken')

const app = express.Router()




app.use((req, res, next)=>{
    const {token} = req.headers
    if (token) {
        const verify = jwt.verify(token, process.env.TOKEN)
        if (verify) {
            req.user = verify
            next()
        }
    } res.status(401).send("Unauthorized")
})

app.get("/", async(req, res) => {
    const {email} = req.user
    const data = await Nutridata.find({})
    res.send(data)
})

app.post("/userdata", async(req, res) => {
    const {email} = req.user
    const {data_id} = req.body
    try{
        const data = await (await userData.create({data:data_id, user:email})).populate("nutridata")
        res.status(200).send(data)
    }catch(e){
        res.status(401).send("Unauthorized")
    }
})





module.exports = app