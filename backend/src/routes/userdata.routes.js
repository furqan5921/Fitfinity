const express = require("express")
const UserData = require("../models/userdata.model")
require("dotenv").config();
const jwt = require('jsonwebtoken')

const app = express.Router()

// app.get("/", async(req, res) => {
//     const token = req.headers.authorization.split(" ")[1]
//     console.log(token,123)
//     if (token) {
//         const verify = await jwt.verify(token, process.env.TOKEN)
//         if (verify) {
//             try{
//                 const data = await UserData.find({user:verify.email})
//                 res.status(200).send(data)
//             }catch(e){
//                 res.status(404).send("server error")
//             }
//         }
//     }
// })


app.use(async(req, res, next)=>{
    const token = req.headers.authorization.split(" ")[1]
    try{
        if (token) {
            const verify = await jwt.verify(token, process.env.TOKEN)
            if (verify) {
                req.user = verify
                next()
            }
        } 
    }catch(e){
        res.status(401).send("Unauthorized")
    }
})

app.get("/", async(req, res) => {
    try{
        const data = await UserData.find({})
        res.status(200).send(data)
    }catch(e){
        res.status(404).send("server error")
    }
})

app.delete("/:id", async(req, res) => {
    let {id} = req.params
    try{
        const data = await UserData.findByIdAndDelete({_id:id})
        res.status(200).send(data)
    }catch(e){
        res.status(404).send("server error")
    }
})

app.post("/", async(req, res) => {
    const {energy, protein, carbs, fat, ss, filter, name}=req.body
    try{
        const xx=new UserData({energy, protein, carbs, fat, ss, filter,name,user:req.user.email})
        xx.save()

        return res.status(200).send("successful")
    }catch(e){
        res.status(403).send("Unauthorized") 
    }
})





module.exports = app