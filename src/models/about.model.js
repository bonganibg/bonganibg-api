const mongoose = require('mongoose');

const stringParams = {type: String, required: true};

const about = mongoose.Schema({
    //_id: stringParams,
    heading: stringParams,
    paragraph: stringParams
});

module.exports = mongoose.model('About', about);