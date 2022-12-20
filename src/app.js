const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_DB,{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connected to database");
})
.catch((error) => {
    console.log("failed to connect to database")
});

module.exports = app;