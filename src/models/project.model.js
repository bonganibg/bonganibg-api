const mongoose = require('mongoose');

const stringParams = {type: String, required: true};

const project = mongoose.Schema({
    //_id: stringParams,
    name: stringParams,
    tags: {
        type: Array,
        tag: stringParams
    },
    short_description: stringParams,
    

})

module.exports = mongoose.model('Project', project);