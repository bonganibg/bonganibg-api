const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors');

const routeProject = require("./routes/projectRoute");

const app = express();

app.use(bodyParser.json());

var localDB = 'mongodb://localhost:27017/bonganibg';
var cloudDB = process.env.CLOUD_DB;
app.use(cors());

console.log(cloudDB);
mongoose.connect(cloudDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
	console.log("Connected To Database");
	
	app.use("/api/projects", routeProject);
})
.catch(() => {
    console.log("Not Connected To Database");
});

module.exports = app;
