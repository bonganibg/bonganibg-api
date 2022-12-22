const mongoose = require('mongoose');

const tag = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Tag', tag);