require("dotenv").config();
const cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user.routes')
const nutriRouter = require("./routes/nutridata.routes")
const UserData = require("./routes/userdata.routes")

const app = express();
app.use(cors())
app.use(express.json())
app.use('/users', userRouter)
app.use("/nutri", nutriRouter)
app.use("/userdata", UserData)

app.get('/', (req, res) => res.send('Hey bud API Works!'))

mongoose.connect(process.env.URL).then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`listening on port http://localhost:${process.env.PORT}`);
    })
})