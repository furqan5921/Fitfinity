require("dotenv").config();
const express = require('express');
const userModel = require("../models/user.model");
const jwt = require('jsonwebtoken')

const app = express.Router()

app.get('/', (req, res) => res.send('This is user Route!'))

app.post('/signup', async (req, res) => {
    const { email, password, sex, birthday, height, weight } = req.body;

    try {

        let existingUser = await userModel.findOne({ email });

        if (existingUser) return res.status(400).send('user already exists')

        const newUser = new userModel({ email, password, sex, birthday, height, weight });
        await newUser.save()
        return res.status(201).send({ message: 'user created successfully' })

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        let existingUser = await userModel.findOne({ email, password });

        if (!existingUser) return res.status(401).send({ message: 'wrong credentials' })

        let token = jwt.sign({email: existingUser.email, role: existingUser.role, }, process.env.TOKEN, { expiresIn: '7d' })
        return res.status(200).send({ message: 'login successful', token })

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

module.exports = app