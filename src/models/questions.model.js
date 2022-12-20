const mongoose = require('mongoose');

const stringParams = {type: String, required: true}

const questions = mongoose.Schema({
    _id: stringParams,
    question: stringParams,
    answer: stringParams
})

module.exports = mongoose.model('Questions', questions);