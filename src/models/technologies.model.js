const mongoose = require('mongoose');

const stringParams = {type: String, required: true};

const technologies = mongoose.Schema({
    // _id: stringParams,
    heading: stringParams,
    technologies: {
        type: Array,
        // _id: string,
        name: stringParams
    }
});

module.exports = mongoose.model('technologies', technologies);