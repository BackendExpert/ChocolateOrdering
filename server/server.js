const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const path = require('path'); 
const bodyParser = require('body-parser');


const AuthRoute = require('./Routes/AuthRoute')

const app = express();
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGODB_ATLES_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.use(cors(
    {
        origin: ["https://chocolate-ordering.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
))

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

app.get("/", (req, res) => {
    res.json("Hello This is testing")
})

app.use('/auth', AuthRoute)

app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`)
})