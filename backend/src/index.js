require("dotenv").config();
const cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user.routes')

const app = express();
app.use(cors())
app.use(express.json())
app.use('/users', userRouter)

app.get('/', (req, res) => res.send('Hey bud API Works!'))

mongoose.connect(process.env.URL).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`listening on port http://localhost:${process.env.PORT}`);
    })
})