const mongoose = require('mongoose');

const stringParams = {type: String, required: true};

const Email = mongoose.Schema({
    Name: stringParams,
    Email: stringParams,
    Subject: stringParams,
    Message: stringParams,
    SentOn: stringParams
});

module.exports = mongoose.model('Email', Email);