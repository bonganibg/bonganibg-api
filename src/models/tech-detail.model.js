const mongoose = require('mongoose');

const stringParams = {type: String, required: true};

const tech = mongoose.Schema({
    // _id: stringParams,
    name: stringParams,
    description: stringParams,
    score: {type: Number, required: true},
    icon: stringParams
});

module.exports = mongoose.model('tech', tech);