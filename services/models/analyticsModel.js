const mongoose = require('mongoose');

const stringParams = {type: String, required: true};

const analytics = new mongoose.Schema({
    date: stringParams,
    note: stringParams
});

module.exports = mongoose.model('Analytics', analytics);