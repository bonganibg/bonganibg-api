const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config();

const routeProject = require("./routes/projectRoute");
const routeAnalytics = require("./routes/analyticsRoute");
const emailSender = require("./routes/emailRoute");

const app = express();

app.use(bodyParser.json());

var localDB = 'mongodb://localhost:27017/bonganibg';
var cloudDB = "mongodb+srv://testingtesting:hLV2Q1gTgUObGqxJ@bonganibg-cluster.8wkbq.mongodb.net/?retryWrites=true&w=majority"; //process.env.CLOUD_DB;
app.use(cors());

mongoose.connect(localDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
	console.log("Connected To Database");
	
	app.use("/api/projects", routeProject);
	app.use("/api/analytics", routeAnalytics);
	app.use("/api/email", emailSender);

})
.catch(() => {
    console.log("Not Connected To Database");
});

module.exports = app;
