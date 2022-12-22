const mongoose = require('mongoose');

const stringParams = {type: String, required: true};

const project = mongoose.Schema({
    _id: stringParams,
    name: stringParams,
    img_url: stringParams,
    short_description: stringParams,
    tags: {
        type: Array,
        _id: stringParams,
        name: stringParams
    }
})

module.exports = mongoose.model('Project', project);