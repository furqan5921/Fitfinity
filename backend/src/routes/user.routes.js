require("dotenv").config();
const express = require('express');
const userModel = require("../models/user.model");
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const otpModel = require("../models/otp.model");

//nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
});

const app = express.Router()

app.get('/', (req, res) => res.send('This is user Route!'))

app.post('/signup', async (req, res) => {
    const { email, password, sex, birthday, height, weight } = req.body;

    try {
        const otp = Math.floor(1000 + Math.random() * 9000);
        let existingUser = await userModel.findOne({ email });
        if (existingUser) return res.status(400).send('user already exists')

        const newUser = new userModel({ email, password, sex, birthday, height, weight });
        await newUser.save()

        transporter.sendMail({
            to: email,
            from: process.env.EMAIL,
            subject: 'OTP Verification',
            text: `Please enter this OTP ${otp}`
        }).then(async () => {

            const existingOtp = await otpModel.find({ email })
            if (existingOtp.length) {
                await otpModel.findOneAndUpdate({ email }, { $set: { otp } })
                return res.send({ message: 'otp updated' })
            }

            const sentOtp = new otpModel({ email, otp })
            await sentOtp.save()
            return res.send({ message: 'OTP Sent' })
        })

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

app.post('/otp', async (req, res) => {
    const { otp, email } = req.body;

    try {

        let userData = await userModel.findOne({ email })
        let userOtp = await otpModel.findOne({ email })

        if (userData) {
            if (userOtp.otp === otp) {
                await userModel.findOneAndUpdate({ email }, { $set: { otpVerified: true } })
                return res.send({ message: 'signup successful' })
            } else {
                return res.send({ message: 'wrong otp' })
            }
        }

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

app.post('/resendOtp', async (req, res) => {
    const { email } = req.body;

    try {

        const otp = Math.floor(1000 + Math.random() * 9000);
        let existingUser = await userModel.findOne({ email });
        if (existingUser && existingUser.otpVerified === false) {

            transporter.sendMail({
                to: email,
                from: process.env.EMAIL,
                subject: 'OTP Verification',
                text: `Please enter this OTP ${otp}`
            }).then(async () => {

                const existingOtp = await otpModel.find({ email })
                if (existingOtp.length) {
                    await otpModel.findOneAndUpdate({ email }, { $set: { otp } })
                    return res.send({ message: 'otp updated' })
                }

                const sentOtp = new otpModel({ email, otp })
                await sentOtp.save()
                return res.send({ message: 'OTP Sent' })
            })

        } else {
            return res.send({ message: 'user already verified' })
        }

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        let existingUser = await userModel.findOne({ email, password });

        if (!existingUser) return res.status(401).send({ message: 'wrong credentials' })

        if (existingUser.otpVerified) {
            let token = jwt.sign({ email: existingUser.email, role: existingUser.role, }, process.env.TOKEN, { expiresIn: '7d' })
            return res.status(200).send({ message: 'login successful', token })
        } else {
            return res.send({ message: 'verify otp' })
        }

    } catch (e) {
        return res.status(500).send(e.message)
    }
})




module.exports = app