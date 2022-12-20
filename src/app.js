const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();


app.use(cors());
app.use(express.json());

const aboutRoute = require('./routes/about.route');

mongoose.connect(process.env.MONGO_DB,{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connected to database");

    app.use('/about', aboutRoute);
})
.catch((error) => {
    console.log("failed to connect to database")
});

module.exports = app;