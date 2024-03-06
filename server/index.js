const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('connected to DB');
});

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})